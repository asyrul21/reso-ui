import { Context } from "react";
import { IFormDataContext } from "../../interfaces/Form";
declare const _default: {
    registerFormContext: (formName: string, formDataContext: Context<IFormDataContext>) => Context<IFormDataContext>;
    getFormContext: (formName: string) => Context<IFormDataContext> | undefined;
};
export default _default;
