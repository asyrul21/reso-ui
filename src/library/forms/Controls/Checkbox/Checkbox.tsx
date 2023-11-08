import React, { useEffect } from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import { IFormInputProps } from "@interfaces/Form";

// styles
import "../sharedStyles.scss";
import "./styles/Checkbox.layout.scss";
import "./styles/Checkbox.theme.scss";

import useInputValidatorsMemo from "@forms/Hooks/useInputValidatorsMemo";
import { validate } from "@forms/Validators";
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";

export interface ICheckboxInputProps
  extends IComponent,
    IFormInputProps<boolean>,
    IThemeProps,
    IMarginProps {
  children?: React.ReactNode;
}

export const Checkbox = ({
  id = null,
  children,
  value,
  onChange,
  onBlur,
  onFocus,
  useHTMLErrorMessage = false,
  validateOnLoad,
  error,
  setError,
  disabled = false,
  required = false,
  readonly = false,
  autofocus = false,
  rootClassName,
  rootStyles = {},
  inputClassName,
  inputStyles = {},
  theme = "light",
  customValidators = [],
  ...spacingsProps
}: ICheckboxInputProps) => {
  const inputValidators = useInputValidatorsMemo(
    "boolean",
    {
      required,
    },
    customValidators
  );

  // on render
  useEffect(() => {
    if (validateOnLoad) {
      validate(value, inputValidators, setError);
    }
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.checked;
    validate(val, inputValidators, setError);
    onChange(val);
  };

  const handleInputInvalid = (e) => {
    if (!useHTMLErrorMessage) {
      e.preventDefault();
      validate(value, inputValidators, setError);
    }
  };

  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          form_input_container: true,
          checkbox_container: true,
        },
        spacingsProps
      ),
      rootClassName
    ),
    createThemeStyles(`checkbox_theme_`, theme)
  );

  const inputClasses = createComponentStyles(
    createLayoutStyles(
      {
        input_text: true,
        form_controls_input: true,
        input_checkbox: true,
      },
      inputClassName,
      {
        disabled,
      }
    )
  );

  return (
    <div
      className={containerClasses}
      style={rootStyles}
      data-testid={`checkbox-${id}-container`}
    >
      <input
        data-testid={`checkbox-${id}-input`}
        id={id}
        type="checkbox"
        checked={value as boolean}
        onChange={handleInputChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onInvalid={handleInputInvalid}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        autoFocus={autofocus}
        className={inputClasses}
        style={inputStyles}
      />
      <div className="checkbox_right_container">
        {children && <div className="checkbox_children">{children}</div>}
        {error && (
          <p
            data-testid={`checkbox-${id}-error`}
            className="form_input_error checkbox_error"
          >
            {error}
          </p>
        )}
      </div>
      {/* <div className="component_checkbox_children">{children}</div> */}
    </div>
  );
};
