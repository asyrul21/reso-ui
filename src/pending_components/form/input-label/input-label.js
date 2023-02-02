import React from "react";
import classnames from "classnames";

const InputLabel = ({
  label,
  description,
  className,
  value = "",
  htmlFor = "inputComponent",
  required = false,
  labelClassName,
}) => {
  const containerClasses = classnames({
    component_inputlabel_container: true,
    [className]: true,
  });

  const labelClasses = classnames({
    no_select: true,
    input_label: true,
    component_inputlabel_label_margin: description ? true : false,
    component_inputlabel_label_margin_right: required,
    [labelClassName]: labelClassName !== null && labelClassName !== undefined,
  });
  return (
    <div className={containerClasses}>
      <div className="component_input_label_top">
        <label htmlFor={htmlFor} className={labelClasses}>
          {label}
        </label>
        {required && <span className="input_required">{`(*required)`}</span>}
      </div>
      {description &&
        (typeof description === "string" ? (
          description && (
            <>
              <p className="input_description">{description}</p>
            </>
          )
        ) : (
          <p className="input_description">{description[`${value}`]}</p>
        ))}
    </div>
  );
};

export default InputLabel;
