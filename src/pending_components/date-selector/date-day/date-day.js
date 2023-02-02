import React from "react";
import classnames from "classnames";

const DateDay = ({
  children,
  disabled = false,
  today = false,
  selected = false,
  onClick = () => {},
}) => {
  const classes = classnames({
    component_datesGrid_unit: true,
    component_dateDay_day: true,
    component_dateDay_selected: !disabled ? selected : false,
    component_dateDay_today: today,
    component_dateDay_day_disabled: disabled,
  });
  return (
    <>
      <div
        className={classes}
        onClick={() => {
          if (!disabled) {
            onClick(children);
          }
        }}
      >
        {disabled && <div className="component_dateDay_disabled_overlay" />}
        {!disabled && selected && (
          <div className="component_dateDay_selected_overlay" />
        )}
        {today && <div className="component_dateDay_today_circle" />}
        {children}
      </div>
    </>
  );
};

export default DateDay;
