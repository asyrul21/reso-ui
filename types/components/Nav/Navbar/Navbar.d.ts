import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IPaddingProps } from "../../../interfaces/ISpacingsProps";
import "./styles/Navbar.layout.scss";
import "./styles/Navbar.theme.scss";
export interface INavbarProps extends IComponent, IThemeProps, IPaddingProps {
    textLogo?: string;
    renderCustomLogo?: (props: {
        onClickLogo: () => void;
    }) => React.ReactNode;
    onClickLogo?: () => void;
    children: React.ReactNode;
    maxWidth?: number;
    position?: "absolute" | "fixed";
    navClassName?: string;
    navStyles?: React.CSSProperties;
}
export declare const Navbar: ({ textLogo, renderCustomLogo, onClickLogo, maxWidth, children, position, navClassName, navStyles, rootClassName, rootStyles, theme, ...spacingsProps }: INavbarProps) => React.JSX.Element;
