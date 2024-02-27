import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { DropdownDown, DropdownUp } from "../../../../icons";

import { Icon } from "../../../../components";

// import base interface
import IComponent from "../../../../interfaces/IComponent";
import IThemeProps from "../../../../interfaces/Theme";
import { IMarginProps } from "../../../../interfaces/ISpacingsProps";
import { IFormInputProps } from "../../../../interfaces/Form";

// styles
import "./styles/Dropdown-Select.layout.scss";
import "./styles/Dropdown-Select.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../../utils/styles";
import { validate } from "../../../Validators";
import useInputValidatorsMemo from "../../../Hooks/useInputValidatorsMemo";
import { IDropdownOption } from "../Dropdown-Option";
import { useClickOutside } from "../../../../hooks";
import { stringHasValue } from "../../../../utils/validations";

export interface IDropdownSelectProps
  extends IComponent,
    IThemeProps,
    IMarginProps {
  asNavItem?: boolean;
  expandOn?: "click" | "hover";
  OptionsContainerElement?: "ul" | "div";
  value?: string;
  children: React.ReactNode;
  optionsMaxHeight?: string;
  id?: string;
  disabled?: boolean;
  options?: IDropdownOption[];
  headerClassName?: string;
  headerStyles?: React.CSSProperties;
  optionsContainerClassName?: string;
  optionsContainerStyles?: React.CSSProperties;
}

export const DropdownSelect = ({
  id,
  expandOn = "click",
  asNavItem = false,
  value,
  children,
  OptionsContainerElement,
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
  const node = useRef();
  const [isOpen, setIsOpened] = useState(false);

  useClickOutside(node, () => {
    setIsOpened(false);
  });
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
        dropdown_header_navItem: asNavItem === true,
        dropdown_header_opened: !asNavItem && isOpen,
      },
      headerClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(
      (() => {
        return asNavItem
          ? "dropdown_header_navItem_theme_"
          : "dropdown_header_theme_";
      })(),
      theme
    )
  );

  const dropdownOptionsClasses = createComponentStyles(
    createLayoutStyles(
      {
        dropdown_options_container: true,
        dropdown_options_container_navItem: asNavItem === true,
        dropdown_options_show: isOpen === true,
      },
      optionsContainerClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(
      (() => {
        return asNavItem
          ? `dropdown_options_container_navItem_theme_`
          : `dropdown_options_container_theme_`;
      })(),
      theme
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
      id={id || "selectInput"}
      ref={node}
      className={containerClasses}
      style={rootStyles}
      onMouseEnter={() => {
        if (expandOn === "hover") {
          setIsOpened(true);
        }
      }}
      onMouseLeave={() => {
        if (expandOn === "hover") {
          setIsOpened(false);
        }
      }}
    >
      <div
        role="button"
        className={headerClasses}
        style={headerStyles}
        onClick={() => {
          if (expandOn === "click") {
            setIsOpened(!isOpen);
          }
        }}
      >
        <span>{stringHasValue(value) ? value : "Select an option"}</span>
        <Icon
          rootClassName={IconClasses}
          SvgIcon={DropdownDown}
          width={24}
          height={24}
        />
      </div>
      <OptionsContainerElement
        className={dropdownOptionsClasses}
        style={{
          ...optionsContainerStyles,
          maxHeight: isOpen ? optionsMaxHeight : 0,
        }}
      >
        {children}
      </OptionsContainerElement>
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
