import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { ILink } from "@interfaces/ILink";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import "./styles/External-Links.layout.scss";
import "./styles/External-Links.theme.scss";
export interface IExternalLinksProps extends IComponent, IThemeProps, IMarginProps {
    links: ILink[];
    linkClassName?: string;
    linkStyles?: React.CSSProperties;
}
export declare const ExternalLinks: ({ links, rootClassName, rootStyles, linkClassName, linkStyles, theme, ...spacingsProps }: IExternalLinksProps) => React.JSX.Element;
