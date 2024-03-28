import React from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";

// styles
import "./styles/Center-Container.layout.scss";

// utils
import { createLayoutStyles, withSpacingsProps } from "../../../utils/styles";
import { IPaddingProps } from "../../../interfaces";

export interface ICenterContainerProps extends IComponent, IPaddingProps {
  children: React.ReactNode;
  maxWidth?: number;
  inheritMinWidth?: boolean;
}

export const CenterContainer = ({
  children,
  maxWidth,
  inheritMinWidth = false,
  rootClassName,
  rootStyles = {},
  ...props
}: ICenterContainerProps) => {
  const containerStyles = createLayoutStyles(
    withSpacingsProps(
      {
        resoui_center_container: true,
        resoui_center_container_inheritMinWidth: inheritMinWidth === true,
      },
      props
    ),
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
