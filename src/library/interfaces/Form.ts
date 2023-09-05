import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

export type FormInputValidator<T> = {
  validationFn: (value?: T) => boolean;
  errorMessage: string;
};

export type FormInputHookReturnObj<T> = {
  value: any;
  setValue: (val: T) => void;
  error: string | null;
  forceValidate: (event?: FormEvent<HTMLInputElement>) => void;
};

export interface IFormInputProps {
  id: string;
  inputClassName?: string;
  inputStyles?: React.CSSProperties;
  onInvalid?: (event?: FormEvent<HTMLInputElement>) => void;
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  value?: string | number;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  autofocus?: boolean;
  autocomplete?: "on" | "off";
  error?: string;
  // validations?: FormInputValidation[];
}

export interface IFormDataContext {
  formData: object;
  setFormData: Dispatch<SetStateAction<unknown>>;
}
