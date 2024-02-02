import React from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import ISpacingsProps, { IMarginProps } from "../../../interfaces/ISpacingsProps";

// styles
import "./styles/Card-Container.layout.scss";
import "./styles/Card-Container.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "./../../../utils/styles";

export interface ICardContainerProps
  extends IComponent,
    IThemeProps,
    ISpacingsProps {
  children: React.ReactNode;
}

export const CardContainer = ({
  children,
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...spacingsProps
}: ICardContainerProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          card_container: true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles("card_container_theme_", theme)
  );

  return (
    <div
      className={containerStyles}
      style={rootStyles}
      data-testid="card-container-root"
    >
      {children}
    </div>
  );
};
