import { FormInputValidator } from "@interfaces/Form";

/**
 * Number validators
 */
export const numberIsNotNull: FormInputValidator<number> = {
  validationFn: (val?: number) => {
    const num = Number(val);
    if (!isNaN(num) && typeof num === "number") {
      return true;
    }
    return false;
  },
  errorMessage: "Value must be a number",
};

export const numberIsRequired: FormInputValidator<number> = {
  validationFn: (val?: number) => {
    const num = Number(val);
    if (typeof num === "number" && num > 0) {
      return true;
    }
    return false;
  },
  errorMessage: "This field is required",
};

export const numberIsMoreThanOrEqualsTo: (
  min: number
) => FormInputValidator<number> = (min: number) => {
  return {
    validationFn: (val?: number) => {
      const num = Number(val);
      if (typeof num === "number" && num >= min) {
        return true;
      }
      return false;
    },
    errorMessage: `Value must be more than or equals to ${min}`,
  };
};

export const numberIsLessThan: (max: number) => FormInputValidator<number> = (
  max: number
) => {
  return {
    validationFn: (val?: number) => {
      const num = Number(val);
      if (typeof num === "number" && num < max) {
        return true;
      }
      return false;
    },
    errorMessage: `Value must be less than ${max}`,
  };
};
