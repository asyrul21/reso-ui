import React, { useEffect, useState } from "react";

import { Image } from "@components/Image";

// import base interface
import IComponent from "@interfaces/IComponent";
import { IImageObject } from "@interfaces/IImageObject";
import ImageClickable from "@interfaces/ImageClickable";
import { IMarginProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/Multi-Image-Viewer.layout.scss";
import "./styles/Multi-Image-Viewer.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";
import {
  methodHasValue,
  numberHasValue,
  objectHasValue,
} from "@utils/validations";
import IThemeProps from "@interfaces/Theme";

export interface IMultiImageViewerProps
  extends IComponent,
    IMarginProps,
    IThemeProps {
  imageObjects: IImageObject[];
  defaultImagePath: string;
  clickable?: ImageClickable;
  getMiniImagePath?: (imageObj: IImageObject) => string;
  onClickImage?: () => void;
  indexOverride?: number;
  // setIndexOverride controls images being shown from external components via indexOverride
  setIndexOverride?: (idx: number) => void;
  initialSelectedIndex?: 0;
  mainImageClassName?: string;
  mainImageStyles?: React.CSSProperties;
  miniImageClassname?: string;
  miniImageStyles?: React.CSSProperties;
}

export const MultiImageViewer = ({
  imageObjects,
  defaultImagePath,
  clickable,
  className,
  styles = {},
  getMiniImagePath,
  onClickImage = () => {},
  indexOverride,
  setIndexOverride,
  initialSelectedIndex = 0,
  mainImageClassName,
  mainImageStyles = {},
  miniImageClassname,
  miniImageStyles = {},
  theme = "light",
  ...marginProps
}: IMultiImageViewerProps) => {
  const [shownImageIndex, setShownImageIndex] =
    useState<number>(initialSelectedIndex);

  // on mount / unmount
  useEffect(() => {
    setShownImageIndex(initialSelectedIndex);
    if (methodHasValue(setIndexOverride)) {
      setIndexOverride(initialSelectedIndex);
    }
  }, []);

  useEffect(() => {
    if (!objectHasValue(imageObjects[shownImageIndex])) {
      setShownImageIndex(0);
    }
    if (numberHasValue(indexOverride)) {
      setShownImageIndex(indexOverride);
    }
  }, [imageObjects, setShownImageIndex, shownImageIndex, indexOverride]);

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          multiImageViewer_container: true,
        },
        marginProps
      ),
      className
    )
  );

  const mainImageClasses = createComponentStyles(
    createLayoutStyles(
      {
        multiImageViewer_mainImage: true,
        multiImageViewer_mainImage_multi: imageObjects.length > 1,
      },
      mainImageClassName
    )
  );

  return (
    <div
      className={containerStyles}
      style={styles}
      data-testid="multi-image-viewer-root"
    >
      <Image
        inheritWidth
        clickable={clickable}
        className={mainImageClasses}
        styles={mainImageStyles}
        onClick={onClickImage}
        src={
          imageObjects && imageObjects[shownImageIndex]
            ? imageObjects[shownImageIndex].path
            : ""
        }
        alt={
          imageObjects && imageObjects[shownImageIndex]
            ? imageObjects[shownImageIndex].alt
            : "RESO Image"
        }
      />
      {imageObjects && imageObjects.length > 1 && (
        <div className="multiImageViewer_scrollbox">
          {imageObjects.map((imageObj, idx) => {
            const miniImageClasses = createComponentStyles(
              createLayoutStyles(
                {
                  multiImageViewer_miniImage: true,
                  multiImageViewer_miniImage_selected: shownImageIndex === idx,
                },
                miniImageClassname
              ),
              createThemeStyles("multiImageViewer_miniImage_selected_", theme)
            );
            return (
              <Image
                mh={1}
                clickable="pointer"
                className={miniImageClasses}
                key={idx}
                onClick={() => {
                  if (methodHasValue(setIndexOverride)) {
                    setIndexOverride(idx);
                  }
                  setShownImageIndex(idx);
                }}
                src={
                  methodHasValue(getMiniImagePath)
                    ? getMiniImagePath(imageObj)
                    : imageObj.path
                }
                alt={
                  imageObj && imageObj.alt ? imageObj.alt : "RESO Image Mini"
                }
                fallbacks={[imageObj.path, defaultImagePath]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
