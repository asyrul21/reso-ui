import React from "react";

// import base interface
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";
import { ILink } from "../../interfaces/ILink";
import { IMarginProps } from "../../interfaces/ISpacingsProps";

// styles
import "./styles/External-Links.layout.scss";
import "./styles/External-Links.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "./../../utils/styles";

import { methodHasValue } from "./../../utils/validations";

export interface IExternalLinksProps
  extends IComponent,
    IThemeProps,
    IMarginProps {
  links: ILink[];
  linkClassName?: string;
  linkStyles?: React.CSSProperties;
}

export const ExternalLinks = ({
  links,
  rootClassName,
  rootStyles = {},
  linkClassName,
  linkStyles = {},
  theme = "light",
  ...spacingsProps
}: IExternalLinksProps) => {
  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          externalLinks_container: true,
        },
        spacingsProps
      ),
      rootClassName
    ),
    createThemeStyles("externalLinks_theme_", theme)
  );

  const linkClasses = createComponentStyles(
    createLayoutStyles(
      {
        externalLinks_link: true,
      },
      linkClassName
    ),
    createThemeStyles("externalLinks_link_theme_", theme)
  );

  return (
    <>
      {links && links.length > 0 && (
        <ul
          data-testid="external-links-root"
          className={containerClasses}
          style={rootStyles}
        >
          {links.map((x, idx) => (
            <li
              data-testid={`external-links-link-${x}`}
              className="externalLinks_linkContainer"
              key={idx}
            >
              <a
                href={x.link}
                target="_blank"
                rel="noreferrer"
                className={linkClasses}
                style={linkStyles}
              >
                {x.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
