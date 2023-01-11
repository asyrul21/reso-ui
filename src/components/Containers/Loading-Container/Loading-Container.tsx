import React from "react";

import { ComponentLoader } from "@components/Loaders/Component-Loader";
import { ComponentError } from "@components/Errors/Component-Error";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// styles
import "./styles/Loading-Container.layout.scss";

// utils
import { createComponentStyles, createLayoutStyles } from "@utils/styles";

export interface ILoadingContainerProps extends IComponent, IThemeProps {
  type: "layer" | "conditional";
  loading: boolean;
  children: JSX.Element;
  error?: string;
  minHeight?: string;
  componentLoaderClassName?: string;
  componentLoaderStyles?: React.CSSProperties;
  componentErrorClassName?: string;
  componentErrorStyles?: React.CSSProperties;
}

export const LoadingContainer = ({
  type,
  loading,
  children,
  error,
  minHeight = "fit-content",
  className,
  styles = {},
  componentLoaderClassName,
  componentLoaderStyles = {},
  componentErrorClassName,
  componentErrorStyles = {},
  theme,
}: ILoadingContainerProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        [`loadingContainer_container_${type}`]: true,
      },
      className,
      { position_relative: true }
    )
  );

  const containerMinHeight = type === "layer" ? minHeight : "inherit";
  return (
    <div
      className={containerStyles}
      style={{ ...styles, minHeight: containerMinHeight }}
      data-testid="loading-container-root"
    >
      {type === "layer" ? (
        <>
          {loading ? (
            <ComponentLoader
              theme={theme}
              className={componentLoaderClassName}
              styles={componentLoaderStyles}
            />
          ) : error ? (
            <ComponentError
              theme={theme}
              text={error}
              className={componentErrorClassName}
              styles={componentErrorStyles}
            />
          ) : null}
          {children}
        </>
      ) : (
        <>
          {error ? (
            <ComponentError
              theme={theme}
              text={error}
              className={componentErrorClassName}
              styles={componentErrorStyles}
            />
          ) : loading ? (
            <ComponentLoader
              theme={theme}
              className={componentLoaderClassName}
              styles={componentLoaderStyles}
            />
          ) : (
            children
          )}
        </>
      )}
    </div>
  );
};
