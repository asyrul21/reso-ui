import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import { IFormInputProps } from "../../../interfaces/Form";
import "../sharedStyles.scss";
import "./styles/Text-Input.layout.scss";
import "./styles/Text-Input.theme.scss";
export interface ITextInputProps extends IComponent, IFormInputProps<string>, IThemeProps, IMarginProps {
    type?: "text" | "email" | "password" | "tel";
    placeholder?: string;
    pattern?: RegExp | string;
    minLength?: number;
    maxLength?: number;
    size?: number;
}
export declare const TextInput: ({ id, value, onChange, onBlur, onFocus, useHTMLErrorMessage, validateOnLoad, error, setError, disabled, required, readonly, autofocus, type, autocomplete, placeholder, pattern, minLength, maxLength, size, rootClassName, rootStyles, inputClassName, inputStyles, theme, customValidators, ...spacingsProps }: ITextInputProps) => React.JSX.Element;
