import { SelectableHookReturnObj, FormInputHookReturnObj } from "../../../interfaces/Form";
import { OptionsConfig } from "../utils";
import { AnyObject } from "../../../interfaces";
export declare const useFormInput: <T>(initialValue: T) => FormInputHookReturnObj<T>;
interface IUseFileInputConfig {
    defaultPath?: string;
    pathHandle?: string;
}
export declare const useFileInputDefaultConfig: IUseFileInputConfig;
export declare const useFileInput: (initialPath?: string, config?: IUseFileInputConfig) => {
    selectedFile: File;
    setSelectedFile: (f?: File) => void;
    selectedFilePath: string;
    setSelectedFilePath: import("react").Dispatch<import("react").SetStateAction<string>>;
    reset: () => void;
    error: string;
    setError: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export declare const useSelectableOptions: (initialSelectedKey: string | undefined, options: AnyObject[], config?: OptionsConfig) => SelectableHookReturnObj;
export declare const useDropdown: (initialSelectedKey: string | undefined, options: AnyObject[], config?: OptionsConfig) => SelectableHookReturnObj;
export declare const useRadioSelect: (initialSelectedKey: string | undefined, options: AnyObject[], config?: OptionsConfig) => SelectableHookReturnObj;
export {};
