import { AnyObject } from "../../../interfaces";
import { CustomValidators, FormInputValidator } from "../../../interfaces/Form";
import { IDropdownOption } from "../../Controls/Dropdown";
export declare const composeInputValidators: <T>(defaultValidators: FormInputValidator<T>[], customValidators?: CustomValidators<T>) => FormInputValidator<T>[];
export type OptionsConfig = {
    keyProp?: string;
    valueProp?: string;
    initObject?: IDropdownOption;
};
export declare const defaultOptionsConfig: OptionsConfig;
export declare const dataArrayToDropdownOptions: (arr: AnyObject[], config?: OptionsConfig) => IDropdownOption[];
export declare const optionsArrayToMap: (arr: IDropdownOption[]) => {
    [key: string]: string;
};
