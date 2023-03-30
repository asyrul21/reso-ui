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
  selectedClassName?: string;
  todayClassName?: string;
}

export const DateDayNumberComponent = ({
  dayNumber,
  isToday = false,
  isSelected = false,
  disabled = false,
  onClick = () => {},
  selectedClassName,
  todayClassName,
  rootClassName,
  rootStyles = {},
  theme = "light",
}: IDateDayNumberComponentProps) => {
  const containerStyleDefault = createComponentStyles(
    createLayoutStyles(
      {
        date_selector_grid_unit: true,
        date_day_number_container: true,
      },
      rootClassName,
      {
        disabled: disabled,
        no_select: true,
      }
    ),
    createThemeStyles(`date_day_number_theme_`, theme)
  );

  const containerStyleSelected = createComponentStyles(
    createLayoutStyles({}, selectedClassName),
    createThemeStyles(`date_day_number_selected_theme_`, theme)
  );

  const todayMarkerStyles = createComponentStyles(
    createLayoutStyles(
      {
        date_day_number_today_marker: true,
      },
      todayClassName
    ),
    createThemeStyles(`date_day_number_today_theme_`, theme)
  );

  const containerClasses = classnames(
    containerStyleDefault,
    !disabled && isSelected ? containerStyleSelected : {}
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
      {isToday ? (
        <div data-testid="date-day-number-today" className={todayMarkerStyles}>
          {dayNumber}
        </div>
      ) : (
        dayNumber
      )}
    </div>
  );
};
