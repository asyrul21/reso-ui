import React from "react";
import classnames from "classnames";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

// styles
import "./styles/Date-Day-Number.layout.scss";
import "./styles/Date-Day-Number.theme.scss";
import "../../styles/Date-Selector.shared.scss";

import { methodHasValue } from "@utils/validations";
import { DateDayNumber } from "@components/Date-Selector/types";

export interface IDateDayNumberComponentProps extends IComponent, IThemeProps {
  dayNumber: DateDayNumber;
  isToday?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  onClick?: (d: DateDayNumber) => void;
}

export const DateDayNumberComponent = ({
  dayNumber,
  isToday = false,
  isSelected = false,
  disabled = false,
  onClick = () => {},
  rootClassName,
  rootStyles = {},
  theme = "light",
}: IDateDayNumberComponentProps) => {
  const containerStyleDefault = createComponentStyles(
    createLayoutStyles(
      {
        date_selector_grid_unit: true,
        date_day_number_container: true,
        date_day_number_disabled: disabled,
      },
      rootClassName,
      {
        disabled: disabled,
        no_select: true,
      }
    ),
    createThemeStyles(`date_day_number_theme_`, theme)
  );

  const containerStyleToday = createComponentStyles(
    createLayoutStyles({
      date_day_number_today: isToday,
    }),
    createThemeStyles(`date_day_number_today_theme_`, theme)
  );

  const containerStyleSelected = createComponentStyles(
    createLayoutStyles({
      date_day_number_selected: !disabled ? isSelected : false,
    }),
    createThemeStyles(`date_day_number_selected_theme_`, theme)
  );

  const containerClasses = classnames(
    containerStyleDefault,
    !disabled && isSelected ? containerStyleSelected : {},
    isToday ? containerStyleToday : {}
  );
  return (
    <div
      data-testid="date-day-number-root"
      className={containerClasses}
      onClick={() => {
        if (!disabled && methodHasValue(onClick)) {
          onClick(dayNumber);
        }
      }}
      style={rootStyles}
    >
      {!disabled && isSelected && (
        <div className="date_day_number_selected_overlay" />
      )}
      {isToday && <div className="date_day_number_today_circle" />}
      {dayNumber}
    </div>
  );
};
