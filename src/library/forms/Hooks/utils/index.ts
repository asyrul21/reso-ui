import { CustomValidators, FormInputValidator } from "../../../interfaces/Form";

export const composeInputValidators = <T>(
  defaultValidators: FormInputValidator<T>[],
  customValidators?: CustomValidators<T>
): FormInputValidator<T>[] => {
  return typeof customValidators === "object" && Array.isArray(customValidators)
    ? [...defaultValidators, ...(customValidators as FormInputValidator<T>[])]
    : typeof customValidators === "object" // not array
    ? [...defaultValidators, customValidators]
    : defaultValidators;
};
