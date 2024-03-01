import { FormEvent, useMemo, useState } from "react";
import {
  DropdownHookReturnObj,
  FormInputHookReturnObj,
} from "../../../interfaces/Form";
import { IDropdownOption } from "../../Controls/Dropdown";
import {
  OptionsConfig,
  defaultOptionsConfig,
  dataArrayToDropdownOptions,
  optionsArrayToMap,
} from "../utils";
import { AnyObject } from "../../../interfaces";

export const useFormInput = <T>(initialValue: T): FormInputHookReturnObj<T> => {
  const [inputValue, setInputValue] = useState<T>(initialValue);
  const [inputError, setInputError] = useState<string | undefined>(undefined);

  return {
    value: inputValue,
    setValue: setInputValue,
    error: inputError,
    setError: setInputError,
  };
};

export const useDropdown = (
  initialSelectedKey: string | undefined,
  options: AnyObject[],
  config?: OptionsConfig
): DropdownHookReturnObj => {
  const optionsConfig = { ...defaultOptionsConfig, ...(config || {}) };

  /**
   * Convert whatever data structure to IDropdownOption type
   */
  const dropdownOptions = useMemo<IDropdownOption[]>(() => {
    return dataArrayToDropdownOptions(options, optionsConfig);
  }, [options]);

  /**
   * Flatten whatever data structure to key: value map, for fast access
   */
  const OptionsMap = useMemo(() => {
    return optionsArrayToMap(dropdownOptions);
  }, [dropdownOptions]);

  const getOptionValue = (key: string) => {
    return OptionsMap[key];
  };

  const [selectedKey, setSelectedKey] =
    useState<string | undefined>(initialSelectedKey);
  const [inputError, setInputError] = useState<string | undefined>(undefined);

  const value = useMemo(() => {
    if (typeof initialSelectedKey === undefined) {
      return undefined;
    }
    return getOptionValue(selectedKey);
  }, [selectedKey]);

  return {
    value,
    selectedKey,
    setSelectedKey,
    options: dropdownOptions,
    error: inputError,
    setError: setInputError,
  };
};
