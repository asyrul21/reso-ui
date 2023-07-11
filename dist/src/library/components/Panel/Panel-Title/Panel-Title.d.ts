import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import "./styles/Panel-Title.layout.scss";
import "./styles/Panel-Title.theme.scss";
export interface IPanelTitleProps extends IComponent, IThemeProps {
    text: string;
}
export declare const PanelTitle: ({ text, rootClassName, rootStyles, theme, }: IPanelTitleProps) => React.JSX.Element;
