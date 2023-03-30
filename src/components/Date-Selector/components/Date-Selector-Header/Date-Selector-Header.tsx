import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// styles
import "./styles/Date-Selector-Header.layout.scss";
import "./styles/Date-Selector-Header.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

import { methodHasValue } from "@utils/validations";

export interface IDateSelectorHeaderProps extends IComponent, IThemeProps {
  text: string;
  opened?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const DateSelectorHeader = ({
  text,
  opened = false,
  onClick,
  disabled = false,
  rootClassName,
  rootStyles = {},
  theme = "light",
}: IDateSelectorHeaderProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        date_selector_header: true,
        date_selector_header_opened: opened,
      },
      rootClassName,
      {
        disabled: disabled,
        no_select: true,
      }
    ),
    createThemeStyles(`date_selector_header_theme_`, theme)
  );

  return (
    <button
      data-testid="date-selector-header-root"
      className={containerStyles}
      onClick={() => {
        if (!disabled && methodHasValue(onClick)) {
          onClick();
        }
      }}
      style={rootStyles}
    >
      <span>{text}</span>
    </button>
  );
};
