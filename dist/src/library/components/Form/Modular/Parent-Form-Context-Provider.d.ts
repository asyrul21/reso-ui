import React, { Context } from "react";
import { IFormDataContext } from "../Form-Types";
export interface IParentFormContextProviderProps {
    children: React.ReactNode;
    parentFormContext: Context<IFormDataContext>;
}
export declare const ParentFormContextProvider: <T extends unknown>({ children, parentFormContext, }: IParentFormContextProviderProps) => React.JSX.Element;
export default ParentFormContextProvider;
