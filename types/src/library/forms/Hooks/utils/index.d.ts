import { FormInputValidator } from "@interfaces/Form";
export declare const composeInputValidators: <T>(defaultValidators: FormInputValidator<T>[], customValidators?: FormInputValidator<T> | FormInputValidator<T>[]) => FormInputValidator<T>[];
