import { useEffect, useState } from "react";
import { FormInputHookReturnObj, FormInputValidator } from "@interfaces/Form";
import { numberIsNotNull } from "@forms/Validators";
import { useFormInput } from "../useFormInput";
import { composeInputValidators } from "../utils";

export const useNumberInput = (
  initialValue: number,
  validators?: FormInputValidator<number>[]
): FormInputHookReturnObj<number> => {
  const defaultInputValidators: FormInputValidator<number>[] = [
    numberIsNotNull,
  ];

  const inputValidators: FormInputValidator<number>[] =
    composeInputValidators<number>(defaultInputValidators, validators);

  const { value, setValue, error, forceValidate } = useFormInput<number>(
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
