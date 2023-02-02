import React from "react";
import PopupContainer from "../../component-containers/popup-container/popup-container";

const ConfirmationDialog = ({
  isOpen = false,
  question = "Are you sure?",
  description = "",
  yesText = "Yes",
  noText = "No",
  onCloseDialog = null, // nullable function
  popupLayer = 1,
  popupTitle = "Confirm",
  onClickYes = () => {},
  onClickNo = () => {},
}) => {
  return (
    <PopupContainer
      isOpen={isOpen}
      className="component_confirmationdialog_container"
      onClose={onCloseDialog}
      layer={popupLayer}
      title={popupTitle}
    >
      <p className="component_confirmationdialog_header">{question}</p>
      {description && (
        <p className="component_confirmationdialog_desc">{description}</p>
      )}
      <div className="component_confirmationdialog_buttons_container">
        <div
          className="component_confirmationdialog_button_no"
          onClick={() => {
            onClickNo();
          }}
        >
          {noText}
        </div>
        <div
          className="component_confirmationdialog_button_yes"
          onClick={() => {
            onClickYes();
          }}
        >
          {yesText}
        </div>
      </div>
    </PopupContainer>
  );
};

export default ConfirmationDialog;
