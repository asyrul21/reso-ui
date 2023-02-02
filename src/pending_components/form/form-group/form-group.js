import React from "react";
import classnames from "classnames";

// if you are using the custom dropdown,
// you should overwrite the style with some extra height
const FormGroup = ({ heading, children, className }) => {
  const contentClasses = classnames({
    component_formgroup_content: true,
    [className]: true,
  });

  return (
    <div className="component_formgroup_container">
      <div className="heading component_formgroup_header">{heading}</div>
      <div className={contentClasses}>{children}</div>
    </div>
  );
};

export default FormGroup;
