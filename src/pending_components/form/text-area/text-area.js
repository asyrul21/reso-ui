import React from "react";
import classnames from "classnames";

const TextArea = ({
  inputClassName,
  id = "inputTextArea",
  required,
  placeholder,
  text,
  rows = "4",
  cols = "50",
  value = "",
  disabled = false,
  maxLength = "250",
  onChange = () => {},
}) => {
  const textareaClasses = classnames({
    component_textarea_input: true,
    [inputClassName]: true,
  });

  return (
    <textarea
      id={id}
      required={required}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      value={value ? value : ""}
      className={textareaClasses}
      onChange={(e) => {
        onChange(e);
      }}
      disabled={disabled}
      maxLength={maxLength}
    >
      {text}
    </textarea>
  );
};

export default TextArea;
