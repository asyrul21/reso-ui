import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import { IPaddingProps, IMarginProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/Horizontal-Scroll-Container.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  withSpacingsProps,
} from "@utils/styles";

export interface IHSCProps extends IComponent, IPaddingProps, IMarginProps {
  children: React.ReactNode;
  inheritWidth?: boolean;
}

export const HorizontalScrollContainer = ({
  children,
  inheritWidth = false,
  rootClassName,
  rootStyles = {},
  ...spacingsProps
}: IHSCProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          hsc_container: true,
          hsc_container_inheritWidth: inheritWidth,
        },
        spacingsProps
      ),
      rootClassName
    )
  );
  return (
    <div
      className={containerStyles}
      style={rootStyles}
      data-testid="horizontal-scroll-container-root"
    >
      {children}
    </div>
  );
};
