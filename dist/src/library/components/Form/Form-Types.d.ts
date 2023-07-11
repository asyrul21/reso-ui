import { ChangeEvent, Dispatch, SetStateAction } from "react";
type FormInputValidation = {
    validationFn: (value?: string | number) => boolean;
    errorMessage: string;
};
export interface IFormInputProps {
    id: string;
    onChange?: (event?: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    disabled?: boolean;
    required?: boolean;
    validations?: FormInputValidation[];
}
export interface IFormDataContext {
    formData: object;
    setFormData: Dispatch<SetStateAction<unknown>>;
}
export {};
