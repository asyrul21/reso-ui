import React from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import { IThemeProps } from "../../../interfaces";

// styles
import "./styles/Main.layout.scss";
import "./styles/Main.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "../../../utils/styles";

export interface IMainProps extends IComponent, IThemeProps {
  children: React.ReactNode;
}

export const Main = ({
  children,
  rootClassName,
  rootStyles = {},
  theme = "light",
}: IMainProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        main_container: true,
      },
      rootClassName,
      {}
    ),
    createThemeStyles(`main_container_theme_`, theme)
  );

  return (
    <main
      data-testid="main-root"
      className={containerStyles}
      style={rootStyles}
    >
      {children}
    </main>
  );
};
