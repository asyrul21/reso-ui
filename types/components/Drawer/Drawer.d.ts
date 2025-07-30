import React, { CSSProperties } from "react";
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";
import { IPaddingProps } from "../../interfaces/ISpacingsProps";
import "./styles/Drawer.layout.scss";
import "./styles/Drawer.theme.scss";
export interface IDrawerProps extends IComponent, IThemeProps, IPaddingProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    side?: "left" | "right";
    title?: string;
    width?: number;
    fullWidth?: boolean;
    layer?: number;
    titleClassName?: string;
    titleStyles?: CSSProperties;
    contentClassName?: string;
    contentStyles?: CSSProperties;
}
export declare const Drawer: ({ children, isOpen, onClose, title, layer, width, side, fullWidth, titleClassName, titleStyles, contentClassName, contentStyles, rootClassName, rootStyles, theme, ...paddingProps }: IDrawerProps) => React.JSX.Element;
