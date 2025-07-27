import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import { IFormInputProps } from "../../../interfaces/Form";
import "../sharedStyles.scss";
import "./styles/File-Input.layout.scss";
import "./styles/File-Input.theme.scss";
export declare const ACCEPT_STRING_REGEX: RegExp;
export interface IFileInputProps extends IComponent, Omit<IFormInputProps<File>, "type" | "autocomplete" | "inputClassName" | "inputStyles" | "validateOnLoad" | "autofocus" | "useHTMLErrorMessage">, IThemeProps, IMarginProps {
    selectedFile?: File;
    accept?: string;
    multiple?: boolean;
    hideTextInputField?: boolean;
    onReset?: () => void;
    filterExtensionsInUsersFileExplorer?: boolean;
    labelText?: string;
    placeholder?: string;
    textInputClassName?: string;
    textInputStyles?: React.CSSProperties;
    fileInputClassName?: string;
    fileInputStyles?: React.CSSProperties;
    resetButtonClassName?: string;
    resetButtonStyles?: React.CSSProperties;
    _resoui_fileinput_input_styles?: React.CSSProperties;
}
export declare const FileInput: ({ id, onBlur, onFocus, noShadowOnFocus, error, setError, disabled, required, readonly, value, onChange, accept, hideTextInputField, multiple, onReset, filterExtensionsInUsersFileExplorer, labelText, placeholder, selectedFile, rootClassName, rootStyles, textInputClassName, textInputStyles, fileInputClassName, fileInputStyles, resetButtonClassName, resetButtonStyles, _resoui_fileinput_input_styles, theme, customValidators, ...spacingsProps }: IFileInputProps) => React.JSX.Element;
