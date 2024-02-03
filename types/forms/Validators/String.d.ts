import { FormInputValidator } from "../../interfaces/Form";
/**
 * String validators
 */
export declare const stringIsRequired: FormInputValidator<string>;
export declare const stringIsEmail: FormInputValidator<string>;
export declare const stringIsPhoneDefault: FormInputValidator<string>;
export declare const stringHasMinLength: (min: number) => FormInputValidator<string>;
export declare const stringHasMaxLength: (max: number) => FormInputValidator<string>;
export declare const stringMatchesRegex: (regex: string | RegExp) => FormInputValidator<string>;
