import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { DateDayNameIndex, DateDayNumber } from "@forms/Controls/Date-Selector/types";
import "./styles/Date-Days-Grid.layout.scss";
import "./styles/Date-Days-Grid.theme.scss";
export interface IDateDaysGridProps extends IComponent, IThemeProps {
    monthStartDay: number;
    monthNumberOfDays: number;
    prevMonthDays: number;
    today: Date;
    selectedYear: number;
    selectedMonth: number;
    value?: Date;
    minimumDate?: Date;
    maximumDate?: Date;
    onClickDay?: (newDateObj: Date) => void;
    getDisplayDayNumber?: (day: DateDayNumber) => DateDayNumber | string;
    getDisplayDayName?: (day: DateDayNameIndex) => string;
}
export declare const DateDaysGrid: ({ monthStartDay, monthNumberOfDays, prevMonthDays, today, value, selectedYear, selectedMonth, minimumDate, maximumDate, onClickDay, getDisplayDayName, getDisplayDayNumber, rootClassName, rootStyles, theme, }: IDateDaysGridProps) => React.JSX.Element;
