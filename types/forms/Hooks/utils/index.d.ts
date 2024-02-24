import { CustomValidators, FormInputValidator } from "../../../interfaces/Form";
export declare const composeInputValidators: <T>(defaultValidators: FormInputValidator<T>[], customValidators?: CustomValidators<T>) => FormInputValidator<T>[];
