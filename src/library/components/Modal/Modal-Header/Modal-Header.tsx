import React from "react";

import { Button } from "../../Buttons/Button";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";

// styles
import "./styles/Modal-Header.layout.scss";
import "./styles/Modal-Header.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "../../../utils/styles";

export interface IModalHeaderProps extends IComponent, IThemeProps {
  title: string;
  onClose: () => void;
}

export const ModalHeader = ({
  onClose,
  title = "Modal",
  rootClassName,
  rootStyles = {},
  theme = "light",
}: IModalHeaderProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        modal_header: true,
      },
      rootClassName
    ),
    createThemeStyles("modal_header_theme_", theme)
  );

  const closeButtonClasses = createComponentStyles(
    createLayoutStyles({
      modal_header_closeButton: true,
    }),
    createThemeStyles("modal_closeButton_theme_", theme)
  );

  return (
    <div
      className={containerStyles}
      style={rootStyles}
      data-testid="modal-header-root"
    >
      <span className="sub_heading no_select" data-testid="modal-header-title">
        {title}
      </span>
      <Button
        text="Close"
        onClick={onClose}
        rootClassName={closeButtonClasses}
      />
    </div>
  );
};
