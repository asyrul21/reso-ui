import { Context } from "react";
import { IFormDataContext } from "@interfaces/Form";

type FormDataContextRepository = {
  [key: string]: Context<IFormDataContext>;
};

export default (() => {
  const _repo: FormDataContextRepository = {};

  return {
    registerFormContext: (
      formName: string,
      formDataContext: Context<IFormDataContext>
    ): Context<IFormDataContext> => {
      _repo[formName] = formDataContext;

      return formDataContext;
    },
    getFormContext: (
      formName: string
    ): Context<IFormDataContext> | undefined => {
      return _repo[formName];
    },
  };
})();
