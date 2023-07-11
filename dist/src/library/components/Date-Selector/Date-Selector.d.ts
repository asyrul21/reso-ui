import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import { DateDayNameIndex, DateDayNumber, DateMonthIndex } from "./types";
import "./styles/Date-Selector.layout.scss";
import "./styles/Date-Selector.theme.scss";
export interface IDateSelectorProps extends IComponent, IThemeProps, IMarginProps {
    value?: Date;
    min?: Date;
    max?: Date;
    onChange?: (date: Date) => void;
    disabled?: boolean;
    gridContainerClassName?: string;
    gridContainerStyles?: React.CSSProperties;
    format?: (date: Date) => string;
    getDisplayDayNumber?: (day: DateDayNumber) => string | DateDayNumber;
    getDisplayDayName?: (day: DateDayNameIndex) => string;
    getDisplayMonth?: (month: DateMonthIndex) => string;
    getDisplayYear?: (year: number) => string;
}
export declare const DateSelector: ({ value, min, max, onChange, disabled, rootClassName, rootStyles, gridContainerClassName, gridContainerStyles, format, getDisplayDayNumber, getDisplayDayName, getDisplayMonth, getDisplayYear, theme, ...spacingsProps }: IDateSelectorProps) => React.JSX.Element;
export default DateSelector;
