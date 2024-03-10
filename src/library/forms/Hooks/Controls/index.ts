import { FormEvent, useEffect, useMemo, useState } from "react";
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
import { stringHasValue, valueIsAFile } from "../../../utils/validations";

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

interface IUseFileInputConfig {
  defaultPath?: string;
  pathHandle?: string;
}

export const useFileInputDefaultConfig: IUseFileInputConfig = {
  defaultPath: undefined,
  pathHandle: undefined,
};

export const useFileInput = (
  initialPath?: string,
  config?: IUseFileInputConfig
) => {
  const hookConfig = { ...useFileInputDefaultConfig, ...(config || {}) };
  const { defaultPath, pathHandle } = hookConfig;

  const [file, setFile] = useState<File>(undefined);
  const [filePath, setFilePath] = useState<string>(initialPath);
  const [inputError, setInputError] = useState<string>(undefined);

  const clearObjectURL = () => {
    if (stringHasValue(filePath)) {
      URL.revokeObjectURL(filePath);
    }
  };

  const setSelectedFile = (f?: File) => {
    clearObjectURL();
    setFile(f);
    if (valueIsAFile(f)) {
      setFilePath(URL.createObjectURL(f));
    }
  };

  const reset = () => {
    setSelectedFile(undefined);

    // reset file path
    if (stringHasValue(initialPath) && stringHasValue(pathHandle)) {
      setFilePath(`${pathHandle}${initialPath}`);
    } else if (stringHasValue(initialPath) && !stringHasValue(pathHandle)) {
      setFilePath(initialPath);
    } else if (stringHasValue(defaultPath)) {
      setFilePath(defaultPath);
    } else {
      // neither initial path nor default path is provided
      setFilePath(undefined);
    }

    setInputError(undefined);
  };

  return {
    selectedFile: file,
    setSelectedFile,
    selectedFilePath: filePath,
    setSelectedFilePath: setFilePath,
    reset,
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
