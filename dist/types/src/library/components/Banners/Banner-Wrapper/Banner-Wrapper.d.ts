import React from "react";
import IComponent from "@interfaces/IComponent";
import "./styles/Banner-Wrapper.layout.scss";
export interface IBannerWrapperProps extends IComponent {
    children: React.ReactNode;
    positionAbsolute?: boolean;
    hasMaxHeight?: boolean;
}
export declare const BannerWrapper: ({ children, positionAbsolute, hasMaxHeight, rootClassName, rootStyles, }: IBannerWrapperProps) => React.JSX.Element;
//# sourceMappingURL=Banner-Wrapper.d.ts.map