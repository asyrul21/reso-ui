import { FormInputValidator } from "../../interfaces/Form";
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
}

type InputPrimitiveType = "string" | "boolean" | "number";

export default <T>(
  type: InputPrimitiveType,
  validationProps: IInputValidationProps,
  customValidators?: FormInputValidator<T> | FormInputValidator<T>[]
) => {
  const inputValidatorsMemo = useMemo<FormInputValidator<T>[]>(() => {
    const {
      required,
      min,
      max,
      pattern,
      minLength,
      maxLength,
      isEmail,
      isTel,
    } = validationProps;

    let finalValidators: FormInputValidator<T>[] = [];

    if (required) {
      if (type === "string") {
        finalValidators = [
          ...finalValidators,
          stringIsRequired as FormInputValidator<T>,
        ];
      } else if (type === "number") {
        finalValidators = [
          ...finalValidators,
          numberIsRequired as FormInputValidator<T>,
        ];
      } else if (type === "boolean") {
        finalValidators = [
          ...finalValidators,
          booleanIsRequired as FormInputValidator<T>,
        ];
      }
    }

    if (pattern) {
      finalValidators = [
        ...finalValidators,
        stringMatchesRegex(pattern) as FormInputValidator<T>,
      ];
    }

    if (isEmail) {
      finalValidators = [
        ...finalValidators,
        stringIsEmail as FormInputValidator<T>,
      ];
    }

    if (isTel) {
      finalValidators = [
        ...finalValidators,
        stringIsPhoneDefault as FormInputValidator<T>,
      ];
    }

    if (numberHasValue(minLength)) {
      finalValidators = [
        ...finalValidators,
        stringHasMinLength(minLength) as FormInputValidator<T>,
      ];
    }

    if (numberHasValue(maxLength)) {
      finalValidators = [
        ...finalValidators,
        stringHasMaxLength(maxLength) as FormInputValidator<T>,
      ];
    }

    if (numberHasValue(min)) {
      finalValidators = [
        ...finalValidators,
        numberIsMoreThanOrEqualsTo(min) as FormInputValidator<T>,
      ];
    }
    if (numberHasValue(max)) {
      finalValidators = [
        ...finalValidators,
        numberIsLessThan(max) as FormInputValidator<T>,
      ];
    }

    return composeInputValidators(finalValidators, customValidators);
  }, []);

  return inputValidatorsMemo;
};
