import { FormEvent, useState } from "react";
import { FormInputHookReturnObj, FormInputValidator } from "@interfaces/Form";

export const useFormInput = <T>(
  initialValue: T,
  validators?: FormInputValidator<T> | FormInputValidator<T>[]
): FormInputHookReturnObj<T> => {
  const [inputValue, setInputValue] = useState<T>(initialValue);
  const [inputError, setInputError] = useState<string>(null);

  const setValue = (val?: T) => {
    setInputError(null);

    if (typeof validators === "object") {
      let success: boolean;
      let failedValidator: FormInputValidator<T>;
      if (Array.isArray(validators)) {
        for (const validator of validators || []) {
          success = validator.validationFn(val);
          if (!success) {
            failedValidator = validator;
            break;
          }
        }
      } else {
        success = validators.validationFn(val);
        if (!success) {
          failedValidator = validators;
        }
      }

      if (failedValidator) {
        setInputError(failedValidator.errorMessage);
      }
    }

    setInputValue(val);
  };

  const forceValidate = (
    event?: FormEvent<HTMLInputElement>,
    preventDefaultValidation = true
  ) => {
    console.log("force validate!");

    if (typeof event === "object" && preventDefaultValidation) {
      event.preventDefault();
    }
    setValue(inputValue);
  };
  return {
    value: inputValue,
    setValue,
    error: inputError,
    forceValidate,
  };
};
