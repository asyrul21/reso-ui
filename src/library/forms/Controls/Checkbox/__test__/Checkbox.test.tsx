import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "../Checkbox";

describe("Checkbox Input Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<Checkbox id="test" onChange={jest.fn()} />);

    // debug();
    const component = screen.queryByTestId("checkbox-test-container");
    expect(component).toBeInTheDocument();
  });

  test("should execute onChange with correct value - true", () => {
    const onChangeFn = jest.fn();
    const { debug } = render(<Checkbox id="test" onChange={onChangeFn} />);

    // debug();
    const component = screen.queryByTestId("checkbox-test-input");

    act(() => {
      fireEvent.click(component);
    });

    expect(onChangeFn).toHaveBeenCalledWith(true);
  });

  test("should execute onChange with correct value - false", () => {
    const onChangeFn = jest.fn();
    const { debug } = render(
      <Checkbox id="test" onChange={onChangeFn} value={true} />
    );

    // debug();
    const component = screen.queryByTestId("checkbox-test-input");
    act(() => {
      fireEvent.click(component);
    });

    expect(onChangeFn).toHaveBeenCalledWith(false);
  });

  test("Required validation on load", () => {
    const onChangeFn = jest.fn();
    const setErrorMock = jest.fn();
    const { debug } = render(
      <Checkbox
        id="test"
        onChange={onChangeFn}
        required
        validateOnLoad
        setError={setErrorMock}
      />
    );

    // debug();
    expect(setErrorMock).toBeCalledTimes(2); // 1 to reset and 1 to set error
  });
});
