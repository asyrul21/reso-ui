import React from "react";
import clasnames from "classnames";

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
  LogoWrapperElement?: "a" | "div";
  logoHref?: string;
  textLogo?: string;
  renderCustomLogo?: () => React.ReactNode;
  onClickLogo?: () => void;
  children: React.ReactNode;
  maxWidth?: number;
  position?: "absolute" | "fixed";
  navClassName?: string;
  navStyles?: React.CSSProperties;
}

export const Navbar = ({
  LogoWrapperElement = "a",
  logoHref = "#",
  textLogo = "Logo",
  renderCustomLogo,
  onClickLogo,
  maxWidth,
  children,
  position = "fixed",
  navClassName,
  navStyles = {},
  rootClassName,
  rootStyles = {},
  theme = "light",
  ph = 5,
  ...spacingsProps
}: INavbarProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          navbar_header_container: true,
          [`navbar_header_position_${position}`]: true,
        },
        { ph, ...spacingsProps }
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
    )
  );

  const logoContainerClasses = clasnames({
    a_base: LogoWrapperElement === "a",
    no_select: true,
    navbar_nav_logo_container: true,
    navbar_nav_logo_container_curson_pointer:
      methodHasValue(onClickLogo) || LogoWrapperElement === "a",
  });

  return (
    <header
      data-testid="navbar-root"
      className={containerStyles}
      style={rootStyles}
    >
      <nav
        className={navClasses}
        style={{
          maxWidth: typeof maxWidth === "number" ? maxWidth : "unset",
          ...navStyles,
        }}
      >
        <LogoWrapperElement
          data-testid="navbar-logo"
          className={logoContainerClasses}
          onClick={() => {
            if (methodHasValue(onClickLogo)) {
              onClickLogo();
            }
          }}
          href={LogoWrapperElement === "a" ? logoHref : undefined}
        >
          {typeof renderCustomLogo === "function" ? (
            renderCustomLogo()
          ) : (
            <Text
              theme={theme}
              Element="span"
              rootClassName="navbar_nav_logo_text"
              size={9}
            >
              {textLogo}
            </Text>
          )}
        </LogoWrapperElement>
        <div className="navbar_nav_children_container">{children}</div>
      </nav>
    </header>
  );
};
