import React from "react";
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";
import "./styles/Example.layout.scss";
import "./styles/Example.theme.scss";
export interface IExampleComponent extends IComponent, IThemeProps {
    name: string;
    children?: React.ReactNode;
}
export declare const Example: ({ theme, children, name, rootClassName, rootStyles, }: IExampleComponent) => React.JSX.Element;
