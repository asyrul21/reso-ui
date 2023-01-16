import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// styles
import "./styles/Panel-Title.layout.scss";
import "./styles/Panel-Title.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

export interface IPanelTitleProps extends IComponent, IThemeProps {
  text: string;
}

export const PanelTitle = ({
  text,
  rootClassName,
  rootStyles = {},
  theme = "light",
}: IPanelTitleProps) => {
  const titleStyles = createComponentStyles(
    createLayoutStyles(
      {
        panel_title: true,
      },
      rootClassName
    ),
    createThemeStyles("panel_title_theme_", theme)
  );

  return (
    <p
      className={titleStyles}
      style={rootStyles}
      data-testid="panel-title-root"
    >
      {text}
    </p>
  );
};
