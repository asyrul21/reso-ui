import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import { IPaddingProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/Modal-Body.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  withSpacingsProps,
} from "@utils/styles";

export interface IModalBodyProps extends IComponent, IPaddingProps {
  children: React.ReactNode;
}

export const ModalBody = ({
  children,
  rootClassName,
  rootStyles = {},
  ...paddingProps
}: IModalBodyProps) => {
  const modalClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          modal_body: true,
        },
        paddingProps
      ),
      rootClassName,
      {
        width_full: true,
        position_relative: true,
      }
    )
  );

  console.log(modalClasses);

  return (
    <div
      className={modalClasses}
      style={rootStyles}
      data-testid="modal-body-root"
    >
      {children}
    </div>
  );
};
