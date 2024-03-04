import React from "react";

// import base interface
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";
import { IPaddingProps } from "../../interfaces/ISpacingsProps";

// styles
import "./styles/Footer.layout.scss";
import "./styles/Footer.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../utils/styles";

export interface IFooterProps extends IComponent, IThemeProps, IPaddingProps {
  children?: React.ReactNode;
  positionFixed?: boolean;
}

export const Footer = ({
  children,
  positionFixed = false,
  rootClassName,
  rootStyles = {},
  theme = "light",
  pv = 3,
  ph = 5,
  ...spacingsProps
}: IFooterProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          footer_container: true,
          footer_container_positionFixed: positionFixed,
        },
        { ph, pv, ...spacingsProps }
      ),
      rootClassName
    ),
    createThemeStyles("footer_container_theme_", theme)
  );

  return (
    <footer
      data-testid="footer-root"
      className={containerStyles}
      style={rootStyles}
    >
      {children}
    </footer>
  );
};
