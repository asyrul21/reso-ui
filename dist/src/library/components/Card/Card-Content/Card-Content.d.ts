import React from "react";
import IComponent from "@interfaces/IComponent";
import ISpacingsProps from "@interfaces/ISpacingsProps";
import "./styles/Card-Content.layout.scss";
export interface ICardContentProps extends IComponent, ISpacingsProps {
    children: React.ReactNode;
    wrap?: boolean;
}
export declare const CardContent: ({ children, wrap, rootClassName, rootStyles, ...spacingProps }: ICardContentProps) => React.JSX.Element;
