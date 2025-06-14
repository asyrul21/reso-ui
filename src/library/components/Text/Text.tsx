import React from "react";

// import base interface
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";
import { IMarginProps } from "../../interfaces/ISpacingsProps";

// styles
import "./styles/Text.layout.scss";
import "./styles/Text.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../utils/styles";

export interface ITextProps extends IComponent, IThemeProps, IMarginProps {
  id?: string;
  Element?:
    | "p"
    | "span"
    | "h1"
    | "h2"
    | "h2"
    | "h3"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  sizing?: "default" | "large";
  children: React.ReactNode;
  noSelect?: boolean;
  noBlockMargin?: boolean;
  noInlineMargin?: boolean;
}

export const Text = ({
  id,
  Element = "span",
  sizing = "default",
  size = 3,
  children,
  noSelect = false,
  noBlockMargin = false,
  noInlineMargin = false,
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...spacingsProps
}: ITextProps) => {
  const elementIsHeading = () => {
    return (
      Element === "h1" ||
      Element === "h2" ||
      Element === "h3" ||
      Element === "h4" ||
      Element === "h5" ||
      Element === "h6"
    );
  };

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          /**
           * Element Specific Styles
           */
          p_base: Element === "p",
          span_base: Element === "span",
          [`heading_${Element}_base`]: elementIsHeading(),
          /**
           * Sizing for p or span
           */
          [`fontsize_${sizing}_${size}`]: !elementIsHeading(),
          /**
           * Others
           */
          text_no_block_margin: noBlockMargin === true,
          text_no_inline_margin: noInlineMargin === true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        no_select: noSelect,
      }
    ),
    createThemeStyles(`text_theme_`, theme)
  );

  return (
    <Element
      id={id}
      data-testid="text-root"
      className={containerStyles}
      style={rootStyles}
    >
      {children}
    </Element>
  );
};
