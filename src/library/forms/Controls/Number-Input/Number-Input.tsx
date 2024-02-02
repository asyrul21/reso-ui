import React, { ChangeEvent, memo, useEffect, useMemo, useState } from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import { IFormInputProps } from "../../../interfaces/Form";

// styles
import "../sharedStyles.scss";
import "./styles/Number-Input.layout.scss";
import "./styles/Number-Input.theme.scss";

// utils
import { useDisableNumberInputScroll } from "../../Hooks/useDisableNumberInputScroll";
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";

// validation
import { validate } from "../../Validators";
import useInputValidatorsMemo from "../../Hooks/useInputValidatorsMemo";

export interface INumberInputProps
  extends IComponent,
    IFormInputProps<number>,
    IThemeProps,
    IMarginProps {
  min?: number;
  max?: number;
  step?: number | "any";
}

export const NumberInput = ({
  id = null,
  value,
  onChange,
  onBlur,
  onFocus,
  useHTMLErrorMessage = false,
  validateOnLoad = false,
  error,
  setError,
  disabled = false,
  required = false,
  readonly = false,
  autofocus = false,
  autocomplete = "off",
  /**
   * Number Input - specific props
   */
  min = 0,
  max,
  step = "any",
  /**
   * Number Input - specific props ends
   */
  rootClassName,
  rootStyles = {},
  inputClassName,
  inputStyles = {},
  theme = "light",
  customValidators = [],
  ...spacingsProps
}: INumberInputProps) => {
  useDisableNumberInputScroll();
  const inputValidators = useInputValidatorsMemo(
    "number",
    {
      required,
      min,
      max,
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
    const val = e.target.value;
    validate(val, inputValidators, setError);
    onChange(Number(val));
  };

  const handleInputInvalid = (e) => {
    if (!useHTMLErrorMessage) {
      e.preventDefault();
    }
  };

  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          form_input_container: true,
          input_number_container: true,
        },
        spacingsProps
      ),
      rootClassName
    )
  );

  const inputClasses = createComponentStyles(
    createLayoutStyles(
      {
        input_number: true,
        form_controls_input: true,
      },
      inputClassName,
      {
        disabled,
        no_select: true,
      }
    ),
    createThemeStyles(`input_number_theme_`, theme)
  );

  return (
    <div
      data-testid={`number-input-${id}-container`}
      className={containerClasses}
      style={rootStyles}
    >
      <input
        id={id}
        data-testid={`number-input-${id}-input`}
        type="number"
        value={Number(value).toString()} // if "" do not cast to numberZ ;"≥
        onChange={handleInputChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onInvalid={handleInputInvalid}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        autoFocus={autofocus}
        autoComplete={autocomplete}
        max={max}
        min={min}
        step={step}
        className={inputClasses}
        style={inputStyles}
      />
      {error && (
        <p
          data-testid={`number-input-${id}-error`}
          className="form_input_error"
        >
          {error}
        </p>
      )}
    </div>
  );
};
