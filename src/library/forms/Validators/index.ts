/* istanbul ignore file */

import { FormInputValidator } from "../../interfaces/Form";
import { methodHasValue } from "../../utils/validations";

export * from "./Number";
export * from "./String";

export const validate = <T = string>(
  value: any,
  validators: FormInputValidator<T>[],
  setError?: React.Dispatch<React.SetStateAction<string>>
): boolean => {
  if (methodHasValue(setError)) {
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
      if (methodHasValue(setError)) {
        setError(failedValidator.errorMessage as string);
      }
    }
  }
  return success;
};
