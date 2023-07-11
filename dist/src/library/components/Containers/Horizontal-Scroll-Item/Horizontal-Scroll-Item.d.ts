import React from "react";
import IComponent from "@interfaces/IComponent";
import { IPaddingProps, IMarginProps } from "@interfaces/ISpacingsProps";
import "./styles/Horizontal-Scroll-Item.layout.scss";
export interface IHSIProps extends IComponent, IPaddingProps, IMarginProps {
    children: React.ReactNode;
}
export declare const HorizontalScrollItem: ({ children, rootClassName, rootStyles, ...spacingsProps }: IHSIProps) => React.JSX.Element;
//# sourceMappingURL=Horizontal-Scroll-Item.d.ts.map