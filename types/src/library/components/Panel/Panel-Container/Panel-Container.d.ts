import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import "./styles/Panel-Container.layout.scss";
import "./styles/Panel-Container.theme.scss";
export interface IPanelContainerProps extends IComponent, IThemeProps {
    children: React.ReactNode;
}
export declare const PanelContainer: ({ children, rootClassName, rootStyles, theme, }: IPanelContainerProps) => React.JSX.Element;
