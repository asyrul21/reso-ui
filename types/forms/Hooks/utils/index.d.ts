import { AnyObject } from "../../../interfaces";
import { CustomValidators, FormInputValidator, ISelectableOption } from "../../../interfaces/Form";
export declare const composeInputValidators: <T>(defaultValidators: FormInputValidator<T>[], customValidators?: CustomValidators<T>) => FormInputValidator<T>[];
export type OptionsConfig = {
    keyProp?: string;
    valueProp?: string;
    initObject?: ISelectableOption;
};
export declare const defaultOptionsConfig: OptionsConfig;
export declare const dataArrayToSelectableOptions: (arr: AnyObject[], config?: OptionsConfig) => ISelectableOption[];
export declare const optionsArrayToMap: (arr: ISelectableOption[]) => {
    [key: string]: string;
};
