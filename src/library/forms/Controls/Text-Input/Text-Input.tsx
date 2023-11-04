import React, { useEffect } from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import { IFormInputProps } from "@interfaces/Form";

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
import {
  stringHasMaxLength,
  stringHasMinLength,
  stringIsNotNull,
  stringIsRequired,
  validate,
} from "@forms/Validators";
import { numberHasValue } from "@utils/validations";
import useInputValidatorsMemo from "@forms/Hooks/useInputValidatorsMemo";

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
  size = 50,
  /**
   * Text Input - specific props
   */
  rootClassName,
  rootStyles = {},
  inputClassName,
  inputStyles = {},
  theme = "light",
  customValidators,
  ...spacingsProps
}: ITextInputProps) => {
  // const handleInputError = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log("input error");
  //   console.log(e);
  //   e.preventDefault();
  // };
  // const inputValidators = useMemo(() => {
  //   let defaultInputValidators = [stringIsNotNull];

  //   if (required) {
  //     defaultInputValidators = [...defaultInputValidators, stringIsRequired];
  //   }
  //   if (numberHasValue(minLength)) {
  //     defaultInputValidators = [
  //       ...defaultInputValidators,
  //       stringHasMinLength(minLength),
  //     ];
  //   }
  //   if (numberHasValue(maxLength)) {
  //     defaultInputValidators = [
  //       ...defaultInputValidators,
  //       stringHasMaxLength(maxLength),
  //     ];
  //   }

  //   // check for pattern

  //   // check for size

  //   // TODO: compose input validators
  //   // return composeInputValidators(inputValidators, validators)

  //   if (typeof validators === "object" && Array.isArray(validators)) {
  //     return [...defaultInputValidators, ...validators];
  //   } else if (typeof validators === "object") {
  //     return [...defaultInputValidators, validators];
  //   }
  //   return [...defaultInputValidators];
  // }, []);

  const inputValidators = useInputValidatorsMemo(
    "string",
    [stringIsNotNull],
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
      {error && <p className="form_input_error">{error}</p>}
    </div>
  );
};
