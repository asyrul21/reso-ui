import React, { useEffect, useRef, useState } from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";

// styles
import "./styles/Date-Selector.layout.scss";
import "./styles/Date-Selector.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";
import { DateSelectorHeader } from "./components/Date-Selector-Header/Date-Selector-Header";
import { DateComponentNavigation } from "./components/Date-Component-Navigation/Date-Component-Navigation";
import { DateDayNameIndex, DateDayNumber, DateMonthIndex } from "./types";
import { methodHasValue, hasValue } from "@utils/validations";
import { useClickOutside } from "@hooks/useClickOutside";
import { getMonthDisplayNameDefault, getRemappedDayIndex } from "./utils";
import { DateDaysGrid } from "./components/Date-Days-Grid/Date-Days-Grid";

export interface IDateSelectorProps
  extends IComponent,
    IThemeProps,
    IMarginProps {
  value?: Date;
  min?: Date;
  max?: Date;
  onChange?: (date: Date) => void;
  disabled?: boolean;
  gridContainerClassName?: string;
  gridContainerStyles?: React.CSSProperties;
  format?: (date: Date) => string;
  getDisplayDayNumber?: (day: DateDayNumber) => DateDayNumber;
  getDisplayDayName?: (day: DateDayNameIndex) => string; // 0 is monday, 6 is sunday
  getDisplayMonth?: (month: DateMonthIndex) => string;
  getDisplayYear?: (year: number) => string;
}

export const DateSelector = ({
  value,
  min,
  max,
  onChange,
  disabled = false,
  rootClassName,
  rootStyles,
  gridContainerClassName,
  gridContainerStyles = {},
  format,
  getDisplayDayNumber,
  getDisplayDayName,
  getDisplayMonth,
  getDisplayYear,
  theme = "light",
  ...spacingsProps
}: IDateSelectorProps) => {
  const dateSelectorNodeRef = useRef<HTMLDivElement>();

  const dateNow = new Date();
  //   states
  const [isOpen, setIsOpen] = useState(false);
  //initialize
  const [dateDate, setDateDate] = useState<DateDayNumber>(1);
  const [dateYear, setDateYear] = useState<number>(null);
  const [dateMonth, setDateMonth] = useState<DateMonthIndex>(null);

  useClickOutside(dateSelectorNodeRef, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (!disabled) {
      if (value) {
        setDateDate(value.getDate() as DateDayNumber);
        setDateYear(value.getFullYear());
        setDateMonth(value.getMonth() as DateMonthIndex);
      } else {
        const today = new Date();
        setDateYear(today.getFullYear());
        setDateMonth(today.getMonth() as DateMonthIndex);
      }
    }

    return () => {};
  }, [value, min, max, disabled]);

  const getMonthStartDay = () => {
    const startDay = new Date(dateYear, dateMonth).getDay();
    return getRemappedDayIndex(startDay as DateDayNameIndex);
  };

  const getMonthDays = (month) => {
    const offsetDate = 40;
    const monthDaysOffset = new Date(dateYear, month, offsetDate).getDate();
    return Number(offsetDate) - Number(monthDaysOffset);
  };

  const getHeaderText = (): string => {
    if (hasValue(value)) {
      if (methodHasValue(format)) {
        return format(value);
      }
      const dateNumberStr = methodHasValue(getDisplayDayNumber)
        ? getDisplayDayNumber(dateDate)
        : dateDate;
      const dateMonthStr = methodHasValue(getDisplayMonth)
        ? getDisplayMonth(dateMonth)
        : getMonthDisplayNameDefault(dateMonth);
      const dateYearStr = methodHasValue(getDisplayYear)
        ? getDisplayYear(dateYear)
        : dateYear;
      return `${dateNumberStr} ${dateMonthStr} ${dateYearStr}`;
    } else {
      return "All-time";
    }
  };

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          date_selector_container: true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`date_selector_theme_`, theme)
  );

  const gridContainerClasses = createComponentStyles(
    createLayoutStyles(
      {
        date_selector_grid_container: true,
      },
      gridContainerClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`date_selector_grid_theme_`, theme)
  );

  return (
    <div className={containerStyles} ref={dateSelectorNodeRef}>
      <DateSelectorHeader
        text={getHeaderText()}
        disabled={disabled}
        theme={theme}
        opened={isOpen}
        onClick={() => {
          if (!disabled) {
            setIsOpen(!isOpen);
          }
        }}
      />
      <div style={{ position: "relative" }}>
        {isOpen && (
          <div className={gridContainerClasses} style={gridContainerStyles}>
            <DateComponentNavigation
              value={
                methodHasValue(getDisplayYear)
                  ? getDisplayYear(dateYear)
                  : String(dateYear)
              }
            />
            <DateComponentNavigation
              value={
                methodHasValue(getDisplayMonth)
                  ? getDisplayMonth(dateMonth)
                  : getMonthDisplayNameDefault(dateMonth)
              }
            />
            <DateDaysGrid
              monthStartDay={getMonthStartDay()}
              monthNumberOfDays={getMonthDays(dateMonth)}
              prevMonthDays={getMonthDays(dateMonth - 1)}
              today={dateNow}
              selectedYear={dateYear} // the year user navigated to
              selectedMonth={dateMonth} // the month user navigated to
              value={value ? value : null} // value that binds to parent's component date state
              minimumDate={min}
              maximumDate={max}
              onClickDay={(newDateObj) => {
                onChange(newDateObj);
                setIsOpen(false);
              }}
              getDisplayDayNumber={getDisplayDayNumber}
              getDisplayDayName={getDisplayDayName}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateSelector;
