import { FormInputValidator } from "@interfaces/Form";
interface IInputValidationProps {
    required?: boolean;
    min?: number;
    max?: number;
    pattern?: string | RegExp;
    minLength?: number;
    maxLength?: number;
    isEmail?: boolean;
    isTel?: boolean;
}
type InputPrimitiveType = "string" | "boolean" | "number";
declare const _default: <T>(type: InputPrimitiveType, validationProps: IInputValidationProps, customValidators?: FormInputValidator<T> | FormInputValidator<T>[]) => FormInputValidator<T>[];
export default _default;
