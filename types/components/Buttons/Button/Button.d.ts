import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import "./styles/Button.layout.scss";
import "./styles/Button.theme.scss";
export interface IButtonProps extends IComponent, IThemeProps, IMarginProps {
    type?: "plain" | "primary" | "link";
    role?: "button" | "submit";
    id?: string;
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    inheritWidth?: boolean;
    inline?: boolean;
}
export declare const Button: ({ id, type, role, text, onClick, disabled, inheritWidth, inline, rootClassName, rootStyles, theme, ...spacingsProps }: IButtonProps) => React.JSX.Element;
