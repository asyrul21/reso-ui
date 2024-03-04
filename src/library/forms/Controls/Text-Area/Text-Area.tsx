import React, { useEffect } from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import { IFormInputProps } from "../../../interfaces/Form";

// styles
import "../sharedStyles.scss";
import "./styles/Text-Area.layout.scss";
import "./styles/Text-Area.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";
import { validate } from "../../Validators";
import useInputValidatorsMemo from "../../Hooks/useInputValidatorsMemo";

export interface ITextAreaProps
  extends IComponent,
    IFormInputProps<string>,
    IThemeProps,
    IMarginProps {
  wrap?: "soft" | "hard";
  placeholder?: string;
  cols?: number;
  rows?: number;
  formId: string;
  minLength?: number;
  maxLength?: number;
  name?: string;
}

export const TextArea = ({
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
  /**
   * Text Area - specific props
   */
  wrap = "soft",
  placeholder,
  cols = 50,
  rows = 4,
  formId,
  minLength,
  maxLength = 255,
  name = "resoui_textarea_input",
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
}: ITextAreaProps) => {
  const inputValidators = useInputValidatorsMemo(
    "string",
    {
      required,
      minLength,
      maxLength,
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
          input_textarea_container: true,
        },
        spacingsProps
      ),
      rootClassName
    )
  );

  const inputClasses = createComponentStyles(
    createLayoutStyles(
      {
        textarea_input: true,
        textarea_input_focus_noshadow: noShadowOnFocus === true,
      },
      inputClassName,
      {
        disabled,
      }
    ),
    createThemeStyles(`textarea_input_theme_`, theme)
  );

  return (
    <div
      data-testid={`text-area-${id}-container`}
      className={containerClasses}
      style={rootStyles}
    >
      <textarea
        data-testid={`text-area-${id}-input`}
        wrap={wrap}
        id={id}
        value={value ? (value as string) : ""}
        onChange={handleInputChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onInvalid={handleInputInvalid}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        autoFocus={autofocus}
        rows={rows}
        form={formId}
        name={name}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        className={inputClasses}
        style={inputStyles}
      />
      {error && (
        <p data-testid={`text-area-${id}-error`} className="form_input_error">
          {error}
        </p>
      )}
    </div>
  );
};
