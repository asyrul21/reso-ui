import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import "./styles/Date-Day-Number.layout.scss";
import "./styles/Date-Day-Number.theme.scss";
import "../../styles/Date-Selector.shared.scss";
import { DateDayNumber } from "@components/Date-Selector/types";
export interface IDateDayNumberComponentProps extends IComponent, IThemeProps {
    dayNumber: DateDayNumber;
    dayNumberDisplay?: DateDayNumber | string;
    isToday?: boolean;
    isSelected?: boolean;
    disabled?: boolean;
    onClick?: (d: DateDayNumber) => void;
    selectedClassName?: string;
    selectedStyles?: React.CSSProperties;
    markerClassName?: string;
    markerStyles?: React.CSSProperties;
}
export declare const DateDayNumberComponent: ({ dayNumber, dayNumberDisplay, isToday, isSelected, disabled, onClick, selectedClassName, selectedStyles, markerClassName, markerStyles, rootClassName, rootStyles, theme, }: IDateDayNumberComponentProps) => React.JSX.Element;
