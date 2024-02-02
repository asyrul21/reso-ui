import React from "react";
import IComponent from "../../../interfaces/IComponent";
import "./styles/Center-Container.layout.scss";
export interface ICenterContainerProps extends IComponent {
    children: React.ReactNode;
}
export declare const CenterContainer: ({ children, rootClassName, rootStyles, }: ICenterContainerProps) => React.JSX.Element;
export default CenterContainer;
