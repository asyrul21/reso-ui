import React from "react";
import classnames from "classnames";

const TabButton = ({
  namespace,
  children,
  onSelect = () => {},
  selected = null,
}) => {
  const tabClasses = classnames({
    component_tabButton_container: true,
    component_tabButton_active: selected === namespace,
  });
  return (
    <div
      className={tabClasses}
      onClick={() => {
        onSelect(namespace);
      }}
    >
      {children}
    </div>
  );
};

export default TabButton;
