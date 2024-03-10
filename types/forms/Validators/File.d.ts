import { FormInputValidator } from "../../interfaces";
/**
 * File validators
 */
export declare const fileIsRequired: FormInputValidator<File>;
export declare const fileMatchesAccept: (acceptStr: string) => FormInputValidator<File>;
