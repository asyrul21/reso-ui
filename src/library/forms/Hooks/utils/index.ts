import { FormInputValidator } from "@interfaces/Form";

export const composeInputValidators = <T>(
  defaultValidators: FormInputValidator<T>[],
  validators?: FormInputValidator<T> | FormInputValidator<T>[]
): FormInputValidator<T>[] => {
  const inputValidators: FormInputValidator<T>[] = Array.isArray(validators)
    ? [...defaultValidators, ...validators]
    : typeof validators === "object"
    ? [...defaultValidators, validators]
    : defaultValidators;

  return inputValidators;
};
