import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import "./styles/Component-Error.layout.scss";
import "./styles/Component-Error.theme.scss";
export interface IComponentErrorProps extends IComponent, IThemeProps {
    text?: string;
    iconClassName?: string;
    iconStyles?: React.CSSProperties;
    textClassName?: string;
    textStyles?: React.CSSProperties;
}
export declare const ComponentError: ({ text, rootClassName, rootStyles, iconClassName, iconStyles, textClassName, textStyles, theme, }: IComponentErrorProps) => React.JSX.Element;
