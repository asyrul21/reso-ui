import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TextInput } from "../";
import { FormInputValidator } from "../../../../interfaces";

describe("Text Input Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<TextInput id="test" onChange={jest.fn()} />);

    // debug();
    const component = screen.queryByTestId("text-input-test-container");
    expect(component).toBeInTheDocument();
  });

  test("should execute onChange with correct value", () => {
    const onChangeFn = jest.fn();
    const { debug } = render(<TextInput id="test" onChange={onChangeFn} />);

    // debug();
    const component = screen.queryByTestId("text-input-test-input");
    fireEvent.change(component, { target: { value: "test input value" } });

    expect(onChangeFn).toBeCalledWith("test input value");
  });

  test("should render error if error is not null", () => {
    const onChangeFn = jest.fn();

    const { debug } = render(
      <TextInput id="test" onChange={onChangeFn} error={"Test error message"} />
    );

    // debug();
    const componentError = screen.queryByTestId("text-input-test-error");
    expect(componentError).toBeInTheDocument();
    expect(componentError).toHaveTextContent("Test error message");
  });

  describe("Validations", () => {
    test("should execute setError second time if required and validated on load", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <TextInput
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

    test("should execute setError second time if entered value is less than minLength", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <TextInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          value={"abc"}
          minLength={5}
          validateOnLoad
        />
      );

      // debug();
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should execute setError second time if entered value is more than maxLength", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <TextInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          value={"abcdefg"}
          maxLength={3}
          validateOnLoad
        />
      );

      // debug();
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should execute setError second time if type is Email but entered value has invalid format", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <TextInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          type="email"
        />
      );

      // debug();
      const component = screen.queryByTestId("text-input-test-input");
      fireEvent.change(component, { target: { value: "abc" } });
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should NOT execute setError second time if type is Email and entered valid value", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <TextInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          type="email"
        />
      );

      // debug();
      const component = screen.queryByTestId("text-input-test-input");
      fireEvent.change(component, { target: { value: "abc@mail.com" } });
      expect(setErrorMock).toBeCalledTimes(1); // 1 to reset only
    });

    test("should execute setError second time if type is telephone but entered value has invalid format", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <TextInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          type="tel"
        />
      );

      // debug();
      const component = screen.queryByTestId("text-input-test-input");
      fireEvent.change(component, { target: { value: "abc" } });
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should NOT execute setError second time if type is telephone and entered valid value", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <TextInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          type="tel"
        />
      );

      // debug();
      const component = screen.queryByTestId("text-input-test-input");
      fireEvent.change(component, { target: { value: "60120120120" } });
      expect(setErrorMock).toBeCalledTimes(1); // 1 to reset only
    });

    test("should execute setError second time if pattern is defined as regex but entered value does not match", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <TextInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          pattern={/^[0-9]{6,}$/}
        />
      );

      // debug();
      const component = screen.queryByTestId("text-input-test-input");
      fireEvent.change(component, { target: { value: "abc" } });
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should execute setError second time if pattern is defined as string but entered value does not match", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <TextInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          pattern={"^[0-9]{6,}$"}
        />
      );

      // debug();
      const component = screen.queryByTestId("text-input-test-input");
      fireEvent.change(component, { target: { value: "abc" } });
      expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
    });

    test("should NOT execute setError second time if pattern is defined as regex and entered value matches", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <TextInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          pattern={/^[0-9]{6,}$/}
        />
      );

      // debug();
      const component = screen.queryByTestId("text-input-test-input");
      fireEvent.change(component, { target: { value: "1234567" } });
      expect(setErrorMock).toBeCalledTimes(1); // 1 to reset only
    });

    test("should NOT execute setError second time if pattern is defined as string and entered value matches", () => {
      const onChangeFn = jest.fn();
      const setErrorMock = jest.fn();

      const { debug } = render(
        <TextInput
          id="test"
          onChange={onChangeFn}
          setError={setErrorMock}
          pattern={"^[0-9]{6,}$"}
        />
      );

      // debug();
      const component = screen.queryByTestId("text-input-test-input");
      fireEvent.change(component, { target: { value: "1234567" } });
      expect(setErrorMock).toBeCalledTimes(1); // 1 to reset only
    });

    describe("Custom Validators", () => {
      test("should execute setError second time if custom validator passed as object and fails", () => {
        const onChangeFn = jest.fn();
        const setErrorMock = jest.fn();
        const mockValidationFn = jest.fn().mockReturnValue(false);

        const sampleValidatorFn: FormInputValidator<string> = {
          validationFn: mockValidationFn,
          errorMessage: "Sample",
        };

        const { debug } = render(
          <TextInput
            id="test"
            onChange={onChangeFn}
            setError={setErrorMock}
            customValidators={sampleValidatorFn}
          />
        );

        // debug();
        const component = screen.queryByTestId("text-input-test-input");
        fireEvent.change(component, { target: { value: "test" } });
        expect(mockValidationFn).toBeCalled();
        expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
      });

      test("should NOT execute setError second time if custom validator passed as object and succeeds", () => {
        const onChangeFn = jest.fn();
        const setErrorMock = jest.fn();
        const mockValidationFn = jest.fn().mockReturnValue(true);

        const sampleValidatorFn: FormInputValidator<string> = {
          validationFn: mockValidationFn,
          errorMessage: "Sample",
        };

        const { debug } = render(
          <TextInput
            id="test"
            onChange={onChangeFn}
            setError={setErrorMock}
            customValidators={sampleValidatorFn}
          />
        );

        // debug();
        const component = screen.queryByTestId("text-input-test-input");
        fireEvent.change(component, { target: { value: "test" } });
        expect(mockValidationFn).toBeCalled();
        expect(setErrorMock).toBeCalledTimes(1); // 1 to reset only
      });

      test("should execute setError second time if custom validators passed as array and fails", () => {
        const onChangeFn = jest.fn();
        const setErrorMock = jest.fn();

        const mockValidationFn1 = jest.fn().mockReturnValue(true);
        const mockValidationFn2 = jest.fn().mockReturnValue(false);

        const sampleValidatorFn1: FormInputValidator<string> = {
          validationFn: mockValidationFn1,
          errorMessage: "Sample",
        };

        const sampleValidatorFn2: FormInputValidator<string> = {
          validationFn: mockValidationFn2,
          errorMessage: "Sample",
        };

        const { debug } = render(
          <TextInput
            id="test"
            onChange={onChangeFn}
            setError={setErrorMock}
            customValidators={[sampleValidatorFn1, sampleValidatorFn2]}
          />
        );

        // debug();
        const component = screen.queryByTestId("text-input-test-input");
        fireEvent.change(component, { target: { value: "test" } });

        expect(mockValidationFn1).toBeCalled();
        expect(mockValidationFn1).toHaveReturnedWith(true);

        expect(mockValidationFn2).toBeCalled();
        expect(mockValidationFn2).toHaveReturnedWith(false);

        expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
      });

      test("should NOT execute setError second time if custom validators passed as array and succeeds", () => {
        const onChangeFn = jest.fn();
        const setErrorMock = jest.fn();

        const mockValidationFn1 = jest.fn().mockReturnValue(true);
        const mockValidationFn2 = jest.fn().mockReturnValue(true);

        const sampleValidatorFn1: FormInputValidator<string> = {
          validationFn: mockValidationFn1,
          errorMessage: "Sample",
        };

        const sampleValidatorFn2: FormInputValidator<string> = {
          validationFn: mockValidationFn2,
          errorMessage: "Sample",
        };

        const { debug } = render(
          <TextInput
            id="test"
            onChange={onChangeFn}
            setError={setErrorMock}
            customValidators={[sampleValidatorFn1, sampleValidatorFn2]}
          />
        );

        // debug();
        const component = screen.queryByTestId("text-input-test-input");
        fireEvent.change(component, { target: { value: "test" } });

        expect(mockValidationFn1).toBeCalled();
        expect(mockValidationFn1).toHaveReturnedWith(true);

        expect(mockValidationFn2).toBeCalled();
        expect(mockValidationFn2).toHaveReturnedWith(true);

        expect(setErrorMock).toBeCalledTimes(1); // 1 to reset only
      });

      test("should execute setError second time if custom validator passed as object and input value is invalid", () => {
        const onChangeFn = jest.fn();
        const setErrorMock = jest.fn();

        const sampleValidatorFn: FormInputValidator<string> = {
          validationFn: (val) => {
            if (!val) {
              return true;
            }
            if (val !== "test-forbidden-value") {
              return true;
            }
            return false;
          },
          errorMessage: "Sample",
        };

        const { debug } = render(
          <TextInput
            id="test"
            onChange={onChangeFn}
            setError={setErrorMock}
            customValidators={sampleValidatorFn}
          />
        );

        // debug();
        const component = screen.queryByTestId("text-input-test-input");
        fireEvent.change(component, {
          target: { value: "test-forbidden-value" },
        });

        expect(setErrorMock).toBeCalledTimes(2); // 1 to reset, and 1 to set the error
      });
    });
  });
});
