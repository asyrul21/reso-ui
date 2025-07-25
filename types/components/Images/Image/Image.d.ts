import React from "react";
import IComponent from "../../../interfaces/IComponent";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import ImageClickable from "../../../interfaces/ImageClickable";
import "./styles/Image.layout.scss";
export interface IImageProps extends IComponent, IMarginProps {
    onClick?: () => void;
    clickable?: ImageClickable;
    src: string;
    imgClassName?: string;
    imgStyles?: React.CSSProperties;
    inheritWidth?: boolean;
    objectFit?: "cover" | "contain" | "fill";
    alt?: string;
    fallbacks?: string[];
}
export declare const Image: ({ onClick, clickable, src, alt, imgClassName, objectFit, rootClassName, rootStyles, fallbacks, imgStyles, inheritWidth, ...spacingsProps }: IImageProps) => React.JSX.Element;
