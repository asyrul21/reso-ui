import React from "react";

const CheckBox = ({
  checked,
  onChange = () => {},
  required,
  children,
  id,
  disabled = false,
  style = {},
}) => {
  return (
    <div style={{ ...style }} className="component_checkbox_container">
      <input
        id={id}
        type="checkbox"
        disabled={disabled}
        required={required}
        checked={checked ? checked : false}
        className="component_checkbox_checkbox"
        onChange={(event) => {
          onChange(event);
        }}
      />
      <div className="component_checkbox_children">{children}</div>
    </div>
  );
};

export default CheckBox;
