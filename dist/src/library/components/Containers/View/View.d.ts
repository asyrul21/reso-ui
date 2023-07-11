import React from "react";
import IComponent from "@interfaces/IComponent";
import { IPaddingProps } from "@interfaces/ISpacingsProps";
import "./styles/View.layout.scss";
import "./styles/View.theme.scss";
import IThemeProps from "@interfaces/Theme";
export interface IViewProps extends IComponent, IPaddingProps, IThemeProps {
    children: React.ReactNode;
}
export declare const View: ({ rootClassName, children, rootStyles, theme, ...paddingProps }: IViewProps) => React.JSX.Element;
//# sourceMappingURL=View.d.ts.map