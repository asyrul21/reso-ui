import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// styles
import "./styles/Panel.layout.scss";
import "./styles/Panel.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

export interface IPanelProps extends IComponent, IThemeProps {
  children: React.ReactNode;
}

export const Panel = ({
  children,
  rootClassName,
  rootStyles = {},
  theme = "light",
}: IPanelProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        panel_container: true,
      },
      rootClassName
    ),
    createThemeStyles("panel_container_theme_", theme)
  );

  return (
    <div
      className={containerStyles}
      style={rootStyles}
      data-testid="panel-container-root"
    >
      {children}
    </div>
  );
};
