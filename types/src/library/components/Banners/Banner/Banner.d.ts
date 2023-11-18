import React from "react";
import IComponent from "@interfaces/IComponent";
import "./styles/Banner.layout.scss";
export interface IBannerProps extends IComponent {
    type: "info" | "warning" | "error" | "success";
    text: string;
}
export declare const Banner: ({ type, text, rootClassName, rootStyles, }: IBannerProps) => React.JSX.Element;
