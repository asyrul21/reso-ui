import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IPaddingProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/Modal.layout.scss";
import "./styles/Modal.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";
import useDisableBodyScroll from "@hooks/useDisableBodyScroll";

export interface IModalProps extends IComponent, IThemeProps, IPaddingProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  layer?: number;
  modalClassName?: string;
  modalStyles?: React.CSSProperties;
}

export const Modal = ({
  children,
  onClose,
  isOpen = false,
  layer = 1,
  title = "Modal",
  className,
  modalClassName,
  styles = {},
  modalStyles = {},
  theme = "light",
  ...paddingProps
}: IModalProps) => {
  useDisableBodyScroll(isOpen);

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        modal_container: true,
      },
      className
    ),
    createThemeStyles("modal_container_theme_", theme)
  );

  const headingStyles = createComponentStyles(
    createLayoutStyles(
      {
        modal_heading: true,
      },
      className
    ),
    createThemeStyles("modal_heading_theme_", theme)
  );

  const closeButtonClasses = createComponentStyles(
    createLayoutStyles({
      button_text: true,
      no_select: true,
      modal_closeButton: true,
    }),
    createThemeStyles("modal_closeButton_theme_", theme)
  );

  const modalClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          modal_modal: true,
        },
        paddingProps
      ),
      modalClassName,
      {
        width_full: true,
        position_relative: true,
      }
    )
  );

  const computedZIndex = layer + 10;
  return (
    <div
      className="modal_backdrop"
      style={{
        zIndex: computedZIndex,
      }}
    >
      <div
        className={containerStyles}
        style={{
          zIndex: computedZIndex + 1,
          ...styles,
        }}
      >
        <div className={headingStyles}>
          <span className="sub_heading no_select">{title}</span>
          <div className={closeButtonClasses} onClick={onClose} role="button">
            Close
          </div>
        </div>
        <div className={modalClasses} style={modalStyles}>
          {children}
        </div>
      </div>
    </div>
  );
};
