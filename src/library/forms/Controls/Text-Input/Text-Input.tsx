import React, { useEffect } from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import { IFormInputProps } from "../../../interfaces/Form";

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
} from "../../../utils/styles";
import { validate } from "../../Validators";
import useInputValidatorsMemo from "../../Hooks/useInputValidatorsMemo";

export interface ITextInputProps
  extends IComponent,
    IFormInputProps<string>,
    IThemeProps,
    IMarginProps {
  type?: "text" | "email" | "password" | "tel";
  placeholder?: string;
  pattern?: RegExp | string;
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
  useHTMLErrorMessage = false,
  noShadowOnFocus = false,
  validateOnLoad,
  error,
  setError,
  disabled = false,
  required = false,
  readonly = false,
  autofocus = false,
  type = "text",
  /**
   * Text Input - specific props
   */
  autocomplete = "off",
  placeholder,
  pattern,
  minLength,
  maxLength,
  size = 50, // width
  /**
   * Inherited props
   */
  rootClassName,
  rootStyles = {},
  inputClassName,
  inputStyles = {},
  theme = "light",
  customValidators = [],
  ...spacingsProps
}: ITextInputProps) => {
  const inputValidators = useInputValidatorsMemo(
    "string",
    {
      required,
      minLength,
      maxLength,
      isEmail: type === "email",
      isTel: type === "tel",
      pattern,
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
          input_textfield_container: true,
        },
        spacingsProps
      ),
      rootClassName
    )
  );

  const inputClasses = createComponentStyles(
    createLayoutStyles(
      {
        input_textarea: true,
        form_controls_input: true,
        form_controls_focus_noshadow: noShadowOnFocus === true,
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
      data-testid={`text-input-${id}-container`}
      className={containerClasses}
      style={rootStyles}
    >
      <input
        data-testid={`text-input-${id}-input`}
        id={id}
        type={type}
        value={value ? (value as string) : ""}
        onChange={handleInputChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onInvalid={handleInputInvalid}
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
        pattern={
          pattern && typeof pattern.toString === "function"
            ? pattern.toString()
            : (pattern as string)
        }
        style={inputStyles}
      />
      {error && (
        <p data-testid={`text-input-${id}-error`} className="form_input_error">
          {error}
        </p>
      )}
    </div>
  );
};
