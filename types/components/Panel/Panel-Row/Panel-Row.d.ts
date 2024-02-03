import React from "react";
import IComponent from "../../../interfaces/IComponent";
import "./styles/Panel-Row.layout.scss";
export interface IPanelRowProps extends IComponent {
    keyStr: string;
    value: string | number;
    keyClassName?: string;
    keyStyles?: React.CSSProperties;
    valueClassName?: string;
    valueStyles?: React.CSSProperties;
}
export declare const PanelRow: ({ keyStr, value, rootClassName, rootStyles, keyClassName, keyStyles, valueClassName, valueStyles, }: IPanelRowProps) => React.JSX.Element;
