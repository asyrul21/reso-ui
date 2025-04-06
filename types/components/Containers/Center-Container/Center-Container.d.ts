import React from "react";
import IComponent from "../../../interfaces/IComponent";
import "./styles/Center-Container.layout.scss";
import { IPaddingProps } from "../../../interfaces";
export interface ICenterContainerProps extends IComponent, IPaddingProps {
    children: React.ReactNode;
    maxWidth?: number;
    inheritMinWidth?: boolean;
}
export declare const CenterContainer: ({ children, maxWidth, inheritMinWidth, rootClassName, rootStyles, ...props }: ICenterContainerProps) => React.JSX.Element;
export default CenterContainer;
