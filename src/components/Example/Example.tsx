import React from "react";
import classnames from "classnames";

// import base interface
import IComponent from "@interfaces/IComponent";

// import two files
import "./styles/Example.layout.scss";
import "./styles/Example.theme.scss";

export interface IExampleComponent extends IComponent {
  name: string;
}

export const Example = ({ theme, name, className }: IExampleComponent) => {
  const containerStyles = classnames({
    component_container: true,
    [`theme_${theme}`]: true,
    [className]: className && className !== "" ? true : false,
  });

  return (
    <div data-testid="example-component-root" className={containerStyles}>
      <h1>Hello World!</h1>
      <p>This is just an example component</p>
      <p>Name: {name}</p>
    </div>
  );
};
