import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import "./styles/Loading-Container.layout.scss";
export interface ILoadingContainerProps extends IComponent, IThemeProps {
    type: "layer" | "conditional";
    loading?: boolean;
    children: React.ReactNode;
    error?: string;
    minHeight?: string;
    componentLoaderClassName?: string;
    componentLoaderStyles?: React.CSSProperties;
    componentErrorClassName?: string;
    componentErrorStyles?: React.CSSProperties;
}
export declare const LoadingContainer: ({ type, loading, children, error, minHeight, rootClassName, rootStyles, componentLoaderClassName, componentLoaderStyles, componentErrorClassName, componentErrorStyles, theme, }: ILoadingContainerProps) => React.JSX.Element;
