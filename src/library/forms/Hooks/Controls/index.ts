import { FormEvent, useMemo, useState } from "react";
import {
  SelectableHookReturnObj,
  FormInputHookReturnObj,
  ISelectableOption,
} from "../../../interfaces/Form";

import {
  OptionsConfig,
  defaultOptionsConfig,
  dataArrayToSelectableOptions,
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

export const useSelectableOptions = (
  initialSelectedKey: string | undefined,
  options: AnyObject[],
  config?: OptionsConfig
): SelectableHookReturnObj => {
  const optionsConfig = { ...defaultOptionsConfig, ...(config || {}) };

  /**
   * Convert whatever data structure to ISelectableOption type
   */
  const selectableOptions = useMemo<ISelectableOption[]>(() => {
    return dataArrayToSelectableOptions(options, optionsConfig);
  }, [options]);

  /**
   * Flatten whatever data structure to key: value map, for fast access
   */
  const OptionsMap = useMemo(() => {
    return optionsArrayToMap(selectableOptions);
  }, [selectableOptions]);

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
    options: selectableOptions,
    error: inputError,
    setError: setInputError,
  };
};

export const useDropdown = (
  initialSelectedKey: string | undefined,
  options: AnyObject[],
  config?: OptionsConfig
): SelectableHookReturnObj => {
  return useSelectableOptions(initialSelectedKey, options, config);
};

export const useRadioSelect = (
  initialSelectedKey: string | undefined,
  options: AnyObject[],
  config?: OptionsConfig
): SelectableHookReturnObj => {
  return useSelectableOptions(initialSelectedKey, options, config);
};
