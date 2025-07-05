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
import {
  methodHasValue,
  stringHasValue,
  stringIsValidAccept,
} from "../../../utils/validations";

export const ACCEPT_STRING_REGEX =
  /^((((([*]|\w+)\/([*]|\w+))|(\.\w+)),?\s*)+)$/;

export interface IFileInputProps
  extends IComponent,
    Omit<
      IFormInputProps<File>,
      | "type"
      | "autocomplete"
      | "inputClassName"
      | "inputStyles"
      | "validateOnLoad"
      | "autofocus"
      | "useHTMLErrorMessage"
    >,
    IThemeProps,
    IMarginProps {
  selectedFile?: File;
  accept?: string;
  multiple?: boolean;
  onReset?: () => void;
  filterExtensionsInUsersFileExplorer?: boolean;
  labelText?: string;
  placeholder?: string;
  textInputClassName?: string;
  textInputStyles?: React.CSSProperties;
  fileInputClassName?: string;
  fileInputStyles?: React.CSSProperties;
  resetButtonClassName?: string;
  resetButtonStyles?: React.CSSProperties;
  _resoui_fileinput_input_styles?: React.CSSProperties; // for unit testing only
}

export const FileInput = ({
  id = "resoui_file_input",
  onBlur,
  onFocus,
  noShadowOnFocus = false,
  error,
  setError,
  disabled,
  required,
  readonly,
  /**
   * File Input - specific props
   */
  value = "",
  onChange,
  accept,
  /**
   * accepteable values:
   *
   * "image/png"
   *
   * ".png"
   *
   * "image/png, image/jpeg", ".png, .jpg, .jpeg"
   *
   */
  multiple = false,
  onReset,
  filterExtensionsInUsersFileExplorer = true,
  labelText = "Select",
  placeholder = "Select a file",
  selectedFile,
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
  _resoui_fileinput_input_styles = {}, // for unit testing only
  theme = "light",
  customValidators = [],
  ...spacingsProps
}: IFileInputProps) => {
  if (stringHasValue(accept) && !stringIsValidAccept(accept)) {
    throw new Error(
      "Invalid string value passed to [accept] property of FileInput component."
    );
  }

  const inputValidators = useInputValidatorsMemo<File>(
    "file",
    {
      required,
      accept,
    },
    customValidators
  );

  useEffect(() => {
    validate(selectedFile, inputValidators, setError);
  }, [selectedFile, error]);

  const handleInputChange = (e) => {
    if (e.target?.files[0]) {
      const file = e.target.files[0];
      onChange(file);
    }
  };

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
        disabled: disabled || !stringHasValue(value),
        no_select: true,
      }
    ),
    createThemeStyles(`fileinput_resetbtn_theme_`, theme)
  );

  return (
    <div
      data-testid={`file-input-${id}-root`}
      className={containerClasses}
      style={rootStyles}
    >
      <div className="resoui_fileinput_row">
        <input
          data-testid="file-input-text-input"
          id={`resoui-file-input-textinput-${id}`}
          type="text"
          value={String(value)}
          readOnly
          className={textInputClasses}
          placeholder={placeholder}
          disabled
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <label
          role="input"
          className={fileInputClasses}
          htmlFor={`resoui-file-input-fileinput-${id}`}
        >
          <input
            data-testid="file-input-input"
            id={`resoui-file-input-fileinput-${id}`}
            name={id}
            type="file"
            value=""
            className="_resoui_fileinput_input"
            style={_resoui_fileinput_input_styles}
            disabled={disabled}
            accept={filterExtensionsInUsersFileExplorer ? accept : undefined}
            multiple={multiple}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
          {labelText}
        </label>
        <button
          data-testid="file-input-reset-button"
          type="button"
          className={resetButtonClasses}
          onClick={(e) => {
            e.preventDefault();
            if (methodHasValue(onReset)) {
              onReset();
            }
          }}
          disabled={!stringHasValue(value)}
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
