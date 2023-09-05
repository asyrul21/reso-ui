import { FormInputHookReturnObj, FormInputValidator } from "@interfaces/Form";
import { stringIsNotNull } from "@forms/Validators";
import { useFormInput } from "../useFormInput";
import { composeInputValidators } from "../utils";

export const useTextInput = (
  initialValue: string,
  validators?: FormInputValidator<string> | FormInputValidator<string>[]
): FormInputHookReturnObj<string> => {
  const defaultInputValidators: FormInputValidator<string>[] = [
    stringIsNotNull,
  ];

  const inputValidators: FormInputValidator<string>[] =
    composeInputValidators<string>(defaultInputValidators, validators);

  const { value, setValue, error, forceValidate } = useFormInput<string>(
    initialValue,
    inputValidators
  );

  return {
    value,
    setValue,
    error,
    forceValidate,
  };
};
