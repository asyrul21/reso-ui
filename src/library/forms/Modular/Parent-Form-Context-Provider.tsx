import React, { Context, useState } from "react";
import { IFormDataContext } from "@interfaces/Form";

export interface IParentFormContextProviderProps {
  children: React.ReactNode;
  parentFormContext: Context<IFormDataContext>;
}

export const ParentFormContextProvider = <T extends unknown>({
  children,
  parentFormContext,
}: IParentFormContextProviderProps) => {
  const [formData, setFormData] = useState({});

  return (
    <parentFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </parentFormContext.Provider>
  );
};

export default ParentFormContextProvider;
