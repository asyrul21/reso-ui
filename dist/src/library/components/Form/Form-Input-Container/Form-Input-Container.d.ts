import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import "./styles/Form-Input-Container.layout.scss";
import "./styles/Form-Input-Container.theme.scss";
export interface IFormInputContainerProps extends IComponent, IThemeProps, IMarginProps {
    children: React.ReactNode;
}
export declare const FormInputContainer: ({ rootClassName, rootStyles, children, theme, mb, ...spacingsProps }: IFormInputContainerProps) => React.JSX.Element;
