import { CustomValidators, FormInputValidator } from "../../interfaces/Form";
interface IInputValidationProps {
    required?: boolean;
    min?: number;
    max?: number;
    pattern?: string | RegExp;
    minLength?: number;
    maxLength?: number;
    isEmail?: boolean;
    isTel?: boolean;
    accept?: string;
}
type InputPrimitiveType = "string" | "boolean" | "number" | "file";
declare const _default: <T>(type: InputPrimitiveType, validationProps: IInputValidationProps, customValidators?: CustomValidators<T>) => FormInputValidator<T>[];
export default _default;
