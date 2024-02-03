import React from "react";
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";
import { IMarginProps } from "../../interfaces/ISpacingsProps";
import "./styles/Text.layout.scss";
import "./styles/Text.theme.scss";
export interface ITextProps extends IComponent, IThemeProps, IMarginProps {
    id?: string;
    Element?: "p" | "span" | "h1" | "h2" | "h2" | "h3" | "h3" | "h4" | "h5" | "h6";
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    sizing?: "default" | "large";
    children: React.ReactNode;
    noSelect?: boolean;
    noBlockMargin?: boolean;
    noInlineMargin?: boolean;
}
export declare const Text: ({ id, Element, sizing, size, children, noSelect, noBlockMargin, noInlineMargin, rootClassName, rootStyles, theme, ...spacingsProps }: ITextProps) => React.JSX.Element;
