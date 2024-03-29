import React, { useEffect, useRef, useState } from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";
import { DateDayNameIndex, DateDayNumber, DateMonthIndex } from "./types";

// !! IMPORT OTHER COMPONENTS FIRST BEFORE IMPORTING STYLE FILES
import { Icon } from "../../../components/Icon";
import { DateSelectorHeader } from "./components/Date-Selector-Header/Date-Selector-Header";
import {
  DateComponentNavigation,
  ICON_SIZE,
} from "./components/Date-Component-Navigation/Date-Component-Navigation";
import { DateDaysGrid } from "./components/Date-Days-Grid/Date-Days-Grid";

// styles
import "./styles/Date-Selector.layout.scss";
import "./styles/Date-Selector.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";
import { methodHasValue, hasValue } from "../../../utils/validations";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { getMonthDisplayNameDefault, getRemappedDayIndex } from "./utils";

// icons
import { ChevronDoubleLeft, ChevronDoubleRight } from "../../../icons";

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
  getDisplayDayNumber?: (day: DateDayNumber) => string | DateDayNumber;
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
  // initialize
  const [dateDate, setDateDate] = useState<DateDayNumber>(1);
  const [dateYear, setDateYear] = useState<number>(null);
  const [dateMonth, setDateMonth] = useState<DateMonthIndex>(null);

  useClickOutside(dateSelectorNodeRef, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (value) {
      setDateDate(value.getDate() as DateDayNumber);
      setDateYear(value.getFullYear());
      setDateMonth(value.getMonth() as DateMonthIndex);
    } else {
      const today = new Date();
      setDateYear(today.getFullYear());
      setDateMonth(today.getMonth() as DateMonthIndex);
    }

    // tslint:disable-next-line: no-empty
    return () => {};
  }, [value, min, max]);

  const getMonthStartDay = () => {
    const startDay = new Date(dateYear, dateMonth).getDay();

    return getRemappedDayIndex(startDay as DateDayNameIndex);
  };

  const getMonthDays = (month: DateMonthIndex) => {
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
    }

    return "All-time";
  };

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          date_selector_container: true,
          date_selector_container_opened: isOpen,
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
        date_selector_grid_container_opened: isOpen,
      },
      gridContainerClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`date_selector_grid_theme_`, theme)
  );

  return (
    <div
      data-testid="date-selector-root"
      className={containerStyles}
      style={rootStyles}
      ref={dateSelectorNodeRef}
    >
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
        <div
          data-testid="date-selector-expanded"
          className={gridContainerClasses}
          style={gridContainerStyles}
        >
          {/*  year selector */}
          <DateComponentNavigation
            value={
              methodHasValue(getDisplayYear)
                ? getDisplayYear(dateYear)
                : String(dateYear)
            }
            onClickPrevious={() => {
              setDateYear(dateYear - 1);
            }}
            onClickNext={() => {
              setDateYear(dateYear + 1);
            }}
            customPreviousComponent={() => (
              <Icon
                SvgIcon={ChevronDoubleLeft}
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            )}
            customNextComponent={() => (
              <Icon
                SvgIcon={ChevronDoubleRight}
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            )}
            theme={theme}
          />
          {/* month selector */}
          <DateComponentNavigation
            value={
              methodHasValue(getDisplayMonth)
                ? getDisplayMonth(dateMonth)
                : getMonthDisplayNameDefault(dateMonth)
            }
            onClickPrevious={() => {
              if (dateMonth - 1 < 0) {
                setDateMonth(11);
              } else {
                setDateMonth((dateMonth - 1) as DateMonthIndex);
              }
            }}
            onClickNext={() => {
              if (dateMonth + 1 > 11) {
                setDateMonth(0);
              } else {
                setDateMonth((dateMonth + 1) as DateMonthIndex);
              }
            }}
            theme={theme}
          />
          <DateDaysGrid
            monthStartDay={getMonthStartDay()}
            monthNumberOfDays={getMonthDays(dateMonth)}
            prevMonthDays={getMonthDays((dateMonth - 1) as DateMonthIndex)}
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
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
