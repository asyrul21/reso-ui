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

export interface IDropdownOption {
  key: string;
  value: string;
}

export interface IDropdownOptionProps extends IComponent, IThemeProps {
  Element?: "li" | "a";
  key?: string;
  option?: string;
  active?: boolean;
  enableActiveStyles?: boolean;
  href?: string;
  onClick?: ({ key, option }: { key?: string; option?: string }) => void;
  renderCustomOption?: (props: {
    theme: IThemeProps;
    active?: boolean;
    key?: string;
    option?: string;
  }) => JSX.Element;
}

export const DropdownOption = ({
  Element = "li",
  key,
  option,
  active,
  enableActiveStyles = true,
  renderCustomOption,
  href = "#",
  onClick,
  rootClassName,
  rootStyles,
  theme = "light",
}: IDropdownOptionProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        dropdown_option_base_layout: true,
        [`dropdown_option_active_${theme}`]:
          enableActiveStyles === true && active === true,
      },
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`dropdown_option_base_theme_`, theme)
  );

  //   return (
  //     <Element
  //       href={href}
  //       onClick={() => {
  //         if (methodHasValue(onClick)) {
  //           onClick({ key, option });
  //         }
  //       }}
  //       className={containerStyles}
  //       style={rootStyles}
  //     >
  //       DropdownOption
  //     </Element>
  //   );
  return methodHasValue(renderCustomOption) ? (
    renderCustomOption({
      theme: theme as IThemeProps,
      active,
      key,
      option,
    })
  ) : (
    <Element
      href={href}
      onClick={() => {
        if (methodHasValue(onClick)) {
          onClick({ key, option });
        }
      }}
      className={containerStyles}
      style={rootStyles}
    >
      {option}
    </Element>
  );
};
