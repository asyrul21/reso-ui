import React from "react";
import classnames from "classnames";

const GridTableContainer = ({ children, className }) => {
  const containerClasses = classnames({
    component_grid_table_container: true,
    [className]: true,
  });
  return <div className={containerClasses}>{children}</div>;
};

export default GridTableContainer;
