import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IPaddingProps } from "@interfaces/ISpacingsProps";
import "./styles/Modal-Container.layout.scss";
import "./styles/Modal-Container.theme.scss";
export interface IModalContainerProps extends IComponent, IThemeProps, IPaddingProps {
    children: React.ReactNode;
    isOpen: boolean;
    layer?: number;
}
export interface IModalChildrenProps extends Omit<IModalContainerProps, "children"> {
}
export declare const Modal: ({ children, isOpen, layer, rootClassName, rootStyles, theme, ...paddingProps }: IModalContainerProps) => React.JSX.Element;
