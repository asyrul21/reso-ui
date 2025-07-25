import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import "./styles/Control-Wrapper.layout.scss";
import "./styles/Control-Wrapper.theme.scss";
export interface IControlWrapperProps extends IComponent, IThemeProps, IMarginProps {
    layout?: "row" | "column";
    children: React.ReactNode;
}
export declare const ControlWrapper: ({ layout, rootClassName, rootStyles, children, theme, mb, ...spacingsProps }: IControlWrapperProps) => React.JSX.Element;
