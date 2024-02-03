import React from "react";
import IComponent from "../../../interfaces/IComponent";
import { IMarginProps, IPaddingProps } from "../../../interfaces/ISpacingsProps";
import "./styles/Main.layout.scss";
export interface IMainProps extends IComponent, IMarginProps, IPaddingProps {
    children: React.ReactNode;
}
export declare const Main: ({ children, rootClassName, rootStyles, ...spacingsProps }: IMainProps) => React.JSX.Element;
