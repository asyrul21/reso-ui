import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import "./styles/Component-Loader.layout.scss";
import "./styles/Component-Loader.theme.scss";
export type LoaderSize = "small" | "medium" | "large";
export interface ILoaderProps extends IComponent, IThemeProps {
    type?: "default" | "fullscreen";
    text?: string;
    size?: LoaderSize;
    iconContainerClassName?: string;
    iconContainerStyles?: React.CSSProperties;
}
export declare const Loader: ({ type, text, size, rootClassName, iconContainerClassName, rootStyles, iconContainerStyles, theme, }: ILoaderProps) => React.JSX.Element;
