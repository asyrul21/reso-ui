import React from "react";
import classnames from "classnames";

const GridTableCell = ({ children, className, ...rest }) => {
  const cellClasses = classnames({
    component_grid_table_cell_container: true,
    [className]: true,
  });
  return (
    <div className={cellClasses} {...rest}>
      {children}
    </div>
  );
};

export default GridTableCell;
