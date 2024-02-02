import React from "react";
import { IButtonProps } from "../../../components/Buttons/Button";
import "./styles/Submit-Button.layout.scss";
import "./styles/Submit-Button.theme.scss";
export interface ISubmitButtonProps extends Omit<IButtonProps, "text"> {
    text?: string;
}
export declare const SubmitButton: ({ id, disabled, inheritWidth, inline, text, rootClassName, rootStyles, theme, ...spacingsProps }: ISubmitButtonProps) => React.JSX.Element;
