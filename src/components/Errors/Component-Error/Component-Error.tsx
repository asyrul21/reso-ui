import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";

// styles
import "./styles/Component-Error.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

export interface IComponentErrorProps extends IComponent {
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
}: IComponentErrorProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        componentError_container: true,
      },
      className
    ),
    createThemeStyles()
  );

  const iconClasses = createComponentStyles(
    createLayoutStyles(
      {
        componentError_icon: true,
        componentError_icon_margin: text && text !== "",
      },
      iconClassName
    ),
    createThemeStyles()
  );

  const textClasses = createComponentStyles(
    createLayoutStyles(
      {
        loader_text: true,
        componentError_text: true,
      },
      textClassName
    ),
    createThemeStyles()
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
