import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";

// styles
import "./styles/Flex.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  withSpacingsProps,
} from "@utils/styles";

import { ISpacingsProps } from "@interfaces/ISpacingsProps";
import { hasValue } from "@utils/validations";

export interface IFlexProps extends IComponent, ISpacingsProps {
  direction?: "row" | "column";
  justify?: "space-between" | "start" | "end" | "space-around" | "center";
  align?: "center" | "start" | "end";
  grow?: boolean;
  shrink?: boolean;
  basis?: "auto" | boolean | string;
  wrap?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  widthFitContent?: boolean;
  className?: string;
  borderColor?: string;
}

// BEWARE
// when using this component you need to set specific height
// 100% height would not work with flex

export const Flex = ({
  direction = "row",
  justify = "space-between",
  align = "center",
  grow = false,
  shrink = true,
  basis = "auto",
  wrap = false,
  fullWidth = false,
  widthFitContent = false,
  children,
  rootClassName,
  borderColor = null,
  rootStyles = {},
  ...spacingsProps
}: IFlexProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          flex_container: true,
          [`flex_${direction}`]: true,
          [`flex_justify_${justify}`]: true,
          [`flex_align_${align}`]: true,
          [`flex_grow`]: grow,
          [`flex_shrink`]: shrink,
          [`flex_no_shrink`]: !shrink,
          [`flex_wrap`]: wrap,
        },
        spacingsProps
      ),
      rootClassName,
      {
        width_full: fullWidth,
        width_fit_content: widthFitContent,
      }
    )
  );

  const flexBasis =
    basis && basis === "auto" ? "auto" : typeof basis === "string" ? basis : 0;

  return (
    <div
      data-testid="flex-container-root"
      style={{
        border: borderColor ? `2px solid ${borderColor}` : null,
        flexBasis,
        ...rootStyles,
      }}
      className={containerStyles}
    >
      {children}
    </div>
  );
};
