import React from "react";
import { LoaderSize } from "@components/Loaders/Loader";
import IComponent from "../../../interfaces/IComponent";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import ImageClickable from "../../../interfaces/ImageClickable";
import "./styles/Image.layout.scss";
export interface IImageProps extends IComponent, IMarginProps {
    onClick?: () => void;
    clickable?: ImageClickable;
    loaderSize?: LoaderSize;
    src: string;
    imgClassName?: string;
    imgStyles?: React.CSSProperties;
    inheritWidth?: boolean;
    objectFit?: "cover" | "contain" | "fill";
    alt?: string;
    fallbacks?: string[];
}
export declare const Image: ({ onClick, clickable, loaderSize, src, alt, imgClassName, objectFit, rootClassName, rootStyles, fallbacks, imgStyles, inheritWidth, ...spacingsProps }: IImageProps) => React.JSX.Element;
