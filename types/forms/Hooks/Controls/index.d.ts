import { SelectableHookReturnObj, FormInputHookReturnObj } from "../../../interfaces/Form";
import { OptionsConfig } from "../utils";
import { AnyObject } from "../../../interfaces";
export declare const useFormInput: <T>(initialValue: T) => FormInputHookReturnObj<T>;
export declare const useSelectableOptions: (initialSelectedKey: string | undefined, options: AnyObject[], config?: OptionsConfig) => SelectableHookReturnObj;
export declare const useDropdown: (initialSelectedKey: string | undefined, options: AnyObject[], config?: OptionsConfig) => SelectableHookReturnObj;
export declare const useRadioSelect: (initialSelectedKey: string | undefined, options: AnyObject[], config?: OptionsConfig) => SelectableHookReturnObj;
