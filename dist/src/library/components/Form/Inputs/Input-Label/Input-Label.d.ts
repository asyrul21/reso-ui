import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import "../sharedStyles.scss";
import "./styles/Input-Label.layout.scss";
import "./styles/Input-Label.theme.scss";
type LabelDescriptionObject = {
    [key: string]: string;
};
export interface IInputLabelProps extends IComponent, IThemeProps, IMarginProps {
    htmlFor: string;
    label: string;
    description?: string | LabelDescriptionObject;
    descriptionSelectedKey?: string;
    required?: boolean;
    labelClassName?: string;
    labelStyles?: React.CSSProperties;
}
export declare const InputLabel: ({ htmlFor, label, description, descriptionSelectedKey, required, labelClassName, labelStyles, rootClassName, rootStyles, theme, ...spacingsProps }: IInputLabelProps) => React.JSX.Element;
export {};
//# sourceMappingURL=Input-Label.d.ts.map