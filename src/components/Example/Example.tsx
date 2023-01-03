import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";

// styles
import "./styles/Example.layout.scss";
import "./styles/Example.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

export interface IExampleComponent extends IComponent {
  name: string;
}

export const Example = ({ theme, name, className }: IExampleComponent) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        example_component_container: true,
      },
      className
    ),
    createThemeStyles("exampleComponent_theme_", theme)
  );

  return (
    <div className={containerStyles} data-testid="example-component-root">
      <h1>Hello World!</h1>
      <p>This is just an example component</p>
      <p>Name: {name}</p>
    </div>
  );
};
