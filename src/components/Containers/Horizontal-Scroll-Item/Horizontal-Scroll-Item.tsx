import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import { IPaddingProps, IMarginProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/Horizontal-Scroll-Item.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  withSpacingsProps,
} from "@utils/styles";

export interface IHSIProps extends IComponent, IPaddingProps, IMarginProps {
  children: React.ReactNode;
}

export const HorizontalScrollItem = ({
  children,
  rootClassName,
  rootStyles = {},
  ...spacingsProps
}: IHSIProps) => {
  const ItemStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          hsi_container: true,
        },
        spacingsProps
      ),
      rootClassName
    )
  );
  return (
    <div
      className={ItemStyles}
      style={rootStyles}
      data-testid="horizontal-scroll-item-root"
    >
      {children}
    </div>
  );
};
