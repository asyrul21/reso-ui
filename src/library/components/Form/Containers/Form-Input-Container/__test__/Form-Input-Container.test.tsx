import React from "react";
import { render, screen } from "@testing-library/react";
import * as FlexModule from "@components/Containers/Flex/Flex";
import { FormInputContainer } from "@components/Form/Containers";
import { createComponentStyles, withSpacingsProps } from "@utils/styles";

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
      const { rootClassName, rootStyles, children, mb } = props;
      const flexMockClasses = createComponentStyles(
        withSpacingsProps(
          {
            [rootClassName]: true,
          },
          { mb }
        )
      );

      return (
        <div
          data-testid="form-input-container-root"
          className={flexMockClasses}
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

  test("should apply margin bottom spacings prop by default", () => {
    const { debug } = render(
      <FormInputContainer>
        <SampleChildComponent />
      </FormInputContainer>
    );

    // debug();
    const component = screen.queryByTestId("form-input-container-root");
    expect(component).toHaveClass("spacing-mb-4");
  });
});
