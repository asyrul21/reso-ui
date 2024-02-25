import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { DropdownDown, DropdownUp } from "../../../icons";

import { Icon } from "../../../components";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import { IFormInputProps } from "../../../interfaces/Form";

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
} from "../../../utils/styles";
import { validate } from "../../Validators";
import useInputValidatorsMemo from "../../Hooks/useInputValidatorsMemo";

export type DropdownOption = {
  key: string;
  value: string;
};

export interface IDropdownSelectProps
  extends IComponent,
    IThemeProps,
    IMarginProps {
  expandOn?: "click" | "hover";
  optionsMaxHeight?: string;
  id?: string;
  disabled?: boolean;
  options?: DropdownOption[];
  headerClassName?: string;
  headerStyles?: React.CSSProperties;
  optionsContainerClassName?: string;
  optionsContainerStyles?: React.CSSProperties;
}

export const DropdownSelect = ({
  options = [],
  // value = "",
  optionsMaxHeight,
  disabled = false,
  rootClassName,
  rootStyles = {},
  headerClassName,
  headerStyles = {},
  optionsContainerClassName,
  optionsContainerStyles = {},
  theme = "light",
  ...spacingsProps
}: //   onChange = () => {},
IDropdownSelectProps) => {
  const [isOpen, setIsOpened] = useState(false);
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

  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          dropdown_container: true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        disabled,
        no_select: true,
      }
    )
  );

  const headerClasses = createComponentStyles(
    createLayoutStyles(
      {
        dropdown_header: true,
        dropdown_header_opened: isOpen,
      },
      headerClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`dropdown_header_theme_`, theme)
  );

  const dropdownOptionsClasses = createComponentStyles(
    createLayoutStyles(
      {
        dropdown_options_container: true,
        dropdown_options_show: isOpen,
      },
      optionsContainerClassName,
      {
        no_select: true,
      }
    )
  );

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

  const IconClasses = classnames({
    dropdown_icon_invert: isOpen,
  });

  return (
    <div
      //   ref={node}
      //   id="selectInput"
      className={containerClasses}
      style={rootStyles}
    >
      <div
        role="button"
        className={headerClasses}
        style={headerStyles}
        onClick={() => setIsOpened(!isOpen)}
      >
        <span>Click</span>
        <Icon
          rootClassName={IconClasses}
          SvgIcon={DropdownDown}
          width={24}
          height={24}
        />
      </div>
      <ul
        className={dropdownOptionsClasses}
        style={{
          ...optionsContainerStyles,
          maxHeight: isOpen ? optionsMaxHeight : 0,
        }}
      >
        <li className="dropdown_option">Option 1</li>
        <li className="dropdown_option">Option 2</li>
        {/* <li className="dropdown_option">Option 3</li>
        <li className="dropdown_option">Option 4</li>
        <li className="dropdown_option">Option 5</li>
        <li className="dropdown_option">Option 6</li>
        <li className="dropdown_option">Option 7</li>
        <li className="dropdown_option">Option 8</li>
        <li className="dropdown_option">Option 9</li> */}
      </ul>
      {/* Hello
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
