import React from "react";
import classnames from "classnames";

const SubmitButtonFixedButton = ({ disabled, className, value }) => {
  const buttonClasses = classnames({
    button: true,
    component_submitbuttonfixed_button: true,
    [`${className}`]: true,
  });
  return (
    <button type="submit" className={buttonClasses} disabled={disabled}>
      {value}
    </button>
  );
};

export default SubmitButtonFixedButton;
