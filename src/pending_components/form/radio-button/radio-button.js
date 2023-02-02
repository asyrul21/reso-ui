import React from "react";

const RadioButton = ({
  id = "radioInputComponent",
  value = "",
  options = [],
  name,
  onChange = () => {},
  disabled = false,
  required = false,
}) => {
  return (
    <div className="component_radiobutton_radio_container" id={id}>
      {options.map((op, key) => (
        <div key={key} className="component_radiobutton_radio_item">
          <label htmlFor={op} className="component_radiobutton_text">
            {op}
          </label>
          <input
            type="radio"
            disabled={disabled}
            required={required}
            id={op}
            value={op}
            name={name}
            checked={value === op}
            onChange={() => {
              onChange(op);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
