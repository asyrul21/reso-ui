import React from "react";
import classnames from "classnames";

const GridTableRow = ({
  children,
  className,
  header = false,
  stickyHeader = false,
  gridTemplateColumns = "2fr repeat(3, 1fr)",
  selected = false,
  gridAutoRows = "auto",
  nonClickable = false,
  minWidth = "inherit",
  onClickRow = () => {},
  onHoverRow = () => {},
  onHoverLeave = () => {},
}) => {
  const RowClasses = classnames({
    component_grid_table_row: true,
    component_grid_table_row_header: header,
    component_grid_table_row_header_sticky: stickyHeader,
    component_grid_table_row_clickable: nonClickable === false,
    component_grid_table_row_selected: selected,
    [className]: true,
  });
  const gridTableRowStyles = {
    gridTemplateColumns,
    gridAutoRows,
    minWidth,
  };
  return (
    <div
      className={RowClasses}
      style={gridTableRowStyles}
      onMouseEnter={() => {
        onHoverRow();
      }}
      onMouseLeave={() => {
        onHoverLeave();
      }}
      onClick={() => {
        onClickRow();
      }}
    >
      {children}
    </div>
  );
};

export default GridTableRow;
