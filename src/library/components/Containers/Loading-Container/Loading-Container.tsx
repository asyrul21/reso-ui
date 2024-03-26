import React from "react";

import { Loader } from "../../Loaders";
import { ComponentError } from "../../Errors/Component-Error";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";

// styles
import "./styles/Loading-Container.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
} from "../../../utils/styles";

export interface ILoadingContainerProps extends IComponent, IThemeProps {
  type: "layer" | "conditional";
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  error?: string;
  minHeight?: string;
  componentLoaderClassName?: string;
  componentLoaderStyles?: React.CSSProperties;
  componentErrorClassName?: string;
  componentErrorStyles?: React.CSSProperties;
}

export const LoadingContainer = ({
  type,
  fullWidth = false,
  loading = false,
  children,
  error,
  minHeight = "fit-content",
  rootClassName,
  rootStyles = {},
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
        [`loadingContainer_container_fullWidth`]: fullWidth === true,
      },
      rootClassName,
      { position_relative: true }
    )
  );

  const containerMinHeight = type === "layer" ? minHeight : "inherit";

  return (
    <div
      className={containerStyles}
      style={{ ...rootStyles, minHeight: containerMinHeight }}
      data-testid="loading-container-root"
    >
      {type === "layer" ? (
        <>
          {loading ? (
            <Loader
              theme={theme}
              rootClassName={componentLoaderClassName}
              rootStyles={componentLoaderStyles}
            />
          ) : error ? (
            <ComponentError
              theme={theme}
              text={error}
              rootClassName={componentErrorClassName}
              rootStyles={componentErrorStyles}
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
              rootClassName={componentErrorClassName}
              rootStyles={componentErrorStyles}
            />
          ) : loading ? (
            <Loader
              theme={theme}
              rootClassName={componentLoaderClassName}
              rootStyles={componentLoaderStyles}
            />
          ) : (
            children
          )}
        </>
      )}
    </div>
  );
};
