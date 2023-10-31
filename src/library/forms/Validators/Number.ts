import { FormInputValidator } from "@interfaces/Form";

/**
 * Number validators
 */
export const numberIsNotNull: FormInputValidator<number> = {
  validationFn: (val?: number) => {
    const number = Number(val);
    if (!isNaN(number) && typeof number === "number") {
      return true;
    }
    return false;
  },
  errorMessage: "Value must be a number",
};

export const numberIsRequired: FormInputValidator<number> = {
  validationFn: (val?: number) => {
    const number = Number(val);
    if (typeof number === "number" && number > 0) {
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
      const number = Number(val);
      if (typeof number === "number" && number >= min) {
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
      const number = Number(val);
      if (typeof number === "number" && number < max) {
        return true;
      }
      return false;
    },
    errorMessage: `Value must be less than ${max}`,
  };
};
