import React from "react";

import { Text } from "../../Text";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IPaddingProps } from "../../../interfaces/ISpacingsProps";

// styles
import "./styles/Navbar.layout.scss";
import "./styles/Navbar.theme.scss";

import { methodHasValue } from "../../../utils/validations";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";

export interface INavbarProps extends IComponent, IThemeProps, IPaddingProps {
  textLogo?: string;
  renderCustomLogo?: (props: { onClickLogo: () => void }) => React.ReactNode;
  onClickLogo?: () => void;
  children: React.ReactNode;
  maxWidth?: number;
  position?: "absolute" | "fixed";
  navClassName?: string;
  navStyles?: React.CSSProperties;
}

export const Navbar = ({
  textLogo = "Logo",
  renderCustomLogo,
  onClickLogo,
  maxWidth,
  children,
  position = "fixed",
  navClassName,
  navStyles,
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...spacingsProps
}: INavbarProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          navbar_header_container: true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`navbar_theme_`, theme)
  );

  const navClasses = createComponentStyles(
    createLayoutStyles(
      {
        navbar_nav_container: true,
      },
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`navbar_theme_`, theme)
  );

  return (
    <header className={containerStyles} style={rootStyles}>
      <nav
        className={navClasses}
        style={{
          maxWidth: typeof maxWidth === "number" ? maxWidth : "unset",
          ...navStyles,
        }}
      >
        <div className="navbar_nav_logo_container">
          {typeof renderCustomLogo === "function" ? (
            renderCustomLogo({
              onClickLogo:
                typeof onClickLogo === "function" ? onClickLogo : null,
            })
          ) : (
            <Text Element="span" rootClassName="navbar_nav_logo_text" size={9}>
              {textLogo}
            </Text>
          )}
        </div>
        {children}
      </nav>
    </header>
  );
};
