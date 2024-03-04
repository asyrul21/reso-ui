import React from "react";
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";
import { IPaddingProps } from "../../interfaces/ISpacingsProps";
import "./styles/Footer.layout.scss";
import "./styles/Footer.theme.scss";
export interface IFooterProps extends IComponent, IThemeProps, IPaddingProps {
    children?: React.ReactNode;
    positionFixed?: boolean;
}
export declare const Footer: ({ children, positionFixed, rootClassName, rootStyles, theme, pv, ph, ...spacingsProps }: IFooterProps) => React.JSX.Element;
