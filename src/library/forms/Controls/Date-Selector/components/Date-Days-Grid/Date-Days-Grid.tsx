import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import {
  DateDayNameIndex,
  DateDayNumber,
} from "@forms/Controls/Date-Selector/types";

// !! IMPORT OTHER COMPONENTS FIRST BEFORE IMPORTING STYLE FILES
import { DateDayName } from "../Date-Day-Name/Date-Day-Name";
import { DateDayNumberComponent } from "../Date-Day-Number/Date-Day-Number";

// styles
import "./styles/Date-Days-Grid.layout.scss";
import "./styles/Date-Days-Grid.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";
import { methodHasValue } from "@utils/validations";
import {
  destructureDateComponents,
  getDayDisplayNamesDefault,
} from "@forms/Controls/Date-Selector/utils";
import { getArrayFor } from "@utils/arrays";

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
  getDisplayDayName?: (day: DateDayNameIndex) => string; // 0 is monday, 6 is sunday
}

export const DateDaysGrid = ({
  monthStartDay,
  monthNumberOfDays,
  prevMonthDays,
  today,
  value,
  selectedYear,
  selectedMonth,
  minimumDate,
  maximumDate,
  onClickDay,
  getDisplayDayName,
  getDisplayDayNumber,
  rootClassName,
  rootStyles = {},
  theme = "light",
}: IDateDaysGridProps) => {
  const COLUMNS = 7;
  const ROWS = 6;
  const gridTemplateColumns = `repeat(${String(COLUMNS)}, 1fr)`;

  const isToday = (): number | null => {
    const {
      year: todayYear,
      month: todayMonth,
      date: todayDate,
    } = destructureDateComponents(today);
    if (todayYear === selectedYear && todayMonth === selectedMonth) {
      return todayDate;
    }

    return null;
  };

  const isSelected = (day: DateDayNumber): boolean => {
    if (value === null || typeof value === "undefined") {
      return false;
    }
    const {
      year: valueYear,
      month: valueMonth,
      date: valueDate,
    } = destructureDateComponents(value);

    return (
      valueYear === selectedYear &&
      valueMonth === selectedMonth &&
      valueDate === day
    );
  };

  const isLessThanMinimum = (d: DateDayNumber): boolean => {
    if (minimumDate === null || typeof minimumDate === "undefined") {
      return false;
    }
    const {
      year: minYear,
      month: minMonth,
      date: minDate,
    } = destructureDateComponents(minimumDate);
    if (selectedYear < minYear || selectedMonth < minMonth) {
      return true;
    }

    return (
      selectedYear === minYear && selectedMonth === minMonth && d < minDate
    );
  };

  const isMoreThanMaximum = (d: DateDayNumber): boolean => {
    if (maximumDate === null || typeof maximumDate === "undefined") {
      return false;
    }
    const {
      year: maxYear,
      month: maxMonth,
      date: maxDate,
    } = destructureDateComponents(maximumDate);
    if (selectedYear > maxYear || selectedMonth > maxMonth) {
      return true;
    }

    return (
      selectedYear === maxYear && selectedMonth === maxMonth && d > maxDate
    );
  };

  const renderNormalDay = (key: any, dayNumber: DateDayNumber) => {
    return (
      <DateDayNumberComponent
        theme={theme}
        key={key}
        dayNumber={dayNumber}
        dayNumberDisplay={
          methodHasValue(getDisplayDayNumber)
            ? getDisplayDayNumber(dayNumber)
            : dayNumber
        }
        isToday={isToday() === dayNumber}
        onClick={(d) => {
          onClickDay(new Date(selectedYear, selectedMonth, d));
        }}
        isSelected={isSelected(dayNumber)}
        // for future refence :
        // selectedClassName="custom_selected_className"
        // todayClassName="custom_today_className"
      />
    );
  };

  const renderDisabledDay = (
    key: any,
    dayNumber: DateDayNumber,
    nextOrPrevMonth = false
  ) => {
    return (
      <DateDayNumberComponent
        theme={theme}
        key={key}
        dayNumber={dayNumber}
        dayNumberDisplay={
          methodHasValue(getDisplayDayNumber)
            ? getDisplayDayNumber(dayNumber)
            : dayNumber
        }
        disabled
        isToday={!nextOrPrevMonth && isToday() === dayNumber}
      />
    );
  };

  const isFirstRow = (row: number): boolean => {
    return row === 0;
  };

  const columnIsBeforeMonthStartDay = (col: number): boolean => {
    return col < monthStartDay;
  };

  const populatedAllMonthDays = (count: number): boolean => {
    return count > monthNumberOfDays - 1;
  };

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        date_days_grid_container: true,
      },
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`date_days_grid_theme_`, theme)
  );

  let dayCount = 0;
  let nextMonthDayCount = 0;
  // because monthStartDay is inclusive, so dont need to deduct 1
  const firstRowDays = COLUMNS - monthStartDay + 1;
  let prevMonthPadding = COLUMNS - firstRowDays;

  return (
    <div
      className={containerStyles}
      style={{
        gridTemplateColumns,
        ...rootStyles,
      }}
      data-testid="date-selector-grid-root"
    >
      {getDayDisplayNamesDefault().map((day, key) => {
        return (
          <DateDayName key={key} theme={theme}>
            {methodHasValue(getDisplayDayName)
              ? getDisplayDayName(key as DateDayNameIndex)
              : day}
          </DateDayName>
        );
      })}
      {getArrayFor(ROWS).map((dayRow, rowKey) => {
        const result = [];
        getArrayFor(COLUMNS).forEach((dayCol, colKey) => {
          if (isFirstRow(rowKey)) {
            if (columnIsBeforeMonthStartDay(colKey)) {
              const d = prevMonthDays - prevMonthPadding;
              result.push(
                renderDisabledDay(
                  `${dayRow}-${dayCol}`,
                  d as DateDayNumber,
                  true
                )
              );
              prevMonthPadding--;
            } else {
              dayCount++;
              if (
                isLessThanMinimum(dayCount as DateDayNumber) ||
                isMoreThanMaximum(dayCount as DateDayNumber)
              ) {
                result.push(
                  renderDisabledDay(
                    `${dayRow}-${dayCol}`,
                    dayCount as DateDayNumber
                  )
                );
              } else {
                result.push(
                  renderNormalDay(
                    `${dayRow}-${dayCol}`,
                    dayCount as DateDayNumber
                  )
                );
              }
            }
          } else if (populatedAllMonthDays(dayCount)) {
            nextMonthDayCount++;
            result.push(
              renderDisabledDay(
                `${dayRow}-${dayCol}`,
                nextMonthDayCount as DateDayNumber,
                true
              )
            );
          }
          // all the other month days
          else {
            dayCount++;
            if (
              isLessThanMinimum(dayCount as DateDayNumber) ||
              isMoreThanMaximum(dayCount as DateDayNumber)
            ) {
              result.push(
                renderDisabledDay(
                  `${dayRow}-${dayCol}`,
                  dayCount as DateDayNumber
                )
              );
            } else {
              result.push(
                renderNormalDay(
                  `${dayRow}-${dayCol}`,
                  dayCount as DateDayNumber
                )
              );
            }
          }
        });

        return result;
      })}
    </div>
  );
};
