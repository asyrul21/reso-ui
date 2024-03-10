import { CustomValidators, FormInputValidator } from "../../interfaces/Form";
import { useMemo } from "react";
import {
  numberIsLessThan,
  numberIsMoreThanOrEqualsTo,
  numberIsRequired,
  stringHasMaxLength,
  stringHasMinLength,
  stringIsEmail,
  stringIsPhoneDefault,
  stringIsRequired,
  stringMatchesRegex,
} from "..";
import { numberHasValue } from "../../utils/validations";
import { composeInputValidators } from "./utils";
import { booleanIsRequired } from "../Validators/Boolean";
import { fileIsRequired, fileMatchesAccept } from "../Validators/File";

interface IInputValidationProps {
  // shared
  required?: boolean;
  // number
  min?: number;
  max?: number;
  // string
  pattern?: string | RegExp;
  minLength?: number;
  maxLength?: number;
  isEmail?: boolean;
  isTel?: boolean;
  // file
  accept?: string;
}

type InputPrimitiveType = "string" | "boolean" | "number" | "file";

export default <T>(
  type: InputPrimitiveType,
  validationProps: IInputValidationProps,
  customValidators?: CustomValidators<T>
) => {
  const defaultValidatorsMemo = useMemo<FormInputValidator<T>[]>(() => {
    const {
      required,
      min,
      max,
      pattern,
      minLength,
      maxLength,
      isEmail,
      isTel,
      accept,
    } = validationProps;

    let defaultValidators: FormInputValidator<T>[] = [];

    if (required) {
      if (type === "string") {
        defaultValidators = [
          ...defaultValidators,
          stringIsRequired as FormInputValidator<T>,
        ];
      } else if (type === "number") {
        defaultValidators = [
          ...defaultValidators,
          numberIsRequired as FormInputValidator<T>,
        ];
      } else if (type === "boolean") {
        defaultValidators = [
          ...defaultValidators,
          booleanIsRequired as FormInputValidator<T>,
        ];
      } else if (type === "file") {
        defaultValidators = [
          ...defaultValidators,
          fileIsRequired as FormInputValidator<T>,
        ];
      }
    }

    if (pattern) {
      defaultValidators = [
        ...defaultValidators,
        stringMatchesRegex(pattern) as FormInputValidator<T>,
      ];
    }

    if (accept) {
      defaultValidators = [
        ...defaultValidators,
        fileMatchesAccept(accept) as FormInputValidator<T>,
      ];
    }

    if (isEmail) {
      defaultValidators = [
        ...defaultValidators,
        stringIsEmail as FormInputValidator<T>,
      ];
    }

    if (isTel) {
      defaultValidators = [
        ...defaultValidators,
        stringIsPhoneDefault as FormInputValidator<T>,
      ];
    }

    if (numberHasValue(minLength)) {
      defaultValidators = [
        ...defaultValidators,
        stringHasMinLength(minLength) as FormInputValidator<T>,
      ];
    }

    if (numberHasValue(maxLength)) {
      defaultValidators = [
        ...defaultValidators,
        stringHasMaxLength(maxLength) as FormInputValidator<T>,
      ];
    }

    if (numberHasValue(min)) {
      defaultValidators = [
        ...defaultValidators,
        numberIsMoreThanOrEqualsTo(min) as FormInputValidator<T>,
      ];
    }
    if (numberHasValue(max)) {
      defaultValidators = [
        ...defaultValidators,
        numberIsLessThan(max) as FormInputValidator<T>,
      ];
    }

    return defaultValidators;
  }, []);

  return composeInputValidators(defaultValidatorsMemo, customValidators);
};
