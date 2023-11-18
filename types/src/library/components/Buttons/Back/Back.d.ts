import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import "./styles/Back.layout.scss";
import "./styles/Back.theme.scss";
export interface IBackProps extends IComponent, IThemeProps, IMarginProps {
    to: string;
    text?: string;
    disabled?: boolean;
    linkClassName?: string;
    linkStyles?: React.CSSProperties;
}
export declare const Back: ({ to, text, disabled, rootClassName, rootStyles, linkClassName, linkStyles, theme, ...spacingsProps }: IBackProps) => React.JSX.Element;
