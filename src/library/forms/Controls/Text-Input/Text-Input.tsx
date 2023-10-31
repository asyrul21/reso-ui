import React, { ChangeEvent } from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import { FormInputValidator, IFormInputProps } from "@interfaces/Form";

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

export interface ITextInputProps
  extends IComponent,
    IFormInputProps<string>,
    IThemeProps,
    IMarginProps {
  type?: "text" | "email" | "password" | "tel";
  placeholder?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  size?: number;
}

export const TextInput = ({
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
  type = "text",
  autocomplete = "off",
  placeholder,
  pattern,
  minLength,
  maxLength,
  size = 50,
  rootClassName,
  rootStyles = {},
  inputClassName,
  inputStyles = {},
  theme = "light",
  ...spacingsProps
}: ITextInputProps) => {
  // const handleInputError = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log("input error");
  //   console.log(e);
  //   e.preventDefault();
  // };

  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          form_input_container: true,
          input_text_container: true,
        },
        spacingsProps
      ),
      rootClassName
    )
  );

  const inputClasses = createComponentStyles(
    createLayoutStyles(
      {
        input_text: true,
        form_controls_input: true,
      },
      inputClassName,
      {
        disabled,
      }
    ),
    createThemeStyles(`input_text_theme_`, theme)
  );

  return (
    <div
      data-testid={`text-input-${id}`}
      className={containerClasses}
      style={rootStyles}
    >
      <input
        id={id}
        type={type}
        value={value ? value : ""}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        // onInvalid={onInvalid}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        autoFocus={autofocus}
        autoComplete={autocomplete}
        size={size}
        maxLength={maxLength}
        minLength={minLength}
        className={inputClasses}
        placeholder={placeholder}
        pattern={pattern}
        style={inputStyles}
      />
      {error && <p className="form_input_error">{error}</p>}
    </div>
  );
};
