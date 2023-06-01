import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";

import { Flex } from "@components/Containers/Flex";

// styles
import "./styles/Form-Input-Container.layout.scss";
import "./styles/Form-Input-Container.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";

export interface IFormInputContainerProps
  extends IComponent,
    IThemeProps,
    IMarginProps {
  children: React.ReactNode;
}

export const FormInputContainer = ({
  rootClassName,
  rootStyles = {},
  children,
  theme = "light",
  mb = 4,
  ...spacingsProps
}: IFormInputContainerProps) => {
  const containerClasses = createComponentStyles(
    createLayoutStyles(
      {
        formInput_container: true,
      },
      rootClassName
    ),
    createThemeStyles("formInput_container_theme_", theme)
  );

  return (
    <Flex
      // rootStyles={{ border: "1px solid blue" }}
      direction="row"
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
