import React, { ChangeEvent } from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import { IFormInputProps } from "@components/Form/Form-Types";

// styles
import "../sharedStyles.scss";
import "./styles/Text-Input.layout.scss";
import "./styles/Text-Input.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";

import { methodHasValue } from "@utils/validations";

export interface ITextInputProps
  extends IComponent,
    IFormInputProps,
    IThemeProps,
    IMarginProps {
  placeholder?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  readonly?: boolean;
}

export const TextInput = ({
  id = null,
  value,
  onChange,
  disabled = false,
  required = false,
  readonly = false,
  placeholder,
  pattern,
  minLength,
  maxLength,
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...spacingsProps
}: ITextInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (methodHasValue(onChange)) {
      onChange(e);
    }
  };

  const handleInputError = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("input error");
    // console.log(e);
  };

  const inputClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          input_text_container: true,
          input_text: true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        disabled,
        no_select: true,
      }
    ),
    createThemeStyles(`input_text_theme_`, theme)
  );

  return (
    <input
      id={id}
      readOnly={readonly}
      type="text"
      value={value ? value : ""}
      maxLength={maxLength}
      minLength={minLength}
      required={required}
      className={inputClasses}
      placeholder={placeholder}
      pattern={pattern}
      disabled={disabled}
      onChange={handleInputChange}
      onError={handleInputError}
      style={rootStyles}
    />
  );
};
