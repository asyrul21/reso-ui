import { AnyObject } from "../../../interfaces";
import {
  CustomValidators,
  FormInputValidator,
  ISelectableOption,
} from "../../../interfaces/Form";

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
  initObject?: ISelectableOption;
};

export const defaultOptionsConfig: OptionsConfig = {
  keyProp: "key",
  valueProp: "value",
};

export const dataArrayToSelectableOptions = (
  arr: AnyObject[],
  config?: OptionsConfig
): ISelectableOption[] => {
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
  arr: ISelectableOption[]
): {
  [key: string]: string;
} => {
  const result = {};
  arr.forEach((item: ISelectableOption, idx: number) => {
    result[item.key] = item.value;
  });

  return result;
};
