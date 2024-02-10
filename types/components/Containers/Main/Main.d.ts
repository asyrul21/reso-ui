import React from "react";
import IComponent from "../../../interfaces/IComponent";
import { IThemeProps } from "../../../interfaces";
import "./styles/Main.layout.scss";
import "./styles/Main.theme.scss";
export interface IMainProps extends IComponent, IThemeProps {
    children: React.ReactNode;
}
export declare const Main: ({ children, rootClassName, rootStyles, theme, }: IMainProps) => React.JSX.Element;
