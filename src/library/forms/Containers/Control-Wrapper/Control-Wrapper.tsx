import React from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";

import { Flex } from "../../../components/Containers/Flex";

// styles
import "./styles/Control-Wrapper.layout.scss";
import "./styles/Control-Wrapper.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";

export interface IControlWrapperProps
  extends IComponent,
    IThemeProps,
    IMarginProps {
  layout?: "row" | "column";
  children: React.ReactNode;
}

export const ControlWrapper = ({
  layout = "row",
  rootClassName,
  rootStyles = {},
  children,
  theme = "light",
  mb = 4,
  ...spacingsProps
}: IControlWrapperProps) => {
  const containerClasses = createComponentStyles(
    createLayoutStyles(
      {
        control_container: true,
      },
      rootClassName
    ),
    createThemeStyles("control_container_theme_", theme)
  );

  return (
    <Flex
      // rootStyles={{ border: "1px solid blue" }}
      direction={layout === "row" ? "row" : "column"}
      align="start"
      justify="start"
      rootClassName={containerClasses}
      rootStyles={rootStyles}
      mb={mb}
      {...spacingsProps}
    >
      {children}
    </Flex>
  );
};
