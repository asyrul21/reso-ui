import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { NumberInput } from "@forms/Controls/Number-Input";
import { FormInputValidator } from "@interfaces/Form";

describe("Number Input Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<NumberInput id="test" onChange={jest.fn()} />);

    // debug();
    const component = screen.queryByTestId("number-input-test-container");
    expect(component).toBeInTheDocument();
  });

  test("should execute onChange with correct value", () => {
    const onChangeFn = jest.fn();
    const { debug } = render(<NumberInput id="test" onChange={onChangeFn} />);

    // debug();
    const component = screen.queryByTestId("number-input-test-input");
    fireEvent.change(component, { target: { value: 5 } });

    expect(onChangeFn).toBeCalledWith(5);
  });

  test("should render error if error is not null", () => {
    const onChangeFn = jest.fn();

    const { debug } = render(
      <NumberInput
        id="test"
        onChange={onChangeFn}
        error={"Test error message"}
      />
    );

    // debug();
    const componentError = screen.queryByTestId("number-input-test-error");
    expect(componentError).toBeInTheDocument();
    expect(componentError).toHaveTextContent("Test error message");
  });

  describe("Validations", () => {
    test("should execute setError second time if required and validated on load, with value set to null", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <NumberInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          value={null}
          required
          validateOnLoad
        />
      );

      // debug();
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should execute setError second time if required and validated on load, with value set to empty string", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <NumberInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          value={""}
          required
          validateOnLoad
        />
      );

      // debug();
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should execute setError second time if entred value is less than min", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <NumberInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          min={5}
        />
      );

      // debug();
      const component = screen.queryByTestId("number-input-test-input");
      fireEvent.change(component, { target: { value: 2 } });
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should NOT execute setError second time if entred value is more than min", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <NumberInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          min={5}
        />
      );

      // debug();
      const component = screen.queryByTestId("number-input-test-input");
      fireEvent.change(component, { target: { value: 7 } });
      expect(setErrorMock).toBeCalledTimes(1); // 1 to reset only
    });

    test("should execute setError second time if value is less than min, passed as string, validated on Load", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <NumberInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          value={"2"}
          min={5}
          validateOnLoad
        />
      );

      // debug();
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should NOT execute setError second time if value is more than min, passed as string, validated on Load", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <NumberInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          value={"7"}
          min={5}
          validateOnLoad
        />
      );

      // debug();
      expect(setErrorMock).toBeCalledTimes(1); // 1 to reset only
    });

    test("should execute setError second time if entered value is more than max", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <NumberInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          max={5}
        />
      );

      // debug();
      const component = screen.queryByTestId("number-input-test-input");
      fireEvent.change(component, { target: { value: 7 } });
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should NOT execute setError second time if entered value is less than max", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <NumberInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          max={5}
        />
      );

      // debug();
      const component = screen.queryByTestId("number-input-test-input");
      fireEvent.change(component, { target: { value: 3 } });
      expect(setErrorMock).toBeCalledTimes(1); // 1 to reset only
    });

    test("should execute setError second time if value is more than max, passed as string, validated on load", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <NumberInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          max={5}
          validateOnLoad
          value={"7"}
        />
      );

      // debug();
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should NOT execute setError second time if value is less than max, passed as string", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <NumberInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          max={5}
        />
      );

      // debug();
      const component = screen.queryByTestId("number-input-test-input");
      fireEvent.change(component, { target: { value: "3" } });
      expect(setErrorMock).toBeCalledTimes(1); // 1 to reset only
    });
  });
});
