import React from "react";
import classnames from "classnames";

const TabsContainer = ({ children, label, className }) => {
  const containerClasses = classnames({
    component_tabsContainer_container: true,
    [`${className}`]: true,
  });
  return (
    <div className={containerClasses}>
      <span className="component_tabsContainer_text">{label}: </span>
      <div className="component_tabsContainer_tabs">{children}</div>
    </div>
  );
};

export default TabsContainer;
