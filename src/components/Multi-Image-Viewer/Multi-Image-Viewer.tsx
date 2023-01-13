import React, { useEffect, useState } from "react";

import { Image } from "@components/Image";

// import base interface
import IComponent from "@interfaces/IComponent";
import { IImageObjects, ImageType } from "@interfaces/IImageObjects";
import ImageClickableTypes from "@interfaces/ImageClickables";
import { IMarginProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/Image.layout.scss";
import "./styles/Image.theme.scss";

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
  imageObjects: IImageObjects[];
  defaultImagePath: string;
  clickable: ImageClickableTypes;
  getMiniImagePath?: (path: string, type: ImageType) => string;
  onClickImage?: () => void;
  // externallyViewedIndex controls images being shown from external components, such as Enlarged Image Modal Viewer
  setExternallyViewedIndex?: (idx: number) => void;
  indexOverride?: number;
  initialSelectedIndex?: 0;
  mainImageClassName?: string;
  mainImageStyles?: React.CSSProperties;
  miniImageClassname?: string;
  miniImageStyles?: React.CSSProperties;
}

const MultiImageContainer = ({
  imageObjects,
  defaultImagePath,
  clickable,
  className,
  styles = {},
  getMiniImagePath,
  setExternallyViewedIndex,
  onClickImage = () => {},
  indexOverride,
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
    if (methodHasValue(setExternallyViewedIndex)) {
      setExternallyViewedIndex(initialSelectedIndex);
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
            : ""
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
                  if (methodHasValue(setExternallyViewedIndex)) {
                    setExternallyViewedIndex(idx);
                  }
                  setShownImageIndex(idx);
                }}
                src={
                  methodHasValue(getMiniImagePath)
                    ? getMiniImagePath(imageObj.path, imageObj.type)
                    : imageObj.path
                }
                alt={imageObj.alt}
                fallbacks={[imageObj.path, defaultImagePath]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MultiImageContainer;
