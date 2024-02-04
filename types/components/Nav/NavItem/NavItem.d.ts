import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import "./styles/NavItem.layout.scss";
import "./styles/NavItem.theme.scss";
export interface INavItemProps extends IComponent, IThemeProps, IMarginProps {
    children: React.ReactNode;
    Implementation?: "a" | "button";
    onClick?: () => void;
    active?: boolean;
    enableActiveStyles?: boolean;
    href?: string;
    elementClassName?: string;
    elementStyles?: React.CSSProperties;
    renderCustomNavItem?: (props: {
        theme: IThemeProps;
        children: React.ReactNode;
        active: boolean;
    }) => React.ReactNode;
}
export declare const NavItem: ({ Implementation, children, onClick, active, enableActiveStyles, href, renderCustomNavItem, elementClassName, elementStyles, rootClassName, rootStyles, theme, ...spacingsProps }: INavItemProps) => React.JSX.Element;
