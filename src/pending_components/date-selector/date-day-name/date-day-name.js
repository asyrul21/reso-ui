import React from "react";
import classnames from "classnames";

const DateDayName = ({ children }) => {
  const classes = classnames({
    component_datesGrid_unit: true,
    component_dateDayName_dayName: true,
  });
  return <div className={classes}>{children}</div>;
};

export default DateDayName;
