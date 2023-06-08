import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// styles
import "./styles/Full-Screen-Error.layout.scss";
import "./styles/Full-Screen-Error.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";
import useDisableBodyScroll from "@hooks/useDisableBodyScroll";

export interface IFullScreenErrorProps extends IComponent, IThemeProps {
  text?: string;
  textClassName?: string;
  textStyles?: React.CSSProperties;
  iconClassName?: string;
  iconStyles?: React.CSSProperties;
}

export const FullScreenError = ({
  text = "Oops, something went horribly wrong!",
  rootClassName,
  rootStyles = {},
  textClassName,
  textStyles = {},
  iconClassName,
  iconStyles = {},
  theme = "light",
}: IFullScreenErrorProps) => {
  useDisableBodyScroll(true);

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        fullScreenError_container: true,
      },
      rootClassName
    ),
    createThemeStyles("fullScreenError_container_theme_", theme)
  );

  const iconClasses = createComponentStyles(
    createLayoutStyles(
      {
        fullScreenError_icon: true,
      },
      iconClassName
    ),
    createThemeStyles("fullScreenError_icon_theme_", theme)
  );

  const textClasses = createComponentStyles(
    createLayoutStyles(
      {
        loader_text: true,
      },
      textClassName
    ),
    createThemeStyles("fullScreenError_text_theme_", theme)
  );

  return (
    <div
      className={containerStyles}
      style={rootStyles}
      data-testid="full-screen-error-root"
    >
      <div
        className={iconClasses}
        style={iconStyles}
        data-testid="full-screen-error-icon"
      >
        !
      </div>
      <p
        className={textClasses}
        style={textStyles}
        data-testid="full-screen-error-text"
      >
        {text}
      </p>
    </div>
  );
};
