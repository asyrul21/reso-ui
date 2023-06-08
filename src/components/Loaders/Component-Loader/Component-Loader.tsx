import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// styles
import "./styles/Component-Loader.layout.scss";
import "./styles/Component-Loader.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

export type LoaderSize = "small" | "medium" | "large";

export interface IComponentLoaderProps extends IComponent, IThemeProps {
  size?: LoaderSize;
  iconContainerClassName?: string;
  iconContainerStyles?: React.CSSProperties;
}

/*
 * Parent of this component MUST have position:relative
 */
export const ComponentLoader = ({
  size = "small",
  rootClassName,
  iconContainerClassName,
  rootStyles = {},
  iconContainerStyles,
  theme = "light",
}: IComponentLoaderProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        componentLoader_container: true,
      },
      rootClassName
    ),
    createThemeStyles("componentLoader_container_theme_", theme)
  );

  const loaderStyles = createComponentStyles(
    createLayoutStyles(
      {
        componentLoader_icon_container: true,
        spin: true,
        [`componentLoader_icon_size_${size}`]: true,
      },
      iconContainerClassName
    ),
    createThemeStyles("componentLoader_loader_theme_", theme)
  );

  return (
    <div
      className={containerStyles}
      style={rootStyles}
      data-testid="component-loader-root"
    >
      <div
        className={loaderStyles}
        style={iconContainerStyles}
        data-testid="component-loader-icon-container"
      />
    </div>
  );
};
