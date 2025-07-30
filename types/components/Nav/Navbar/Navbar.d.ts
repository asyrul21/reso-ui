import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IPaddingProps } from "../../../interfaces/ISpacingsProps";
import "./styles/Navbar.layout.scss";
import "./styles/Navbar.theme.scss";
export interface INavbarProps extends IComponent, IThemeProps, IPaddingProps {
    LogoWrapperElement?: "a" | "div";
    logoHref?: string;
    textLogo?: string;
    renderCustomLogo?: () => React.ReactNode;
    onClickLogo?: () => void;
    onClickHamburgerButton?: () => void;
    showHamburgerButtonOnMobileView?: boolean;
    children: React.ReactNode;
    maxWidth?: number;
    position?: "absolute" | "fixed";
    navClassName?: string;
    navStyles?: React.CSSProperties;
}
export declare const Navbar: ({ LogoWrapperElement, logoHref, textLogo, renderCustomLogo, onClickLogo, showHamburgerButtonOnMobileView, onClickHamburgerButton, maxWidth, children, position, navClassName, navStyles, rootClassName, rootStyles, theme, ph, ...spacingsProps }: INavbarProps) => React.JSX.Element;
