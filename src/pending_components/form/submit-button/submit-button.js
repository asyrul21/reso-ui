import React from "react";
import classnames from "classnames";

const SubmitButton = ({ value, className, disabled }) => {
  const classes = classnames({
    button: true,
    component_submitbutton: true,
    [`${className}`]: true,
  });

  return (
    <button type="submit" className={classes} disabled={disabled}>
      {value}
    </button>
  );
};

export default SubmitButton;
