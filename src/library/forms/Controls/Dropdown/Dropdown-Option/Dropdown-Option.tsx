import React, { useEffect, useState } from "react";

// import base interface
import IComponent from "../../../../interfaces/IComponent";
import IThemeProps from "../../../../interfaces/Theme";

// styles
import "./styles/Dropdown-Option.layout.scss";
import "./styles/Dropdown-Option.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../../utils/styles";
import { methodHasValue } from "../../../../utils/validations";

export interface IDropdownOptionProps extends IComponent, IThemeProps {
  Element?: "li" | "a";
  testKey?: string; // for unit tests only
  option?: string;
  active?: boolean;
  enableActiveStyles?: boolean;
  href?: string;
  target?: string;
  onClick?: () => void;
  renderCustomOption?: (props: {
    theme: IThemeProps;
    active?: boolean;
    option?: string;
  }) => JSX.Element;
}

export const DropdownOption = ({
  Element = "li",
  option,
  active,
  enableActiveStyles = true,
  renderCustomOption,
  href = "#",
  target,
  onClick,
  rootClassName,
  rootStyles,
  theme = "light",
}: IDropdownOptionProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        dropdown_option_base: true,
        [`dropdown_option_hover_theme_${theme}`]: enableActiveStyles && !active,
        [`dropdown_option_active_theme_${theme}`]:
          enableActiveStyles === true && active === true,
      },
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`dropdown_option_theme_`, theme)
  );

  return methodHasValue(renderCustomOption) ? (
    renderCustomOption({
      theme: theme as IThemeProps,
      active,
      option,
    })
  ) : (
    <Element
      data-testid="dropdown-option-root"
      href={href}
      target={target}
      onClick={() => {
        if (Element !== "a" && methodHasValue(onClick)) {
          onClick();
        }
      }}
      className={containerStyles}
      style={rootStyles}
    >
      {option}
    </Element>
  );
};
