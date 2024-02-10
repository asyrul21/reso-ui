import React from "react";

// import base interface
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";

// !! IMPORT OTHER COMPONENTS FIRST BEFORE IMPORTING STYLE FILES
import { Text } from "../Text";

// styles
import "./styles/Example.layout.scss";
import "./styles/Example.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "../../utils/styles";

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
      <Text Element="h1" mb={5} theme={theme}>
        Hello World!
      </Text>
      <Text Element="p" mb={2} theme={theme}>
        This is just an example component
      </Text>
      <Text Element="p" theme={theme}>
        Name: {name}
      </Text>
    </div>
  );
};
