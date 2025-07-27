import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import "./styles/Sub-Form-Container.layout.scss";
import "./styles/Sub-Form-Container.theme.scss";
export interface ISubFormContainerProps extends IComponent, IThemeProps, IMarginProps {
    title: string;
    headerClassName?: string;
    headerStyles?: React.CSSProperties;
    contentClassName?: string;
    contentStyles?: React.CSSProperties;
    children: React.ReactNode;
}
export declare const SubFormContainer: ({ title, rootClassName, rootStyles, contentClassName, contentStyles, headerClassName, headerStyles, children, theme, ...spacingsProps }: ISubFormContainerProps) => React.JSX.Element;
