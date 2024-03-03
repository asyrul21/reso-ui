import React from "react";
import IComponent from "../../../../interfaces/IComponent";
import IThemeProps from "../../../../interfaces/Theme";
import "./styles/Dropdown-Option.layout.scss";
import "./styles/Dropdown-Option.theme.scss";
export interface IDropdownOptionProps extends IComponent, IThemeProps {
    Element?: "li" | "a";
    testKey?: string;
    option?: string;
    active?: boolean;
    enableActiveStyles?: boolean;
    href?: string;
    target?: string;
    onClick?: () => void;
    renderCustomOption?: (props: {
        theme: IThemeProps;
        active?: boolean;
        option?: string;
    }) => JSX.Element;
}
export declare const DropdownOption: ({ Element, option, active, enableActiveStyles, renderCustomOption, href, target, onClick, rootClassName, rootStyles, theme, }: IDropdownOptionProps) => React.JSX.Element;
