import React from "react";
import IComponent from "@interfaces/IComponent";
import { IImageObject } from "@interfaces/IImageObject";
import ImageClickable from "@interfaces/ImageClickable";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import "./styles/Multi-Image-Viewer.layout.scss";
import "./styles/Multi-Image-Viewer.theme.scss";
import IThemeProps from "@interfaces/Theme";
export interface IMultiImageViewerProps extends IComponent, IMarginProps, IThemeProps {
    imageObjects: IImageObject[];
    defaultImagePath?: string;
    clickable?: ImageClickable;
    getMiniImagePath?: (imageObj: IImageObject) => string;
    onClickImage?: () => void;
    indexOverride?: number;
    setIndexOverride?: (idx: number) => void;
    initialSelectedIndex?: 0;
    mainImageClassName?: string;
    mainImageStyles?: React.CSSProperties;
    miniImageClassname?: string;
    miniImageStyles?: React.CSSProperties;
    miniImageSelectedClassName?: string;
    miniImageSelectedStyles?: React.CSSProperties;
}
export declare const MultiImageViewer: ({ imageObjects, defaultImagePath, clickable, rootClassName, rootStyles, getMiniImagePath, onClickImage, indexOverride, setIndexOverride, initialSelectedIndex, mainImageClassName, mainImageStyles, miniImageClassname, miniImageStyles, miniImageSelectedClassName, miniImageSelectedStyles, theme, ...marginProps }: IMultiImageViewerProps) => React.JSX.Element;
