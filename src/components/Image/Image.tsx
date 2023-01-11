import React, { useState } from "react";

import { ComponentLoader } from "@components/Loaders/Component-Loader";

// import base interface
import IComponent from "@interfaces/IComponent";
import { IMarginProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/Image.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  withSpacingsProps,
} from "@utils/styles";

export interface IImageProps extends IComponent, IMarginProps {
  onClick?: () => void;
  clickable?: "zoomIn" | "zoomOut" | "pointer";
  src: string;
  imgClassName?: string;
  imgStyles?: React.CSSProperties;
  objectFit?: "cover" | "contain" | "fill";
  alt?: string;
  fallbacks?: string[];
}

export const Image = ({
  onClick = () => {},
  clickable,
  src,
  alt = "RESO Image",
  imgClassName,
  objectFit = "fill",
  className,
  fallbacks = [],
  styles = {},
  imgStyles = {},
  ...spacingsProps
}: IImageProps) => {
  const [fallbackIndex, setFallbackIndex] = useState(-1);
  const [loaded, setLoaded] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          image_container: true,
          [`image_container_clickable_${clickable}`]: !!clickable,
        },
        spacingsProps
      ),
      className,
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
      style={{
        ...styles,
      }}
      onClick={onClick}
      data-testid="image-component-root"
    >
      {error ? (
        <p data-testid="image-component-error">{`Unable to load ${alt}`}</p>
      ) : (
        <>
          {!loaded && <ComponentLoader />}
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
