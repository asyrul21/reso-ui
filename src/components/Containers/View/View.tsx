import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import { IPaddingProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/View.layout.scss";
import "./styles/View.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";
import IThemeProps from "@interfaces/Theme";

export interface IViewProps extends IComponent, IPaddingProps, IThemeProps {
  children: React.ReactNode;
}

export const View = ({
  className,
  children,
  styles = {},
  theme = "light",
  ...paddingProps
}: IViewProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          viewContainer_container: true,
        },
        paddingProps
      ),
      className,
      {
        position_relative: true,
        width_full: true,
      }
    ),
    createThemeStyles("viewContainer_theme_", theme)
  );
  return (
    <div
      className={containerStyles}
      style={styles}
      data-testid="view-container-root"
    >
      {children}
    </div>
  );
};
