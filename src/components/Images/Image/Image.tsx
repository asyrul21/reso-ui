import React, { useState } from "react";

import {
  ComponentLoader,
  LoaderSize,
} from "@components/Loaders/Component-Loader";

// import base interface
import IComponent from "@interfaces/IComponent";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import ImageClickable from "@interfaces/ImageClickable";

// styles
import "./styles/Image.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  withSpacingsProps,
} from "@utils/styles";
import { methodHasValue } from "@utils/validations";

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

export const Image = ({
  onClick,
  clickable,
  loaderSize = "small",
  src,
  alt = "RESO Image",
  imgClassName,
  objectFit = "fill",
  rootClassName,
  rootStyles = {},
  fallbacks = [],
  imgStyles = {},
  inheritWidth = false,
  ...spacingsProps
}: IImageProps) => {
  const [fallbackIndex, setFallbackIndex] = useState(-1);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          image_container: true,
          image_container_inheritWidth: inheritWidth,
          [`image_container_clickable_${clickable}`]: !!clickable,
        },
        spacingsProps
      ),
      rootClassName,
      {
        position_relative: true,
      }
    )
  );

  const imgClasses = createComponentStyles(
    createLayoutStyles(
      {
        image_img: true,
        [`image_img_fit-${objectFit}`]: true,
      },

      imgClassName
    )
  );

  const hasFallbacks = fallbacks && fallbacks.length > 0;
  const imgSource =
    hasFallbacks && fallbackIndex > -1 ? fallbacks[fallbackIndex] : src;

  return (
    <div
      className={containerStyles}
      style={rootStyles}
      onClick={() => {
        if (onClick && methodHasValue(onClick)) {
          onClick();
        }
      }}
      data-testid="image-component-root"
    >
      {error ? (
        <p data-testid="image-component-error">{`Unable to load ${alt}`}</p>
      ) : (
        <>
          {!loaded && <ComponentLoader size={loaderSize} />}
          {
            <img
              data-testid="image-component-img"
              style={
                loaded ? { ...imgStyles } : { ...imgStyles, display: "none" }
              }
              alt={alt}
              src={imgSource}
              onLoad={() => {
                setError(false);
                setLoaded(true);
              }}
              onError={() => {
                if (hasFallbacks) {
                  setLoaded(false);
                  if (fallbackIndex < fallbacks.length - 1) {
                    setFallbackIndex(fallbackIndex + 1);
                  } else {
                    setLoaded(true);
                    setError(true);
                  }
                } else {
                  setLoaded(true);
                  setError(true);
                }
              }}
              className={imgClasses}
            />
          }
        </>
      )}
    </div>
  );
};
