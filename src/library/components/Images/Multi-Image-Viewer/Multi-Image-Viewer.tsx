import React, { useEffect, useState } from "react";

import { Image } from "../Image";
import { HorizontalScrollContainer } from "../../Containers/Horizontal-Scroll-Container";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import { IImageObject } from "../../../interfaces/IImageObject";
import ImageClickable from "../../../interfaces/ImageClickable";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";

// styles
import "./styles/Multi-Image-Viewer.layout.scss";
import "./styles/Multi-Image-Viewer.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";
import {
  methodHasValue,
  numberHasValue,
  objectHasValue,
} from "../../../utils/validations";
import IThemeProps from "../../../interfaces/Theme";

export interface IMultiImageViewerProps
  extends IComponent,
    IMarginProps,
    IThemeProps {
  imageObjects: IImageObject[];
  defaultImagePath?: string;
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
  miniImageSelectedClassName?: string;
  miniImageSelectedStyles?: React.CSSProperties;
}

export const MultiImageViewer = ({
  imageObjects,
  defaultImagePath = "",
  clickable,
  rootClassName,
  rootStyles = {},
  getMiniImagePath,
  onClickImage,
  indexOverride,
  setIndexOverride,
  initialSelectedIndex = 0,
  mainImageClassName,
  mainImageStyles = {},
  miniImageClassname,
  miniImageStyles = {},
  miniImageSelectedClassName,
  miniImageSelectedStyles = {},
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
      rootClassName
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
      style={rootStyles}
      data-testid="multi-image-viewer-root"
    >
      <Image
        inheritWidth
        clickable={clickable}
        rootClassName={mainImageClasses}
        rootStyles={mainImageStyles}
        onClick={() => {
          if (onClickImage && methodHasValue(onClickImage)) {
            onClickImage();
          }
        }}
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
        <HorizontalScrollContainer inheritWidth pa={1}>
          {imageObjects.map((imageObj, idx) => {
            const miniImageLayoutClasses = createLayoutStyles(
              {
                multiImageViewer_miniImage: true,
                multiImageViewer_miniImage_selected: shownImageIndex === idx,
                [miniImageSelectedClassName]:
                  miniImageSelectedClassName && shownImageIndex === idx,
              },
              miniImageClassname
            );
            const miniImageThemeClasses =
              shownImageIndex === idx
                ? createThemeStyles(
                    "multiImageViewer_miniImage_selected_theme_",
                    theme
                  )
                : null;

            return (
              <Image
                mh={1}
                clickable="pointer"
                rootClassName={createComponentStyles(
                  miniImageLayoutClasses,
                  miniImageThemeClasses
                )}
                rootStyles={
                  shownImageIndex === idx
                    ? {
                        ...miniImageStyles,
                        ...miniImageSelectedStyles,
                      }
                    : miniImageStyles
                }
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
        </HorizontalScrollContainer>
      )}
    </div>
  );
};
