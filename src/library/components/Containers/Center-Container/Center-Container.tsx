import React from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";

// styles
import "./styles/Center-Container.layout.scss";

// utils
import { createLayoutStyles } from "../../../utils/styles";

export interface ICenterContainerProps extends IComponent {
  children: React.ReactNode;
  maxWidth?: number;
}

// width and height will follow children
export const CenterContainer = ({
  children,
  maxWidth,
  rootClassName,
  rootStyles = {},
}: ICenterContainerProps) => {
  const containerStyles = createLayoutStyles(
    {
      component_center_container: true,
    },
    rootClassName
  );

  return (
    <div
      className={containerStyles}
      data-testid="center-container-root"
      style={{
        maxWidth,
        ...rootStyles,
      }}
    >
      {children}
    </div>
  );
};

export default CenterContainer;
