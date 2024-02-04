import React from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";

// styles
import "./styles/NavItem.layout.scss";
import "./styles/NavItem.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";

import {
  hasValue,
  methodHasValue,
  stringHasValue,
} from "../../../utils/validations";

export interface INavItemProps extends IComponent, IThemeProps, IMarginProps {
  children: React.ReactNode;
  Implementation?: "a" | "button";
  onClick?: () => void;
  active?: boolean;
  enableActiveStyles?: boolean;
  href?: string;
  elementClassName?: string;
  elementStyles?: React.CSSProperties;
  //   renderCustomNavItem?: (
  //     props: Omit<INavItemProps, "implementation, renderCustomNavItem">
  //   ) => React.ReactNode;
  renderCustomNavItem?: (props: {
    theme: IThemeProps;
    children: React.ReactNode;
    active: boolean;
  }) => React.ReactNode;
}

export const NavItem = ({
  Implementation = "a",
  children,
  onClick,
  active = false,
  enableActiveStyles = true,
  href = "#",
  renderCustomNavItem,
  elementClassName,
  elementStyles = {},
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...spacingsProps
}: INavItemProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          navItem_container: true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`navItem_theme_`, theme)
  );

  const elementClasses = createComponentStyles(
    createLayoutStyles(
      {
        a_base: Implementation === "a",
        navItem_base: true,
        navItem_element: true,
        navItem_element_active: enableActiveStyles === true && active === true,
      },
      elementClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`navItem_element_theme_`, theme)
  );

  return (
    <div data-testid="navItem-root" className={containerStyles}>
      {methodHasValue(renderCustomNavItem) ? (
        renderCustomNavItem({
          theme: theme as IThemeProps,
          children,
          active,
        })
      ) : (
        <Implementation
          data-testid={`navItem-element-${Implementation}`}
          className={elementClasses}
          style={elementStyles}
          onClick={() => {
            if (methodHasValue(onClick)) {
              onClick();
            }
          }}
          href={Implementation === "a" ? href : undefined}
        >
          {children}
        </Implementation>
      )}
    </div>
  );
};
