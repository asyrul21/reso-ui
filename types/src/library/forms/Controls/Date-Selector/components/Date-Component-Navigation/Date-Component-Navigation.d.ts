import React from "react";
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import "./styles/Date-Component-Navigation.layout.scss";
import "./styles/Date-Component-Navigation.theme.scss";
export interface IDateComponentNavigation extends IComponent, IThemeProps {
    value: string;
    disablePrevious?: boolean;
    disableNext?: boolean;
    onClickPrevious?: () => void;
    onClickNext?: () => void;
    customPreviousComponent?: () => React.ReactNode;
    customNextComponent?: () => React.ReactNode;
    textClassName?: string;
    textStyles?: React.CSSProperties;
    previousBtnClassName?: string;
    previousBtnStyles?: React.CSSProperties;
    nextBtnClassName?: string;
    nextBtnStyles?: React.CSSProperties;
}
export declare const ICON_SIZE = 24;
export declare const DateComponentNavigation: ({ value, disablePrevious, disableNext, onClickPrevious, onClickNext, customPreviousComponent, customNextComponent, textClassName, textStyles, previousBtnClassName, previousBtnStyles, nextBtnClassName, nextBtnStyles, rootClassName, rootStyles, theme, }: IDateComponentNavigation) => React.JSX.Element;
