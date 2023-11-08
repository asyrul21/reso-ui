import { FormInputValidator } from "@interfaces/Form";

/**
 * String validators
 */
export const booleanIsRequired: FormInputValidator<boolean> = {
  validationFn: (val?: boolean) => {
    if (val === true) {
      return true;
    }
    return false;
  },
  errorMessage: "You much select this checkbox",
};
