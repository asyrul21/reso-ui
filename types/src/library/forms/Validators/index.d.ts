import { FormInputValidator } from "../../../interfaces/Form";
export * from "./Number";
export * from "./String";
export declare const validate: <T = string>(value: any, validators: FormInputValidator<T>[], setError?: React.Dispatch<React.SetStateAction<string>>) => boolean;
