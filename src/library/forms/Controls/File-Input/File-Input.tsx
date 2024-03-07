import React, { useEffect } from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import { IFormInputProps } from "../../../interfaces/Form";

// styles
import "../sharedStyles.scss";
import "./styles/File-Input.layout.scss";
import "./styles/File-Input.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";
import { validate } from "../../Validators";
import useInputValidatorsMemo from "../../Hooks/useInputValidatorsMemo";

export interface IFileInputProps
  extends IComponent,
    Omit<
      IFormInputProps<string>,
      | "value"
      | "onChange"
      | "type"
      | "autocomplete"
      | "inputClassName"
      | "inputStyles"
    >,
    IThemeProps,
    IMarginProps {
  selectedFilePath?: string;
  accept?: string;
  multiple?: boolean;
  onFileChange?: (file: File) => void;
  onReset?: () => void;
  labelText?: string;
  placeholder?: string;
  textInputClassName?: string;
  textInputStyles?: React.CSSProperties;
  fileInputClassName?: string;
  fileInputStyles?: React.CSSProperties;
  resetButtonClassName?: string;
  resetButtonStyles?: React.CSSProperties;
  //   type?: "text" | "email" | "password" | "tel";
  //   placeholder?: string;
  //   pattern?: RegExp | string;
  //   minLength?: number;
  //   maxLength?: number;
  //   size?: number;
}

export const FileInput = ({
  id = "resoui_file_input",
  onBlur,
  onFocus,
  useHTMLErrorMessage = false,
  noShadowOnFocus = false,
  validateOnLoad,
  error,
  setError,
  disabled,
  required,
  readonly,
  /**
   * File Input - specific props
   */
  selectedFilePath,
  accept, // ".jpg, .jpeg, .png"
  multiple = false,
  onFileChange,
  onReset,
  labelText = "Select",
  placeholder = "Select a file",
  /**
   * Inherited props
   */
  rootClassName,
  rootStyles = {},
  textInputClassName,
  textInputStyles = {},
  fileInputClassName,
  fileInputStyles = {},
  resetButtonClassName,
  resetButtonStyles = {},
  theme = "light",
  customValidators = [],
  ...spacingsProps
}: IFileInputProps) => {
  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          form_input_container: true,
          fileinput_wrapper: true,
        },
        spacingsProps
      ),
      rootClassName
    )
  );

  const textInputClasses = createComponentStyles(
    createLayoutStyles(
      {
        fileinput_textinput: true,
        form_controls_input: true,
        form_controls_focus_noshadow: noShadowOnFocus === true,
      },
      textInputClassName,
      {
        disabled,
      }
    ),
    createThemeStyles(`fileinput_textinput_theme_`, theme)
  );

  const fileInputClasses = createComponentStyles(
    createLayoutStyles(
      {
        fileinput_fileinput: true,
      },
      fileInputClassName,
      {
        disabled,
        no_select: true,
      }
    ),
    createThemeStyles(`fileinput_fileinput_theme_`, theme)
  );

  const resetButtonClasses = createComponentStyles(
    createLayoutStyles(
      {
        fileinput_reset_button: true,
      },
      resetButtonClassName,
      {
        disabled: disabled || !selectedFilePath,
        no_select: true,
      }
    ),
    createThemeStyles(`fileinput_resetbtn_theme_`, theme)
  );

  return (
    <div
      data-testid={`file-input-${id}-wrapper`}
      className={containerClasses}
      style={rootStyles}
    >
      <div className="resoui_fileinput_row">
        <input
          id={id}
          type="text"
          value={selectedFilePath}
          required={required}
          readOnly
          className={textInputClasses}
          placeholder={placeholder}
          disabled
        ></input>
        <label className={fileInputClasses}>
          <input
            type="file"
            style={{ display: "none" }}
            disabled={disabled}
            accept={accept}
            multiple={multiple}
            onChange={(event) => {
              if (event && event.target && event.target.files[0]) {
                // if (validateInput(event)) {
                //   setTempFileName(event.target.files[0].name);
                //   onFileChange(event);
                //   setFileChanged(true);
                // }
              }
            }}
          ></input>
          {labelText}
        </label>
        <button
          className={resetButtonClasses}
          onClick={() => {
            // setTempFileName(value || "");
            // setInputError(null);
            // setFileChanged(false);
            // onReset();
          }}
          // disabled={!tempFileName || !fileChanged}
          disabled={!selectedFilePath}
        >
          Reset
        </button>
      </div>
      {error && (
        <p data-testid={`file-input-${id}-error`} className="form_input_error">
          {error}
        </p>
      )}
    </div>
  );
};
