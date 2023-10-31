import React, { ChangeEvent, memo, useEffect, useMemo, useState } from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import { FormInputValidator, IFormInputProps } from "@interfaces/Form";

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

import { methodHasValue, numberHasValue } from "@utils/validations";
import {
  numberIsLessThan,
  numberIsMoreThanOrEqualsTo,
  numberIsNotNull,
  numberIsRequired,
  stringIsNotNull,
  validate,
} from "@forms/Validators";

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
  showHTMLErrorMessage = false,
  error,
  setError,
  disabled = false,
  required = false,
  readonly = false,
  autofocus = false,
  autocomplete = "off",
  min = 0,
  max,
  step = "any",
  rootClassName,
  rootStyles = {},
  inputClassName,
  inputStyles = {},
  theme = "light",
  validators,
  ...spacingsProps
}: INumberInputProps) => {
  useDisableNumberInputScroll();
  const inputValidators = useMemo(() => {
    let defaultInputValidators = [numberIsNotNull];

    if (required) {
      defaultInputValidators = [...defaultInputValidators, numberIsRequired];
    }
    if (numberHasValue(min)) {
      defaultInputValidators = [
        ...defaultInputValidators,
        numberIsMoreThanOrEqualsTo(min),
      ];
    }
    if (numberHasValue(max)) {
      defaultInputValidators = [
        ...defaultInputValidators,
        numberIsLessThan(max),
      ];
    }

    // TODO: compose input validators
    // return composeInputValidators(inputValidators, validators)

    if (typeof validators === "object" && Array.isArray(validators)) {
      return [...defaultInputValidators, ...validators];
    } else if (typeof validators === "object") {
      return [...defaultInputValidators, validators];
    }
    return [...defaultInputValidators];
  }, []);

  // on render
  useEffect(() => {
    validate(value, inputValidators, setError);
  }, []);

  // const { validate } = useInputValidation<number>(inputValidators, setError)

  const handleInputChange = (e) => {
    const val = e.target.value;
    validate(val, inputValidators, setError);
    onChange(e.target.value);
  };

  const handleInputInvalid = (e) => {
    if (!showHTMLErrorMessage) {
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
      data-testid={`text-input-${id}`}
      className={containerClasses}
      style={rootStyles}
    >
      <input
        id={id}
        type="number"
        value={Number(value).toString()}
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
      {error && <p className="form_input_error">{error}</p>}
    </div>
  );
};
