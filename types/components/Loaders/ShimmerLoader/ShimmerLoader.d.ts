import React from "react";
import { IThemeProps } from "../../../interfaces";
import IComponent from "../../../interfaces/IComponent";
import "./styles/Shimmer-Loader.layout.scss";
export interface IShimmerLoaderProps extends IComponent, IThemeProps {
}
export declare const ShimmerLoader: ({ rootClassName, rootStyles, }: IShimmerLoaderProps) => React.JSX.Element;
