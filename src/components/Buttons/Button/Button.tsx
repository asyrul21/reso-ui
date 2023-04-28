import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/Button.layout.scss";
import "./styles/Button.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";

import { methodHasValue } from "@utils/validations";

export interface IButtonProps extends IComponent, IThemeProps, IMarginProps {
  type?: "plain" | "primary" | "link";
  id?: string;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  inheritWidth?: boolean;
  inline?: boolean;
}

export const Button = ({
  id = null,
  type = "plain",
  text,
  onClick,
  disabled = false,
  inheritWidth = false,
  inline = false,
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...spacingsProps
}: IButtonProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          button_container: true,
          button_container_inheritWidth: inheritWidth,
          button_container_inline: inline,
          button_container_link: type === "link",
          button_text: true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        disabled: disabled,
        no_select: true,
      }
    ),
    createThemeStyles(`button_${type}_theme_`, theme)
  );

  return (
    <button
      id={id ? id : null}
      data-testid="button-root"
      className={containerStyles}
      style={rootStyles}
      type="button"
      onClick={() => {
        if (methodHasValue(onClick)) {
          onClick();
        }
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
