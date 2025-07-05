import React from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IPaddingProps } from "../../../interfaces/ISpacingsProps";

// styles
import "./styles/Modal-Container.layout.scss";
import "./styles/Modal-Container.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";
import { useDisableBodyScroll } from "../../../hooks/useDisableBodyScroll";

export interface IModalContainerProps
  extends IComponent,
    IThemeProps,
    IPaddingProps {
  children: React.ReactNode;
  isOpen: boolean;
  layer?: number;
}

export interface IModalChildrenProps
  extends Omit<IModalContainerProps, "children"> {}

export const ModalContainer = ({
  children,
  isOpen = false,
  layer = 1,
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...paddingProps
}: IModalContainerProps) => {
  useDisableBodyScroll(isOpen);

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          modal_container: true,
        },
        paddingProps
      ),
      rootClassName
    ),
    createThemeStyles("modal_container_theme_", theme)
  );

  const computedZIndex = layer + 10;

  return (
    <div
      className="modal_backdrop"
      style={{
        zIndex: computedZIndex,
      }}
      data-testid="modal-backdrop"
    >
      <div
        className={containerStyles}
        style={{
          zIndex: computedZIndex + 1,
          ...rootStyles,
        }}
        data-testid="modal-container-root"
      >
        {children}
      </div>
    </div>
  );
};
