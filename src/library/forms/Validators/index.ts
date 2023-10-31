/* istanbul ignore file */

import { FormInputValidator } from "@interfaces/Form";

export * from "./Number";
export * from "./String";

export const validate = <T = string>(
  value: any,
  validators: FormInputValidator<T>[],
  setError?: React.Dispatch<React.SetStateAction<string>>
): boolean => {
  if (typeof setError === "function") {
    setError(null);
  }
  let success = true;
  if (typeof validators === "object") {
    let failedValidator: FormInputValidator<T>;
    for (const validator of validators || []) {
      success = validator.validationFn(value);
      if (!success) {
        failedValidator = validator;
        break;
      }
    }
    if (failedValidator) {
      if (typeof setError === "function") {
        setError(failedValidator.errorMessage as string);
      }
    }
  }
  return success;
};
