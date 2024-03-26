import React from "react";
import classnames from "classnames";

const GridTable = ({
  children,
  className,
  minWidth = "960px",
  maxHeight = "auto",
}) => {
  const tableClasses = classnames({
    component_grid_table_table: true,
    [className]: true,
  });
  return (
    <div
      className={tableClasses}
      style={{
        minWidth: minWidth,
        maxHeight: maxHeight,
      }}
    >
      {children}
    </div>
  );
};

export default GridTable;
