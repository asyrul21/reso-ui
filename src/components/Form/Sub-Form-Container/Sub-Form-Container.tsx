import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/Sub-Form-Container.layout.scss";
import "./styles/Sub-Form-Container.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";

export interface ISubFormContainerProps
  extends IComponent,
    IThemeProps,
    IMarginProps {
  title: string;
  headerClassName?: string;
  headerStyles?: React.CSSProperties;
  children: React.ReactNode;
}

export const SubForm = ({
  title,
  rootClassName,
  rootStyles = {},
  headerClassName,
  headerStyles = {},
  children,
  theme = "light",
  ...spacingsProps
}: ISubFormContainerProps) => {
  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          subForm_container: true,
        },
        spacingsProps
      ),
      rootClassName
    ),
    createThemeStyles("subForm_container_theme_", theme)
  );

  const headerClasses = createComponentStyles(
    createLayoutStyles(
      {
        subForm_header: true,
        heading: true,
      },
      headerClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles("subForm_header_theme_", theme)
  );

  return (
    <div
      data-testid="subForm-root"
      className={containerClasses}
      style={rootStyles}
    >
      <div data-testid="subForm-header" className={headerClasses}>
        {title}
      </div>
      <div className="subForm_content">{children}</div>
    </div>
  );
};
