import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TextArea } from "../";

describe("Text Area Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(
      <TextArea id="test" formId="test123" onChange={jest.fn()} />
    );

    // debug();
    const component = screen.queryByTestId("text-area-test-container");
    expect(component).toBeInTheDocument();
  });

  test("should execute onChange with correct value", () => {
    const onChangeFn = jest.fn();
    const { debug } = render(
      <TextArea id="test" formId="test123" onChange={onChangeFn} />
    );

    // debug();
    const component = screen.queryByTestId("text-area-test-input");
    fireEvent.change(component, { target: { value: "test input value" } });

    expect(onChangeFn).toHaveBeenCalledWith("test input value");
  });

  test("should show correct value when provided as prop", () => {
    const onChangeFn = jest.fn();
    const { debug } = render(
      <TextArea
        id="test"
        formId="test123"
        onChange={onChangeFn}
        value="test value"
      />
    );

    // debug();
    const component = screen.queryByTestId("text-area-test-input");
    expect(component).toHaveTextContent("test value");
  });

  test("should show error if provided as prop", () => {
    const onChangeFn = jest.fn();
    const { debug } = render(
      <TextArea
        id="test"
        formId="test123"
        onChange={onChangeFn}
        error="test error"
      />
    );

    // debug();
    const component = screen.queryByTestId("text-area-test-error");

    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("test error");
  });
});
