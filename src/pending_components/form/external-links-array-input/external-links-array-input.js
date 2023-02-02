import React, { useState } from "react";
import classnames from "classnames";
import FlexContainer from "../../component-containers/flex-container/flex-container";
import InputLabel from "../input-label/input-label";
import InputField from "../input-field/input-field";
import GenericButton from "../../buttons/generic-button/generic-button";
import PrimaryButton from "../../buttons/primary-button/primary-button";

const ExternalLinksArrayInput = ({
  className,
  topLevelFormValuesChanged,
  setTopLevelFormValuesChanged,
  id,
  links,
  getSelectedObject,
  selectedObjIndex,
  setSelectedObjectIndex,
  addToArray,
  removeFromArray,
  updateArrayObject,
  resetSelectedObjectIndex,
  restoreInitialObjects,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [showForm, setShowFrom] = useState(false);
  const [newObjText, setNewObjText] = useState("");
  const [newObjLink, setNewObjLink] = useState("");

  const containerClasses = classnames({
    container_externalLinksArrayForm_container: true,
    [className]: className !== null && className !== undefined,
  });

  const resetFormValues = () => {
    setNewObjText("");
    setNewObjLink("");
  };

  return (
    <div id={id} className={containerClasses}>
      {links &&
        links.length > 0 &&
        links.map((linkObject, idx) => {
          const objectIsSelected =
            selectedObjIndex !== null && selectedObjIndex === idx;

          const objectClasses = classnames({
            container_externalLinksArrayForm_objectContainer: true,
            container_externalLinksArrayForm_objectContainer_selected:
              objectIsSelected,
          });
          return (
            <div className={objectClasses} key={`external-links-object-${idx}`}>
              <FlexContainer
                direction="row"
                justify="start"
                align="center"
                className="component_externalLinksArrayForm_input_group"
              >
                <InputLabel
                  label="Text"
                  htmlFor={`product-externalLink-text-input-${idx}`}
                />
                <InputField
                  id={`product-externalLink-text-input-${idx}`}
                  type="text"
                  value={linkObject.text}
                  onChange={(e) => {
                    setTopLevelFormValuesChanged(true);
                    if (editMode && objectIsSelected) {
                      updateArrayObject(selectedObjIndex, {
                        text: e.target.value,
                      });
                    }
                  }}
                  disabled={!objectIsSelected}
                />
              </FlexContainer>
              <FlexContainer
                direction="row"
                justify="start"
                align="center"
                className="component_externalLinksArrayForm_input_group"
              >
                <InputLabel
                  label="Link"
                  htmlFor={`product-externalLink-link-input-${idx}`}
                />
                <InputField
                  id={`product-externalLink-link-input-${idx}`}
                  type="text"
                  value={linkObject.link}
                  onChange={(e) => {
                    setTopLevelFormValuesChanged(true);
                    if (editMode && objectIsSelected) {
                      updateArrayObject(selectedObjIndex, {
                        link: e.target.value,
                      });
                    }
                  }}
                  disabled={!objectIsSelected}
                />
              </FlexContainer>
              <FlexContainer
                direction="row"
                justify="end"
                align="center"
                className="component_externalLinksArrayForm_input_group container_externalLinksArrayForm_buttonsContainer"
              >
                <GenericButton
                  text="Edit"
                  onClick={() => {
                    resetFormValues();
                    setSelectedObjectIndex(idx);
                    setEditMode(true);
                    setShowFrom(false);
                  }}
                  disabled={objectIsSelected}
                  className="component_externalLinksArrayForm_button_left"
                />
                <GenericButton
                  text="Delete"
                  onClick={() => {
                    removeFromArray(idx);
                    setTopLevelFormValuesChanged(true);
                  }}
                  className="component_externalLinksArrayForm_button"
                />
              </FlexContainer>
            </div>
          );
        })}
      {/* NEW FORM */}
      {showForm && (
        <div className="container_externalLinksArrayForm_objectContainer">
          <FlexContainer
            direction="row"
            justify="start"
            align="center"
            className="component_externalLinksArrayForm_input_group"
          >
            <InputLabel
              label="Text"
              htmlFor={`product-externalLink-text-input-new`}
            />
            <InputField
              id={`product-externalLink-text-input-new`}
              type="text"
              value={newObjText}
              onChange={(e) => {
                setNewObjText(e.target.value);
              }}
            />
          </FlexContainer>
          <FlexContainer
            direction="row"
            justify="start"
            align="center"
            className="component_externalLinksArrayForm_input_group"
          >
            <InputLabel
              label="Link"
              htmlFor={`product-externalLink-link-input-new`}
            />
            <InputField
              id={`product-externalLink-link-input-new`}
              type="text"
              value={newObjLink}
              onChange={(e) => {
                setNewObjLink(e.target.value);
              }}
            />
          </FlexContainer>
          <FlexContainer
            direction="row"
            justify="end"
            align="center"
            className="component_externalLinksArrayForm_input_group container_externalLinksArrayForm_buttonsContainer"
          >
            <PrimaryButton
              text="Add"
              disabled={
                !newObjLink ||
                newObjLink === "" ||
                !newObjText ||
                newObjText === ""
              }
              onClick={() => {
                addToArray({
                  text: newObjText,
                  link: newObjLink,
                });
                setTopLevelFormValuesChanged(true);
                resetFormValues();
                resetSelectedObjectIndex();
                setEditMode(false);
                setShowFrom(false);
              }}
              //   disabled={objectIsSelected}
              className="component_externalLinksArrayForm_button"
            />
          </FlexContainer>
        </div>
      )}
      <GenericButton
        className="component_externalLinksArrayForm_input_group"
        fullWidth
        text={showForm ? "Done" : "Add New"}
        onClick={() => {
          resetFormValues();
          resetSelectedObjectIndex();
          setEditMode(false);
          setShowFrom(!showForm);
        }}
      />
      {links && links.length > 0 && topLevelFormValuesChanged && (
        <GenericButton
          className="component_externalLinksArrayForm_input_group"
          fullWidth
          text={"Reset All"}
          onClick={() => {
            resetFormValues();
            resetSelectedObjectIndex();
            setEditMode(false);
            setShowFrom(false);
            restoreInitialObjects();
          }}
        />
      )}
    </div>
  );
};

export default ExternalLinksArrayInput;
