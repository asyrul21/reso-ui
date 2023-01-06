import React, { useState } from "react";

import { ComponentLoader } from "@components/Loaders/Component-Loader";

// import base interface
import IComponent from "@interfaces/IComponent";
import { IMarginProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/Image-Container.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  withSpacingsProps,
} from "@utils/styles";

export interface IImageContainerProps extends IComponent, IMarginProps {
  width?: string;
  height?: string;
  onClick?: () => void;
  clickable?: "zoomIn" | "zoomOut" | "pointer";
  children: JSX.Element;
}

export const ImageContainer = ({
  width = "456px",
  height = "364px",
  onClick,
  clickable,
  children,
  className,
  styles,
  ...spacingsProps
}: IImageContainerProps) => {
  const [loaded, setLoaded] = useState(false);

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          imageContainer_container: true,
          [`imageContainer_clickable_${clickable}`]: !!clickable,
        },
        spacingsProps
      ),
      className,
      {
        position_relative: true,
      }
    )
  );

  return (
    <div
      className={containerStyles}
      style={{
        width,
        height,
        minWidth: width,
        ...styles,
      }}
      onClick={onClick}
      data-testid="image-container-root"
    >
      {!loaded && <ComponentLoader data-testid="image-container-loader" />}
      {/* {true && <ComponentLoader />} */}
      {children &&
        React.Children.map(children, (child) => {
          return React.cloneElement(
            child,
            {
              ...child.props,
              loaded,
              onLoad: () => {
                setLoaded(true);
              },
            },
            null
          );
        })}
    </div>
  );
};

export default ImageContainer;
