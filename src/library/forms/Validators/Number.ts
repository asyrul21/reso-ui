import { FormInputValidator } from "@interfaces/Form";

const valueIsEmpty = (val?: string | number): boolean => {
  /* If value is number - 0 is also a number */
  if (val === null || typeof val === undefined) return true;
  /* If value is string */
  if (typeof val === "string" && val === "") return true;
  return false;
};

/**
 * Number validators: should work even if number is passed as string
 */
export const numberIsRequired: FormInputValidator<number | string> = {
  validationFn: (val?: number | string) => {
    if (valueIsEmpty(val)) return false;
    return true;
  },
  errorMessage: "This field is required",
};

export const valueIsNumber: FormInputValidator<number | string> = {
  validationFn: (val?: number | string) => {
    if (valueIsEmpty(val)) return true; // skip if null or empty
    /* redundant cast */
    const num = Number(val);
    if (!isNaN(num) && typeof num === "number") {
      return true;
    }
    return false;
  },
  errorMessage: "Value must be a number",
};

export const numberIsPositiveInteger: FormInputValidator<number | string> = {
  validationFn: (val?: number | string) => {
    if (valueIsEmpty(val)) return true; // skip if null or empty
    /* redundant cast */
    const num = Number(val);
    if (
      !isNaN(num) &&
      typeof num === "number" &&
      num > -1 &&
      Number.isInteger(num)
    ) {
      return true;
    }
    return false;
  },
  errorMessage: "Value must be a positive integer",
};

export const numberIsMoreThanOrEqualsTo: (
  min: number
) => FormInputValidator<number | string> = (min: number) => {
  return {
    validationFn: (val?: number | string) => {
      if (valueIsEmpty(val)) return true; // skip if null or empty
      /* redundant cast */
      const num = Number(val);
      if (!isNaN(num) && typeof num === "number" && num >= min) {
        return true;
      }
      return false;
    },
    errorMessage: `Value must be more than or equals to ${min}`,
  };
};

export const numberIsLessThan: (
  max: number
) => FormInputValidator<number | string> = (max: number) => {
  return {
    validationFn: (val?: number | string) => {
      if (valueIsEmpty(val)) return true; // skip if null or empty
      /* redundant cast */
      const num = Number(val);
      if (!isNaN(num) && typeof num === "number" && num < max) {
        return true;
      }
      return false;
    },
    errorMessage: `Value must be less than ${max}`,
  };
};
