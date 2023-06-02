import React from "react";
import { render, screen } from "@testing-library/react";
import { Form } from "@components/Form";

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
      <Form onSubmit={() => {}}>
        <SampleFormChildComponent />
      </Form>
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
      <Form onSubmit={() => {}} rootClassName="sample_class">
        <SampleFormChildComponent />
      </Form>
    );

    // debug();
    const component = screen.queryByTestId("form-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <Form onSubmit={() => {}} rootStyles={{ border: "2px solid red" }}>
        <SampleFormChildComponent />
      </Form>
    );

    const component = screen.queryByTestId("form-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should execute onSubmit when provided as prop", () => {
    const onSubmitMock = jest.fn();
    const { debug } = render(
      <Form onSubmit={onSubmitMock}>
        <SampleFormChildComponent />
      </Form>
    );

    // debug();
    const button = screen.queryByTestId("form-submit-button");
    button.click();

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
