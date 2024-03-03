import React from "react";
import IComponent from "../../../../interfaces/IComponent";
import IThemeProps from "../../../../interfaces/Theme";
import { IMarginProps } from "../../../../interfaces/ISpacingsProps";
import "../../sharedStyles.scss";
import "./styles/Dropdown-Select.layout.scss";
import "./styles/Dropdown-Select.theme.scss";
import { ISelectableOption } from "../../../../interfaces";
export interface IDropdownSelectProps extends IComponent, IThemeProps, IMarginProps {
    id?: string;
    selectedKey?: string;
    value?: string;
    options?: ISelectableOption[];
    onChange?: (key: string) => void;
    error?: string;
    setError?: React.Dispatch<React.SetStateAction<string>>;
    required?: boolean;
    disabled?: boolean;
    asNavItem?: boolean;
    expandOn?: "click" | "hover";
    OptionsContainerElement?: "ul" | "div";
    children?: React.ReactNode;
    optionsMaxHeight?: string;
    headerClassName?: string;
    headerStyles?: React.CSSProperties;
    optionsContainerClassName?: string;
    optionsContainerStyles?: React.CSSProperties;
}
export declare const DropdownSelect: ({ id, selectedKey, value, options, onChange, error, setError, required, disabled, asNavItem, expandOn, OptionsContainerElement, children, optionsMaxHeight, headerClassName, headerStyles, optionsContainerClassName, optionsContainerStyles, rootClassName, rootStyles, theme, ...spacingsProps }: IDropdownSelectProps) => React.JSX.Element;
