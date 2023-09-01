import React, { useState } from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import ISpacingsProps from "@interfaces/ISpacingsProps";

// styles
import "./styles/Form-Container.layout.scss";
import "./styles/Form-Container.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";

export interface IFormContainerProps
  extends IComponent,
    IThemeProps,
    ISpacingsProps {
  children: React.ReactNode;
  onSubmit: () => void;
}

export const FormContainer = ({
  rootClassName,
  rootStyles = {},
  onSubmit,
  children,
  theme = "light",
  ...spacingsProps
}: IFormContainerProps) => {
  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          form_container: true,
        },
        spacingsProps
      ),
      rootClassName
    ),
    createThemeStyles("form_container_theme_", theme)
  );

  return (
    <form
      data-testid="form-root"
      className={containerClasses}
      style={rootStyles}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};
