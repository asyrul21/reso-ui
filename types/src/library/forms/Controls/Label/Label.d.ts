import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import "../sharedStyles.scss";
import "./styles/Label.layout.scss";
import "./styles/Label.theme.scss";
type LabelDescriptionObject = {
    [key: string]: string;
};
export interface ILabelProps extends IComponent, IThemeProps, IMarginProps {
    htmlFor: string;
    label: string;
    description?: string | LabelDescriptionObject;
    descriptionSelectedKey?: string;
    required?: boolean;
    labelClassName?: string;
    labelStyles?: React.CSSProperties;
}
export declare const Label: ({ htmlFor, label, description, descriptionSelectedKey, required, labelClassName, labelStyles, rootClassName, rootStyles, theme, ...spacingsProps }: ILabelProps) => React.JSX.Element;
export {};
