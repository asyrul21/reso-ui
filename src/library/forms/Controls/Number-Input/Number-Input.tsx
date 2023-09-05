import React, { ChangeEvent } from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import { IFormInputProps } from "@interfaces/Form";

// styles
import "../sharedStyles.scss";
import "./styles/Number-Input.layout.scss";
import "./styles/Number-Input.theme.scss";

// utils
import { useDisableNumberInputScroll } from "@forms/Hooks/useDisableNumberInputScroll";
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";

import { methodHasValue } from "@utils/validations";

export interface INumberInputProps
  extends IComponent,
    IFormInputProps,
    IThemeProps,
    IMarginProps {
  min?: number;
  max?: number;
  step?: number;
}

export const NumberInput = ({
  id = null,
  value,
  onChange,
  onBlur,
  onFocus,
  onInvalid,
  disabled = false,
  required = false,
  readonly = false,
  autofocus = false,
  autocomplete = "off",
  error,
  min = 0,
  max,
  step,
  rootClassName,
  rootStyles = {},
  inputClassName,
  inputStyles = {},
  theme = "light",
  ...spacingsProps
}: INumberInputProps) => {
  useDisableNumberInputScroll();
  const handleInputError = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("input error");
    // console.log(e);
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
      data-testid={`text-input-${id}`}
      className={containerClasses}
      style={rootStyles}
    >
      <input
        id={id}
        type="number"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onInvalid={onInvalid}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        autoFocus={autofocus}
        autoComplete={autocomplete}
        max={max}
        min={min}
        step={step}
        className={inputClasses}
        // onError={handleInputError}
        style={inputStyles}
      />
      {error && <p className="form_input_error">{error}</p>}
    </div>
  );
};
