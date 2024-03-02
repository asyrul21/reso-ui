import { Dispatch, SetStateAction } from "react";
import { IDropdownOption } from "../forms/Controls/Dropdown";
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
export type DropdownHookReturnObj = {
    value: string;
    options: IDropdownOption[];
    selectedKey: string;
    setSelectedKey: Dispatch<SetStateAction<string>>;
    error?: string;
    setError?: Dispatch<SetStateAction<string>>;
};
export type CustomValidators<T> = FormInputValidator<T> | FormInputValidator<T>[];
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
    customValidators?: CustomValidators<T>;
}
export interface IFormDataContext {
    formData: object;
    setFormData: Dispatch<SetStateAction<unknown>>;
}
