import React from "react";
import { IFormDataContext } from "../Form-Types";

export const createParentFormDataContext =
  (): React.Context<IFormDataContext> => {
    return React.createContext<IFormDataContext>({
      formData: {},
      setFormData: () => {},
    });
  };
