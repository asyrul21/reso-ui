import { FormInputValidator } from "@interfaces/Form";

/**
 * String validators
 */
export const stringIsRequired: FormInputValidator<string> = {
  validationFn: (val?: string) => {
    if (typeof val === "string" && val !== "") {
      return true;
    }
    return false;
  },
  errorMessage: "This field is required",
};

// https://www.w3resource.com/javascript/form/email-validation.php
export const stringIsEmail: FormInputValidator<string> = {
  validationFn: (val?: string) => {
    /**
     * skip validation if no value entered. This wil be handled by [stringIsRequired]
     */
    if (!val || val === "") {
      return true;
    }
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (typeof val === "string" && emailRegex.test(val)) {
      return true;
    }
    return false;
  },
  errorMessage: "Value must be a valid email format",
};

// https://www.w3resource.com/javascript/form/phone-no-validation.php
export const stringIsPhoneDefault: FormInputValidator<string> = {
  validationFn: (val) => {
    /**
     * skip validation if no value entered. This wil be handled by [stringIsRequired]
     */
    if (!val || val === "") {
      return true;
    }
    const telRegex = /^\(?([0-9]{3,4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (typeof val === "string" && telRegex.test(val)) {
      return true;
    }
    return false;
  },
  errorMessage: "Value must have a valid phone number format",
};

export const stringHasMinLength: (min: number) => FormInputValidator<string> = (
  min
) => {
  return {
    validationFn: (val?: string) => {
      /**
       * skip validation if no value entered. This wil be handled by [stringIsRequired]
       */
      if (!val) {
        return true;
      }
      if (typeof val === "string" && val.length >= min) {
        return true;
      }
      return false;
    },
    errorMessage: `Value must have at least ${min} characters`,
  };
};

export const stringHasMaxLength: (max: number) => FormInputValidator<string> = (
  max
) => {
  return {
    validationFn: (val?: string) => {
      /**
       * skip validation if no value entered. This wil be handled by [stringIsRequired]
       */
      if (!val) {
        return true;
      }
      if (typeof val === "string" && val.length <= max) {
        return true;
      }
      return false;
    },
    errorMessage: `Value must not exceed ${max} characters`,
  };
};

export const stringMatchesRegex: (
  regex: string | RegExp
) => FormInputValidator<string> = (regex) => {
  return {
    validationFn: (val?: string) => {
      /**
       * skip validation if no value entered. This wil be handled by [stringIsRequired]
       */
      if (!val || val === "") {
        return true;
      }
      const rx = new RegExp(regex);
      if (typeof val === "string" && rx.test(val)) {
        return true;
      }
      return false;
    },
    errorMessage: `Value must match the pattern: ${
      typeof regex.toString === "function" ? regex.toString() : regex
    }`,
  };
};
