import React from "react";
import classnames from "classnames";
import {
  IModalChildrenProps,
  IModalContainerProps,
  ModalContainer,
} from "../Modal";

// import base interface
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";

// !! IMPORT OTHER COMPONENTS FIRST BEFORE IMPORTING STYLE FILES
import { ModalHeader } from "../Modal/Modal-Header";
import { ModalBody } from "../Modal/Modal-Body";

// styles
import "./styles/Dialog.layout.scss";
import "./styles/Dialog.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "../../utils/styles";

import { methodHasValue, hasValue } from "../../utils/validations";
import { Button } from "../Buttons";

export type DialogType = "ok" | "yesNo";

export interface IDialog extends IModalChildrenProps, IComponent, IThemeProps {
  title?: string;
  header?: string;
  description?: string;
  type?: DialogType;
  yesText?: string;
  noText?: string;
  okText?: string;
  onClose?: () => void;
  onClickYes?: () => void;
  onClickNo?: () => void;
  onClickOk?: () => void;
  yesButtonClassName?: string;
  yesButtonStyles?: React.CSSProperties;
  noButtonClassName?: string;
  noButtonStyles?: React.CSSProperties;
  okButtonClassName?: string;
  okButtonStyles?: React.CSSProperties;
}

export const Dialog = ({
  isOpen = false,
  type = "yesNo",
  layer = 1,
  title = "Confirm",
  header = "Are you sure?",
  description = "",
  yesText = "Yes",
  noText = "No",
  okText = "OK",
  onClose, // nullable function
  onClickYes,
  onClickNo,
  onClickOk,
  rootClassName,
  rootStyles,
  yesButtonClassName,
  yesButtonStyles = {},
  noButtonClassName,
  noButtonStyles = {},
  okButtonClassName,
  okButtonStyles = {},
  theme = "light",
}: IDialog) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        dialog_container: true,
      },

      rootClassName
    ),
    createThemeStyles("dialog_container_theme_", theme)
  );

  const buttonsContainerClasses = createLayoutStyles(
    {
      dialog_buttons_container: true,
      dialog_buttons_container_yesNo: type === "yesNo",
    },
    null,
    {
      no_select: true,
    }
  );

  const yesButtonClasses = createComponentStyles(
    createLayoutStyles(
      {
        dialog_button_yes: true,
      },
      yesButtonClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles("dialog_button_yes_", theme)
  );

  const noButtonClasses = createComponentStyles(
    createLayoutStyles(
      {
        dialog_button_no: true,
      },
      noButtonClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles("dialog_button_no_", theme)
  );

  const okButtonClasses = createComponentStyles(
    createLayoutStyles(
      {
        dialog_button_ok: true,
      },
      okButtonClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles("dialog_button_ok_", theme)
  );

  return (
    <ModalContainer
      isOpen={isOpen}
      rootClassName={containerStyles}
      rootStyles={rootStyles}
      layer={layer}
      theme={theme}
      pa={5}
    >
      <ModalHeader
        title={title}
        onClose={() => {
          if (methodHasValue(onClose)) {
            onClose();
          }
        }}
        theme={theme}
      />
      <ModalBody>
        <p data-testid="dialog-header-text" className="dialog_header">
          {header}
        </p>
        {description && (
          <p
            data-testid="dialog-description-text"
            className="dialog_description"
          >
            {description}
          </p>
        )}
        <div
          data-testid="dialog-buttons-container"
          className={buttonsContainerClasses}
        >
          {type === "yesNo" ? (
            <>
              <Button
                rootClassName={noButtonClasses}
                rootStyles={noButtonStyles}
                onClick={() => {
                  if (methodHasValue(onClickNo)) {
                    onClickNo();
                  }
                }}
                text={noText}
              />
              <Button
                rootClassName={yesButtonClasses}
                rootStyles={yesButtonStyles}
                onClick={() => {
                  if (methodHasValue(onClickYes)) {
                    onClickYes();
                  }
                }}
                text={yesText}
              />
            </>
          ) : (
            <Button
              rootClassName={okButtonClasses}
              rootStyles={okButtonStyles}
              onClick={() => {
                if (methodHasValue(onClickOk)) {
                  onClickOk();
                }
              }}
              text={okText}
              inline
              inheritWidth
            />
          )}
        </div>
      </ModalBody>
    </ModalContainer>
  );
};
