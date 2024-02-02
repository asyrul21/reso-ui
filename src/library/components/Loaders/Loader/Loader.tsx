import React from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";

// styles
import "./styles/Component-Loader.layout.scss";
import "./styles/Component-Loader.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "./../../../utils/styles";

export type LoaderSize = "small" | "medium" | "large";

export interface ILoaderProps extends IComponent, IThemeProps {
  type?: "default" | "fullscreen";
  text?: string;
  size?: LoaderSize;
  iconContainerClassName?: string;
  iconContainerStyles?: React.CSSProperties;
}

export const Loader = ({
  type = "default",
  text,
  size = "small",
  rootClassName,
  iconContainerClassName,
  rootStyles = {},
  iconContainerStyles,
  theme = "light",
}: ILoaderProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        componentLoader_container: true,
        componentLoader_container_fullscreen: type === "fullscreen",
      },
      rootClassName
    ),
    createThemeStyles("componentLoader_container_theme_", theme)
  );

  const loaderStyles = createComponentStyles(
    createLayoutStyles(
      {
        componentLoader_icon_container: true,
        componentLoader_icon_container_mb:
          typeof text === "string" && text !== "",
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
      {text && <p>{text}</p>}
    </div>
  );
};
