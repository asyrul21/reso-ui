import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import { IFormInputProps } from "../../../interfaces/Form";
import "../sharedStyles.scss";
import "./styles/Checkbox.layout.scss";
import "./styles/Checkbox.theme.scss";
export interface ICheckboxInputProps extends IComponent, IFormInputProps<boolean>, IThemeProps, IMarginProps {
    children?: React.ReactNode;
}
export declare const Checkbox: ({ id, children, value, onChange, onBlur, onFocus, useHTMLErrorMessage, validateOnLoad, error, setError, disabled, required, readonly, autofocus, rootClassName, rootStyles, inputClassName, inputStyles, theme, customValidators, ...spacingsProps }: ICheckboxInputProps) => React.JSX.Element;
