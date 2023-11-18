import React from "react";
import IComponent from "@interfaces/IComponent";
import { IPaddingProps } from "@interfaces/ISpacingsProps";
import "./styles/Modal-Body.layout.scss";
export interface IModalBodyProps extends IComponent, IPaddingProps {
    children: React.ReactNode;
}
export declare const ModalBody: ({ children, rootClassName, rootStyles, ...paddingProps }: IModalBodyProps) => React.JSX.Element;
