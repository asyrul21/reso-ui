import { FormInputValidator } from "../../../interfaces/Form";
/**
 * Number validators: should work even if number is passed as string
 */
export declare const numberIsRequired: FormInputValidator<number | string>;
export declare const valueIsNumber: FormInputValidator<number | string>;
export declare const numberIsPositiveInteger: FormInputValidator<number | string>;
export declare const numberIsMoreThanOrEqualsTo: (min: number) => FormInputValidator<number | string>;
export declare const numberIsLessThan: (max: number) => FormInputValidator<number | string>;
