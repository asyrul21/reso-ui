import { Dispatch, FormEvent, SetStateAction } from "react";

export type FormInputValidator<T> = {
  validationFn: (value?: T) => boolean;
  errorMessage: string;
};

export type FormInputHookReturnObj<T> = {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  error?: string;
  setError?: Dispatch<SetStateAction<string>>;
};

export type SelectableHookReturnObj = {
  value: string;
  options: ISelectableOption[];
  selectedKey: string;
  setSelectedKey: Dispatch<SetStateAction<string>>;
  error?: string;
  setError?: Dispatch<SetStateAction<string>>;
};

export interface ISelectableOption {
  key: string;
  value: string;
}

export type CustomValidators<T> =
  | FormInputValidator<T>
  | FormInputValidator<T>[];

export interface IFormInputProps<T> {
  id: string;
  inputClassName?: string;
  inputStyles?: React.CSSProperties;
  // ideally comes from hook
  value?: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
  error?: string;
  setError?: Dispatch<SetStateAction<string>>;
  // ideally comes form hook ends
  useHTMLErrorMessage?: boolean;
  validateOnLoad?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  autofocus?: boolean;
  autocomplete?: "on" | "off";
  customValidators?: CustomValidators<T>;
}

export interface IFormDataContext {
  formData: object;
  setFormData: Dispatch<SetStateAction<unknown>>;
}
