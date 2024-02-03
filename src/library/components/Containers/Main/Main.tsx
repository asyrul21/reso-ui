import React from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import {
  IMarginProps,
  IPaddingProps,
} from "../../../interfaces/ISpacingsProps";

// styles
import "./styles/Main.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";

export interface IMainProps extends IComponent, IMarginProps, IPaddingProps {
  children: React.ReactNode;
}

export const Main = ({
  children,
  rootClassName,
  rootStyles = {},
  ...spacingsProps
}: IMainProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          main_container: true,
        },
        spacingsProps
      ),
      rootClassName,
      {}
    )
  );

  return (
    <main data-testid="main-root" className={containerStyles}>
      {children}
    </main>
  );
};
