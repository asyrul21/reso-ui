import React from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";

// styles
import "./styles/Back.layout.scss";
import "./styles/Back.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";

export interface IBackProps extends IComponent, IThemeProps, IMarginProps {
  to: string;
  text?: string;
  disabled?: boolean;
  linkClassName?: string;
  linkStyles?: React.CSSProperties;
}

export const Back = ({
  to,
  text = "Back",
  disabled = false,
  rootClassName,
  rootStyles = {},
  linkClassName,
  linkStyles = {},
  theme = "light",
  ...spacingsProps
}: IBackProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          back_container: true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        disabled,
        no_select: true,
      }
    ),
    createThemeStyles("back_theme_", theme)
  );

  const linkClasses = createComponentStyles(
    createLayoutStyles(
      {
        a_base: true,
      },
      linkClassName
    ),
    createThemeStyles("back_link_theme", theme)
  );

  return (
    <div
      data-testid="back-root"
      className={containerStyles}
      style={rootStyles}
      role="navigation"
    >
      <a
        rel="noreferrer"
        href={to}
        className={linkClasses}
        style={linkStyles}
        data-testid="back-link"
      >
        {"<"} {text}
      </a>
    </div>
  );
};
