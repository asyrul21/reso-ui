import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import { DropdownDown, DropdownUp } from "../../../icons";

const DropdownSelect = ({ options = [], value = "", onChange = () => {} }) => {
  const node = useRef();
  const [isOpened, setIsOpened] = useState(false);

  const handleClickComponent = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpened(false);
  };

  useEffect(() => {
    // add event listener on mount
    document.addEventListener("mousedown", handleClickComponent);

    // remove event listener when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickComponent);
    };
  }, []);
  const listItemClassesActive = classnames({
    component_dropdownselect_option: true,
    component_dropdownselect_option_selected: true,
  });

  const ul_header_classes = classnames({
    component_dropdownselect_li_header: true,
    [`${
      isOpened
        ? "component_dropdownselect_li_header_opened"
        : "component_dropdownselect_li_header_not_opened"
    }`]: true,
  });

  const listItemClasses = classnames({
    component_dropdownselect_option: true,
  });

  return (
    <ul
      ref={node}
      id="selectInput"
      className="component_dropdownselect_ul_container no_select"
    >
      <div
        className={ul_header_classes}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        {value ? value : ""}
      </div>
      {isOpened && (
        <div className="component_dropdownselect_li_inactive_container">
          {options.map((op, index) => (
            <li
              key={index}
              className={op === value ? listItemClassesActive : listItemClasses}
              onClick={() => {
                setIsOpened(false);
                onChange(op, index);
              }}
            >
              {op}
            </li>
          ))}
        </div>
      )}
      <div
        className="component_dropdownselect_arrow"
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        {isOpened ? <DropdownUp /> : <DropdownDown />}
      </div>
    </ul>
  );
};

export default DropdownSelect;
