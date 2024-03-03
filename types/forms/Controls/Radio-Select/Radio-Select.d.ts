import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import "./styles/Radio-Select.layout.scss";
import "./styles/Radio-Select.theme.scss";
import { ISelectableOption } from "../../../interfaces";
export interface IRadioSelectProps extends IComponent, IThemeProps, IMarginProps {
    id?: string;
    name: string;
    selectedKey?: string;
    value?: string;
    options: ISelectableOption[];
    onChange?: (key: string) => void;
    error?: string;
    setError?: React.Dispatch<React.SetStateAction<string>>;
    required?: boolean;
    disabled?: boolean;
    optionsContainerClassName?: string;
    optionsContianerStyles?: React.CSSProperties;
    labelClassName?: string;
    labelStyles?: React.CSSProperties;
    radioClassName?: string;
    radioStyles?: React.CSSProperties;
}
export declare const RadioSelect: ({ id, name, selectedKey, value, options, onChange, error, setError, required, disabled, optionsContainerClassName, optionsContianerStyles, labelClassName, labelStyles, radioClassName, radioStyles, rootClassName, rootStyles, theme, ...spacingsProps }: IRadioSelectProps) => React.JSX.Element;
