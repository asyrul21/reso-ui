import React from "react";
import classnames from "classnames";

const Paginator = ({
  loading = false,
  responsePage = 1,
  value = 1,
  className,
  totalPages = 1,
  onChange = () => {},
}) => {
  const containerClasses = classnames({
    component_pagination_container: true,
    [className]: true,
  });

  const prevButtonClasses = classnames({
    no_select: true,
    component_pagination_button: true,
    component_pagination_button_prev: true,
    component_pagination_button_hidden: responsePage === 1,
  });

  const nextButtonClasses = classnames({
    no_select: true,
    component_pagination_button: true,
    component_pagination_button_hidden: responsePage === totalPages,
  });
  return (
    !loading && (
      <div className={containerClasses}>
        <button
          className={prevButtonClasses}
          onClick={() => {
            if (value > 1) {
              onChange(value - 1);
            }
          }}
        >
          Prev Page
        </button>
        <button
          className={nextButtonClasses}
          onClick={() => {
            if (value < totalPages) {
              onChange(value + 1);
            }
          }}
        >
          Next Page
        </button>
      </div>
    )
  );
};

export default Paginator;
