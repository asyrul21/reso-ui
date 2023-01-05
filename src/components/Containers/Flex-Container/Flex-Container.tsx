import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";

// styles
import "./styles/Flex-Container.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  withSpacingsProps,
} from "@utils/styles";

import { ISpacingsProps } from "@interfaces/ISpacingsProps";

export interface IFlexContainerProps extends IComponent, ISpacingsProps {
  direction?: "row" | "column";
  justify?: "space-between" | "start" | "end" | "space-around" | "center";
  align?: "center" | "start" | "end";
  children: JSX.Element;
  fullWidth?: boolean;
  widthFitContent?: boolean;
  wrap?: boolean;
  className?: string;
  borderColor?: string;
}

// BEWARE
// when using this component you need to set specific height
// 100% height would not work with flex

export const FlexContainer = ({
  direction = "row",
  justify = "space-between",
  align = "center",
  fullWidth = false,
  widthFitContent = false,
  wrap = false,
  children,
  className,
  borderColor = null,
  styles = {},
  ...spacingsProps
}: IFlexContainerProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          component_flex_container: true,
          [`flex-${direction}`]: true,
          [`flex-justify-${justify}`]: true,
          [`flex-align-${align}`]: true,
          [`flex-wrap`]: wrap,
        },
        spacingsProps
      ),
      className,
      {
        width_full: fullWidth,
        width_fit_content: widthFitContent,
      }
    )
  );

  return (
    <div
      data-testid="flex-container-root"
      style={{
        border: borderColor ? `2px solid ${borderColor}` : null,
        ...styles,
      }}
      className={containerStyles}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
