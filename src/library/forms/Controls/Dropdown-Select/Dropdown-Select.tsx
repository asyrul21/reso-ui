import React, { useEffect } from "react";
// import { DropdownDown, DropdownUp } from "../../../icons";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import { IFormInputProps } from "@interfaces/Form";

// styles
import "../sharedStyles.scss";
import "./styles/Dropdown-Select.layout.scss";
import "./styles/Dropdown-Select.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";
import { validate } from "@forms/Validators";
import useInputValidatorsMemo from "@forms/Hooks/useInputValidatorsMemo";

export const DropdownSelect = ({
  options = [],
  value = "",
  //   onChange = () => {},
}) => {
  //   const node = useRef();
  //   const [isOpened, setIsOpened] = useState(false);

  //   const handleClickComponent = (e) => {
  //     if (node.current.contains(e.target)) {
  //       // inside click
  //       return;
  //     }
  //     // outside click
  //     setIsOpened(false);
  //   };

  //   useEffect(() => {
  //     // add event listener on mount
  //     document.addEventListener("mousedown", handleClickComponent);

  //     // remove event listener when unmounted
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickComponent);
  //     };
  //   }, []);
  //   const listItemClassesActive = classnames({
  //     component_dropdownselect_option: true,
  //     component_dropdownselect_option_selected: true,
  //   });

  //   const ul_header_classes = classnames({
  //     component_dropdownselect_li_header: true,
  //     [`${
  //       isOpened
  //         ? "component_dropdownselect_li_header_opened"
  //         : "component_dropdownselect_li_header_not_opened"
  //     }`]: true,
  //   });

  //   const listItemClasses = classnames({
  //     component_dropdownselect_option: true,
  //   });

  return (
    <div
      //   ref={node}
      //   id="selectInput"
      className="dropdown_container"
    >
      <button className="dropdown_header_button">Click</button>
      <ul className="dropdown_content">
        <li className="dropdown_option">Option 1</li>
        <li className="dropdown_option">Option 2</li>
        <li className="dropdown_option">Option 3</li>
        <li className="dropdown_option">Option 4</li>
        <li className="dropdown_option">Option 5</li>
        <li className="dropdown_option">Option 6</li>
        <li className="dropdown_option">Option 7</li>
        <li className="dropdown_option">Option 8</li>
        <li className="dropdown_option">Option 9</li>
      </ul>
      {/* Hello */}
      {/* <div
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
      </div> */}
    </div>
  );
};
