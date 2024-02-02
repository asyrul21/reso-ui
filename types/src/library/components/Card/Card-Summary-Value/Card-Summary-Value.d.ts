import React from "react";
import IComponent from "../../../interfaces/IComponent";
import "./styles/Card-Summary-Value.layout.scss";
export interface ICardSummaryValueProps extends IComponent {
    value: string | number;
}
export declare const CardSummaryValue: ({ value, rootClassName, rootStyles, }: ICardSummaryValueProps) => React.JSX.Element;
