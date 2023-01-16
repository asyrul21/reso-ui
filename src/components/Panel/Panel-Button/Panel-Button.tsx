import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// styles
import "./styles/Panel-Button.layout.scss";
import "./styles/Panel-Button.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";
import { methodHasValue } from "@utils/validations";

export interface IPanelButtonProps extends IComponent, IThemeProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const PanelButton = ({
  text,
  rootClassName,
  rootStyles = {},
  onClick,
  disabled = false,
  theme = "light",
}: IPanelButtonProps) => {
  const buttonClasses = createComponentStyles(
    createLayoutStyles(
      {
        panel_button_container: true,
      },
      rootClassName,
      {
        disabled: disabled,
      }
    ),
    createThemeStyles("panel_button_theme_", theme)
  );

  return (
    <div
      onClick={() => {
        if (methodHasValue(onClick)) {
          onClick();
        }
      }}
      role="button"
      aria-disabled={disabled}
      className={buttonClasses}
      style={rootStyles}
      data-testid="panel-button-root"
    >
      {text}
    </div>
  );
};
