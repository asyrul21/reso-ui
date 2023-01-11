import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// styles
import "./styles/Component-Error.layout.scss";
import "./styles/Component-Error.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

export interface IComponentErrorProps extends IComponent, IThemeProps {
  text?: string;
  iconClassName?: string;
  iconStyles?: React.CSSProperties;
  textClassName?: string;
  textStyles?: React.CSSProperties;
}

export const ComponentError = ({
  text,
  className,
  styles = {},
  iconClassName,
  iconStyles = {},
  textClassName,
  textStyles = {},
  theme = "light",
}: IComponentErrorProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        componentError_container: true,
      },
      className
    ),
    createThemeStyles("componentError_container_theme_", theme)
  );

  const iconClasses = createComponentStyles(
    createLayoutStyles(
      {
        componentError_icon: true,
        componentError_icon_margin: text && text !== "",
      },
      iconClassName
    ),
    createThemeStyles("componentError_icon_theme_", theme)
  );

  const textClasses = createComponentStyles(
    createLayoutStyles(
      {
        loader_text: true,
        componentError_text: true,
      },
      textClassName
    ),
    createThemeStyles("componentError_text_theme_", theme)
  );
  return (
    <div
      className={containerStyles}
      style={styles}
      data-testid="component-error-root"
    >
      <div
        className={iconClasses}
        style={iconStyles}
        data-testid="component-error-icon"
      >
        !
      </div>
      {text && text !== "" && (
        <p
          className={textClasses}
          style={textStyles}
          data-testid="component-error-text"
        >
          {text}
        </p>
      )}
    </div>
  );
};
