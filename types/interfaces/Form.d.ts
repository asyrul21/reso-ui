import { Dispatch, SetStateAction } from "react";
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
    value?: string | number | boolean;
    onChange: (value: string | number | boolean) => void;
    error?: string;
    setError?: Dispatch<SetStateAction<string>>;
    useHTMLErrorMessage?: boolean;
    validateOnLoad?: boolean;
    onBlur?: () => void;
    onFocus?: () => void;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    autofocus?: boolean;
    autocomplete?: "on" | "off";
    customValidators?: FormInputValidator<T> | FormInputValidator<T>[];
}
export interface IFormDataContext {
    formData: object;
    setFormData: Dispatch<SetStateAction<unknown>>;
}