import React, { CSSProperties, useEffect, useState } from "react";

// import base interface
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";
import { IPaddingProps } from "../../interfaces/ISpacingsProps";

import { Button } from "../Buttons";
import { Flex } from "../Containers";

// styles
import "./styles/Drawer.layout.scss";
import "./styles/Drawer.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../utils/styles";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";

export interface IDrawerProps extends IComponent, IThemeProps, IPaddingProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  side?: "left" | "right";
  title?: string;
  width?: number;
  fullWidth?: boolean;
  layer?: number;
  titleClassName?: string;
  titleStyles?: CSSProperties;
  contentClassName?: string;
  contentStyles?: CSSProperties;
}

export const Drawer = ({
  children,
  isOpen = false,
  onClose,
  title = "",
  layer = 1,
  width = 300,
  side = "right",
  fullWidth = false,
  titleClassName,
  titleStyles = {},
  contentClassName,
  contentStyles = {},
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...paddingProps
}: IDrawerProps) => {
  useDisableBodyScroll(isOpen);
  const [_isOpen, _setIsOpen] = useState(false);

  useEffect(() => {
    /**
     * this is to apply the _open class ONLY when
     * the component is mounted. Otherwise, the transition will
     * not work
     */
    if (isOpen) {
      _setIsOpen(isOpen);
    }

    return () => _setIsOpen(false);
  }, [isOpen]);

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          drawer_container: true,
          drawer_container_left: side === "left",
          drawer_container_right: side === "right",
          drawer_container_open: _isOpen,
        },
        paddingProps
      ),
      rootClassName
    ),
    createThemeStyles("drawer_container_theme_", theme)
  );

  const titleClasses = createComponentStyles(
    createLayoutStyles(
      {
        drawer_title: true,
      },
      titleClassName
    ),
    createThemeStyles("drawer_title_theme_", theme)
  );

  const contentClasses = createComponentStyles(
    createLayoutStyles(
      {
        drawer_content: true,
      },
      contentClassName
    )
  );

  const computedZIndex = layer + 10;

  const getIsOpen = () => (isOpen ? isOpen : _isOpen);

  return (
    getIsOpen() && (
      <div
        className="drawer_backdrop"
        style={{
          zIndex: computedZIndex,
          alignItems: side === "right" ? "flex-end" : "flex-start",
        }}
        data-testid="drawer-backdrop"
      >
        <Flex
          direction="column"
          justify="start"
          align="start"
          rootClassName={containerStyles}
          rootStyles={{
            zIndex: computedZIndex + 1,
            width: fullWidth ? "100%" : `${width}px`,
            ...rootStyles,
          }}
          {...{
            datatestid: "drawer-container-root",
          }}
        >
          <Flex rootClassName={titleClasses} rootStyles={titleStyles}>
            {title && title !== "" ? title : <div />}
            <Button
              text="X"
              onClick={() => {
                _setIsOpen(false);
                setTimeout(() => onClose(), 250);
              }}
              rootClassName="drawer_title_close"
            />
          </Flex>
          <Flex
            direction="column"
            justify="start"
            align="start"
            rootClassName={contentClasses}
            rootStyles={contentStyles}
            {...{
              datatestid: "drawer-content",
            }}
          >
            {children}
          </Flex>
        </Flex>
      </div>
    )
  );
};
