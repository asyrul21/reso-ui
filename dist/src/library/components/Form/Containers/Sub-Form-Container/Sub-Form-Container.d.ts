import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import "./styles/Sub-Form-Container.layout.scss";
import "./styles/Sub-Form-Container.theme.scss";
export interface ISubFormContainerProps extends IComponent, IThemeProps, IMarginProps {
    title: string;
    headerClassName?: string;
    headerStyles?: React.CSSProperties;
    children: React.ReactNode;
}
export declare const SubForm: ({ title, rootClassName, rootStyles, headerClassName, headerStyles, children, theme, ...spacingsProps }: ISubFormContainerProps) => React.JSX.Element;
//# sourceMappingURL=Sub-Form-Container.d.ts.map