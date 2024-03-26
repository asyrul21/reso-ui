import React from "react";
import Form from "../../../form/form/form";
import InputLabel from "../../../form/input-label/input-label";
import TextArea from "../../../form/text-area/text-area";
import SubmitButton from "../../../form/submit-button/submit-button";
import FlexContainer from "../../../component-containers/flex-container/flex-container";
import DropdownSelect from "../../../form/dropdown-select/dropdown-select";

const AddReviewForm = ({
  commentValue = "",
  ratingValue = 1,
  mode = "add", // or edit""
  onChangeText = (e) => {},
  onChangeDropdown = () => {},
  onClickSpanLink = () => {},
  onSubmit = () => {},
  hideRatingDropdown = false,
  formTitle = "Add a Review",
}) => {
  return (
    <Form
      className="component_addreviewform_container"
      onSubmit={() => {
        onSubmit();
      }}
    >
      <div className="component_addreviewform_header">{formTitle}</div>
      {!hideRatingDropdown && (
        <FlexContainer
          direction="row"
          justify="start"
          align="start"
          className="component_addreviewform_inputgroup dropdownContainer"
        >
          <InputLabel
            label="Rating"
            className="component_addreviewform_label"
            htmlFor="addReviewInput"
          />
          <DropdownSelect
            height="120px"
            options={[1, 2, 3, 4, 5]}
            value={ratingValue}
            onChange={(op) => {
              onChangeDropdown(op);
            }}
          />
        </FlexContainer>
      )}
      <FlexContainer
        direction="row"
        justify="start"
        align="start"
        className="component_addreviewform_inputgroup"
      >
        <InputLabel
          label="Comment"
          className="component_addreviewform_label"
          htmlFor="addReviewInput"
        />
        <TextArea
          id="addReviewInput"
          value={commentValue}
          inputClassName="component_addreviewform_input"
          maxLength="250"
          placeholder="Add your review here"
          onChange={(e) => {
            onChangeText(e);
          }}
        />
      </FlexContainer>

      <div className="component_addreviewform_button_container">
        {mode === "edit" && (
          <span
            className="component_addreviewform_fliplink"
            onClick={() => {
              onClickSpanLink();
            }}
          >
            Cancel
          </span>
        )}
        <SubmitButton
          className="button component_addreviewform_button no_select"
          value="Submit"
        />
      </div>
    </Form>
  );
};

export default AddReviewForm;
