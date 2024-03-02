import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { DropdownDown } from "../../../../icons";

import { Icon } from "../../../../components";

// import base interface
import IComponent from "../../../../interfaces/IComponent";
import IThemeProps from "../../../../interfaces/Theme";
import { IMarginProps } from "../../../../interfaces/ISpacingsProps";

// styles
import "../../sharedStyles.scss";
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
import { DropdownOption, IDropdownOption } from "../Dropdown-Option";
import { useClickOutside } from "../../../../hooks";
import { methodHasValue, stringHasValue } from "../../../../utils/validations";

export interface IDropdownSelectProps
  extends IComponent,
    IThemeProps,
    IMarginProps {
  id?: string;
  selectedKey?: string;
  value?: string;
  options?: IDropdownOption[];
  onChange?: (key: string) => void;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
  disabled?: boolean;
  asNavItem?: boolean;
  expandOn?: "click" | "hover";
  OptionsContainerElement?: "ul" | "div";
  children?: React.ReactNode;
  optionsMaxHeight?: string;
  headerClassName?: string;
  headerStyles?: React.CSSProperties;
  optionsContainerClassName?: string;
  optionsContainerStyles?: React.CSSProperties;
}

export const DropdownSelect = ({
  id,
  selectedKey,
  value /* default is undefined, must be valid string like 'banana' */,
  options,
  onChange,
  error,
  setError,
  required = false,
  disabled = false,
  asNavItem = false,
  expandOn = "click",
  OptionsContainerElement = "ul",
  children,
  optionsMaxHeight,
  headerClassName,
  headerStyles = {},
  optionsContainerClassName,
  optionsContainerStyles = {},
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...spacingsProps
}: IDropdownSelectProps) => {
  const node = useRef();
  const [isOpen, setIsOpened] = useState(false);

  const inputValidators = useInputValidatorsMemo("string", {
    required,
  });

  useClickOutside(node, () => {
    setIsOpened(false);
  });

  useEffect(() => {
    validate(value, inputValidators, setError);
  }, [value]);

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
        dropdown_header_opened: !asNavItem && isOpen /** border radius stuff */,
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

  const IconClasses = classnames({
    dropdown_icon_invert: isOpen,
  });

  return (
    <div
      id={id || "resoi_dropdown_select"}
      data-testid="dropdown-select-root"
      ref={node}
      className={containerClasses}
      style={rootStyles}
      onMouseEnter={() => {
        if (expandOn === "hover" && !disabled) {
          setIsOpened(true);
        }
      }}
      onMouseLeave={() => {
        if (expandOn === "hover" && !disabled) {
          setIsOpened(false);
        }
      }}
    >
      <div
        role="button"
        data-testid="dropdown-select-header"
        className={headerClasses}
        style={headerStyles}
        onClick={() => {
          if (expandOn === "click" && !disabled) {
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
        data-testid="dropdown-select-options-container"
        className={dropdownOptionsClasses}
        style={{
          ...optionsContainerStyles,
          maxHeight: isOpen ? optionsMaxHeight : 0,
        }}
      >
        {options && options.length > 0
          ? options.map((o: IDropdownOption, idx) => {
              return (
                <DropdownOption
                  testKey={o.key} // for unit tests only
                  Element="li"
                  theme={theme}
                  active={
                    typeof selectedKey === "string" && selectedKey === o.key
                  }
                  key={o.key || `resoui_dddoption_${id || "noid"}_${idx}`}
                  option={o.value}
                  onClick={() => {
                    setIsOpened(false);
                    if (methodHasValue(onChange)) {
                      onChange(o.key);
                    }
                  }}
                />
              );
            })
          : children
          ? children
          : null}
      </OptionsContainerElement>
      {error && (
        <p data-testid={`dropdown-select-error`} className="form_input_error">
          {error}
        </p>
      )}
    </div>
  );
};
