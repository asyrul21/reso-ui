import React from "react";
import classnames from "classnames";

const ClickableButton = ({
  value,
  className,
  disabled,
  onClick = () => {},
}) => {
  const classes = classnames({
    button: true,
    component_clickablebutton: true,
    [`${className}`]: true,
  });

  return (
    <button
      type="submit"
      className={classes}
      disabled={disabled}
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
};

export default ClickableButton;
