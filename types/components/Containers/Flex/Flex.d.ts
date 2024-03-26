import React from "react";
import IComponent from "../../../interfaces/IComponent";
import { ISpacingsProps } from "../../../interfaces/ISpacingsProps";
import "./styles/Flex.layout.scss";
export interface IFlexProps extends IComponent, ISpacingsProps, React.HTMLAttributes<HTMLDivElement> {
    direction?: "row" | "column";
    justify?: "space-between" | "start" | "end" | "space-around" | "center";
    align?: "center" | "start" | "end";
    grow?: boolean;
    shrink?: boolean;
    basis?: "auto" | boolean | string;
    wrap?: boolean;
    children: React.ReactNode;
    fullWidth?: boolean;
    widthFitContent?: boolean;
    className?: string;
    borderColor?: string;
}
export declare const Flex: ({ direction, justify, align, grow, shrink, basis, wrap, fullWidth, widthFitContent, children, rootClassName, borderColor, rootStyles, ...props }: IFlexProps) => React.JSX.Element;
