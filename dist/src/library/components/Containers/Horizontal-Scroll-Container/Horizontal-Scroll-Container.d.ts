import React from "react";
import IComponent from "@interfaces/IComponent";
import { IPaddingProps, IMarginProps } from "@interfaces/ISpacingsProps";
import "./styles/Horizontal-Scroll-Container.layout.scss";
export interface IHSCProps extends IComponent, IPaddingProps, IMarginProps {
    children: React.ReactNode;
    inheritWidth?: boolean;
}
export declare const HorizontalScrollContainer: ({ children, inheritWidth, rootClassName, rootStyles, ...spacingsProps }: IHSCProps) => React.JSX.Element;
