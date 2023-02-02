import React from "react";
import classnames from "classnames";
import { useDisableNumberInputScroll } from "../../../hooks/fields";

const InputField = ({
  type = "text", // can be anything except file
  value = "",
  id = "inputComponent",
  onChange = () => {},
  disabled = false,
  placeholder,
  pattern = null,
  minLength = null,
  min = 0,
  step = "any",
  max = null,
  required = false,
  inputClassName,
}) => {
  useDisableNumberInputScroll();

  const inputClasses = classnames({
    input_text: true,
    component_inputfield_input: true,
    [inputClassName]: true,
  });

  return (
    <input
      id={id}
      type={type === "file" ? "text" : type}
      value={
        type === "number"
          ? value !== null && value !== ""
            ? value
            : 0
          : value
          ? value
          : ""
      }
      min={min}
      max={max}
      step={step}
      minLength={minLength}
      required={required}
      className={inputClasses}
      placeholder={placeholder}
      pattern={pattern}
      disabled={disabled || type === "file"}
      onChange={(e) => {
        onChange(e);
      }}
    ></input>
  );
};

export default InputField;
