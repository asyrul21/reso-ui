import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

export type FormInputValidator<T> = {
  validationFn: (value?: T) => boolean;
  errorMessage: string;
};

export type FormInputHookReturnObj<T> = {
  value: any;
  setValue: Dispatch<SetStateAction<T>>;
  error?: string | null;
  setError?: Dispatch<SetStateAction<string>>;
};

export interface IFormInputProps<T> {
  id: string;
  inputClassName?: string;
  inputStyles?: React.CSSProperties;
  // ideally comes from hook
  value?: string | number;
  onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  setError?: Dispatch<SetStateAction<string>>;
  // ideall comes form hook ends
  showHTMLErrorMessage?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  autofocus?: boolean;
  autocomplete?: "on" | "off";
  validators?: FormInputValidator<T> | FormInputValidator<T>[];
}

export interface IFormDataContext {
  formData: object;
  setFormData: Dispatch<SetStateAction<unknown>>;
}
