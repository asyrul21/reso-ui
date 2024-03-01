import { AnyObject } from "../../../interfaces";
import { CustomValidators, FormInputValidator } from "../../../interfaces/Form";
import { IDropdownOption } from "../../Controls/Dropdown";

export const composeInputValidators = <T>(
  defaultValidators: FormInputValidator<T>[],
  customValidators?: CustomValidators<T>
): FormInputValidator<T>[] => {
  return typeof customValidators === "object" && Array.isArray(customValidators)
    ? [...defaultValidators, ...(customValidators as FormInputValidator<T>[])]
    : typeof customValidators === "object" // not array
    ? [...defaultValidators, customValidators]
    : defaultValidators;
};

export type OptionsConfig = {
  keyProp?: string;
  valueProp?: string;
  initObject?: IDropdownOption;
};

export const defaultOptionsConfig: OptionsConfig = {
  keyProp: "key",
  valueProp: "value",
};

export const dataArrayToDropdownOptions = (
  arr: AnyObject[],
  config?: OptionsConfig
): IDropdownOption[] => {
  const optionConfig = { ...defaultOptionsConfig, ...(config || {}) };
  const { keyProp, valueProp, initObject } = optionConfig;

  const result = [];
  arr.forEach((item: AnyObject) => {
    result.push({
      key: item[keyProp],
      value: item[valueProp],
    });
  });
  if (initObject && Object.keys(initObject).length > 0) {
    return [initObject, ...result];
  }
  return result;
};

export const optionsArrayToMap = (
  arr: IDropdownOption[]
): {
  [key: string]: string;
} => {
  const result = {};
  arr.forEach((item: IDropdownOption, idx: number) => {
    result[item.key] = item.value;
  });

  return result;
};
