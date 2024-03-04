import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import { IFormInputProps } from "../../../interfaces/Form";
import "../sharedStyles.scss";
import "./styles/Text-Area.layout.scss";
import "./styles/Text-Area.theme.scss";
export interface ITextAreaProps extends IComponent, IFormInputProps<string>, IThemeProps, IMarginProps {
    wrap?: "soft" | "hard";
    placeholder?: string;
    cols?: number;
    rows?: number;
    formId: string;
    minLength?: number;
    maxLength?: number;
    name?: string;
}
export declare const TextArea: ({ id, value, onChange, onBlur, onFocus, useHTMLErrorMessage, noShadowOnFocus, validateOnLoad, error, setError, disabled, required, readonly, autofocus, wrap, placeholder, cols, rows, formId, minLength, maxLength, name, rootClassName, rootStyles, inputClassName, inputStyles, theme, customValidators, ...spacingsProps }: ITextAreaProps) => React.JSX.Element;
