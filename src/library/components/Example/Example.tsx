import React from "react";

// import base interface
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";

// !! IMPORT OTHER COMPONENTS FIRST BEFORE IMPORTING STYLE FILES

// styles
import "./styles/Example.layout.scss";
import "./styles/Example.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "./../../utils/styles";

export interface IExampleComponent extends IComponent, IThemeProps {
  name: string;
}

export const Example = ({
  theme,
  name,
  rootClassName,
  rootStyles = {},
}: IExampleComponent) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        example_component_container: true,
      },
      rootClassName
    ),
    createThemeStyles("exampleComponent_theme_", theme)
  );

  return (
    <div
      className={containerStyles}
      data-testid="example-component-root"
      style={rootStyles}
    >
      <h1>Hello World!</h1>
      <p>This is just an example component</p>
      <p>Name: {name}</p>
    </div>
  );
};
