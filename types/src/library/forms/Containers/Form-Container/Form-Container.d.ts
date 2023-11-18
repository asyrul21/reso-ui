import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import ISpacingsProps from "@interfaces/ISpacingsProps";
import "./styles/Form-Container.layout.scss";
import "./styles/Form-Container.theme.scss";
export interface IFormContainerProps extends IComponent, IThemeProps, ISpacingsProps {
    children: React.ReactNode;
    onSubmit: () => void;
    onInvalid?: () => void;
    noValidate?: boolean;
}
export declare const FormContainer: ({ rootClassName, rootStyles, onSubmit, onInvalid, noValidate, children, theme, ...spacingsProps }: IFormContainerProps) => React.JSX.Element;
