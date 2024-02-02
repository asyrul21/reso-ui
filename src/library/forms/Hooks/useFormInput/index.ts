import { FormEvent, useState } from "react";
import { FormInputHookReturnObj, FormInputValidator } from "../../../interfaces/Form";

export const useFormInput = <T>(initialValue: T): FormInputHookReturnObj<T> => {
  const [inputValue, setInputValue] = useState<T>(initialValue);
  const [inputError, setInputError] = useState<string>(null);

  return {
    value: inputValue,
    setValue: setInputValue,
    error: inputError,
    setError: setInputError,
  };
};
