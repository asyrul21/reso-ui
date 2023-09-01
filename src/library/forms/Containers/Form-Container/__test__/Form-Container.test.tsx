import React from "react";
import { render, screen } from "@testing-library/react";
import { FormContainer } from "@forms/Containers";

const SampleFormChildComponent = () => {
  return (
    <>
      <input data-testid="form-input" />
      <button data-testid="form-submit-button" type="submit">
        Submit
      </button>
    </>
  );
};

describe("Form Container Unit Tests", () => {
  test("should render itself and children without error", () => {
    const { debug } = render(
      // tslint:disable-next-line: no-empty
      <FormContainer onSubmit={() => {}}>
        <SampleFormChildComponent />
      </FormContainer>
    );

    // debug();
    const component = screen.queryByTestId("form-root");
    expect(component).toBeInTheDocument();

    const inputComponent = screen.queryByTestId("form-input");
    expect(inputComponent).toBeInTheDocument();

    const button = screen.queryByTestId("form-submit-button");
    expect(button).toBeInTheDocument();
  });

  test("should apply custom className when provided as prop", () => {
    const { debug } = render(
      // tslint:disable-next-line: no-empty
      <FormContainer onSubmit={() => {}} rootClassName="sample_class">
        <SampleFormChildComponent />
      </FormContainer>
    );

    // debug();
    const component = screen.queryByTestId("form-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      // tslint:disable-next-line: no-empty
      <FormContainer
        onSubmit={() => {}}
        rootStyles={{ border: "2px solid red" }}
      >
        <SampleFormChildComponent />
      </FormContainer>
    );

    const component = screen.queryByTestId("form-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should execute onSubmit when provided as prop", () => {
    const onSubmitMock = jest.fn();
    const { debug } = render(
      <FormContainer onSubmit={onSubmitMock}>
        <SampleFormChildComponent />
      </FormContainer>
    );

    // debug();
    const button = screen.queryByTestId("form-submit-button");
    button.click();

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
