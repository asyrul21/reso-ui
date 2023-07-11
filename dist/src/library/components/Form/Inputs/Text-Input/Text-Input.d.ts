import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import { IFormInputProps } from "@components/Form/Form-Types";
import "../sharedStyles.scss";
import "./styles/Text-Input.layout.scss";
import "./styles/Text-Input.theme.scss";
export interface ITextInputProps extends IComponent, IFormInputProps, IThemeProps, IMarginProps {
    placeholder?: string;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    readonly?: boolean;
}
export declare const TextInput: ({ id, value, onChange, disabled, required, readonly, placeholder, pattern, minLength, maxLength, rootClassName, rootStyles, theme, ...spacingsProps }: ITextInputProps) => React.JSX.Element;
