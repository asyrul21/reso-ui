import React from "react";
import { render, screen } from "@testing-library/react";
import * as FlexModule from "@components/Containers/Flex/Flex";
import { FormInputContainer } from "@components/Form/Form-Input-Container";

const SampleChildComponent = () => {
  return (
    <>
      <label data-testid="form-input-container-input" />
      <input data-testid="form-input-container-label" />
    </>
  );
};

describe("Form Input Container Unit Tests", () => {
  beforeEach(() => {
    jest.spyOn(FlexModule, "Flex").mockImplementation((props) => {
      const { rootClassName, rootStyles, children } = props;
      return (
        <div
          data-testid="form-input-container-root"
          className={rootClassName}
          style={rootStyles}
        >
          {children}
        </div>
      );
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should render itself and children without error", () => {
    const { debug } = render(
      <FormInputContainer>
        <SampleChildComponent />
      </FormInputContainer>
    );

    // debug();
    const component = screen.queryByTestId("form-input-container-root");
    expect(component).toBeInTheDocument();

    const inputComponent = screen.queryByTestId("form-input-container-input");
    expect(inputComponent).toBeInTheDocument();

    const labelComponent = screen.queryByTestId("form-input-container-label");
    expect(labelComponent).toBeInTheDocument();
  });

  test("should apply custom className when provided as prop", () => {
    const { debug } = render(
      <FormInputContainer rootClassName="sample_class">
        <SampleChildComponent />
      </FormInputContainer>
    );

    // debug();
    const component = screen.queryByTestId("form-input-container-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <FormInputContainer rootStyles={{ border: "2px solid red" }}>
        <SampleChildComponent />
      </FormInputContainer>
    );

    const component = screen.queryByTestId("form-input-container-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  //   test("should apply margin bottom spacings prop by default", () => {
  //     const { debug } = render(
  //       <FormInputContainer>
  //         <SampleChildComponent />
  //       </FormInputContainer>
  //     );

  //     debug();
  //     const component = screen.queryByTestId("form-input-container-root");
  //     expect(component).toHaveClass("spacing-mb-8");
  //   });

  //   test("should execute onSubmit when provided as prop", () => {
  //     const onSubmitMock = jest.fn();
  //     const { debug } = render(
  //       <FormInputContainer onSubmit={onSubmitMock}>
  //         <SampleChildComponent />
  //       </FormInputContainer>
  //     );

  //     // debug();
  //     const button = screen.queryByTestId("form-submit-button");
  //     button.click();

  //     expect(onSubmitMock).toHaveBeenCalledTimes(1);
  //   });
});
