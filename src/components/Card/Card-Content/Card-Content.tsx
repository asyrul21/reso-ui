import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import ISpacingsProps from "@interfaces/ISpacingsProps";

// styles
import "./styles/Card-Content.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  withSpacingsProps,
} from "@utils/styles";

export interface ICardContentProps extends IComponent, ISpacingsProps {
  children: React.ReactNode;
}

export const CardContent = ({
  children,
  rootClassName,
  rootStyles = {},
  ...spacingProps
}: ICardContentProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          card_content_container: true,
        },
        spacingProps
      ),
      rootClassName
    )
  );

  return (
    <div
      className={containerStyles}
      style={rootStyles}
      data-testid="card-content-root"
    >
      {children}
    </div>
  );
};
