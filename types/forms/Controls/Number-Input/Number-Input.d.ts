import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import { IFormInputProps } from "../../../interfaces/Form";
import "../sharedStyles.scss";
import "./styles/Number-Input.layout.scss";
import "./styles/Number-Input.theme.scss";
export interface INumberInputProps extends IComponent, IFormInputProps<number>, IThemeProps, IMarginProps {
    min?: number;
    max?: number;
    step?: number | "any";
}
export declare const NumberInput: ({ id, value, onChange, onBlur, onFocus, useHTMLErrorMessage, validateOnLoad, error, setError, disabled, required, readonly, autofocus, autocomplete, min, max, step, rootClassName, rootStyles, inputClassName, inputStyles, theme, customValidators, ...spacingsProps }: INumberInputProps) => React.JSX.Element;
