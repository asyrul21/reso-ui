import React from "react";
import DateDayName from "../date-day-name/date-day-name";
import DateDay from "../date-day/date-day";
import { getArrayFor, getDays, destructureDateComponents } from "../utils";

const DatesGrid = ({
  monthStartDay,
  monthNumberOfDays,
  prevMonthDays,
  today,
  value, // value that binds to parent's component date state
  minimumDate,
  maximumDate,
  selectedYear, // the year user navigated to
  selectedMonth, // the month user navigated to
  onClickDay = () => {},
}) => {
  const COLUMNS = 7;
  const ROWS = 6;
  const gridTemplateColumns = `repeat(${String(COLUMNS)}, 1fr)`;

  const isToday = () => {
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

  const isSelected = (day) => {
    if (value === null) {
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

  const isLessThanMinimum = (d) => {
    if (minimumDate === null) {
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

  const isMoreThanMaximum = (d) => {
    if (maximumDate === null) {
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

  const renderNormalDay = (key, dayNumber) => {
    return (
      <DateDay
        key={key}
        today={isToday() === dayNumber}
        onClick={(d) => {
          onClickDay(new Date(selectedYear, selectedMonth, d));
        }}
        selected={isSelected(dayNumber)}
      >
        {dayNumber}
      </DateDay>
    );
  };

  const renderDisabledDay = (key, dayNumber, nextOrPrevMonth = false) => {
    return (
      <DateDay
        key={key}
        disabled
        today={!nextOrPrevMonth && isToday() === dayNumber}
      >
        {dayNumber}
      </DateDay>
    );
  };

  const theFirstRow = (row) => {
    return row === 0;
  };

  const columnIsBeforeMonthStartDay = (col) => {
    return col < monthStartDay;
  };

  const populatedAllMonthDays = (count) => {
    return count > monthNumberOfDays - 1;
  };

  let dayCount = 0;
  let nextMonthDayCount = 0;
  // because monthStartDay is inclusive, so dont need to deduct 1
  let firstRowDays = COLUMNS - monthStartDay + 1;
  let prevMonthPadding = COLUMNS - firstRowDays;
  return (
    <div
      className="component_datesGrid_container"
      style={{
        gridTemplateColumns,
      }}
    >
      {getDays().map((day, key) => {
        return <DateDayName key={key}>{day}</DateDayName>;
      })}
      {getArrayFor(ROWS).map((dayRow, rowKey) => {
        let result = [];
        getArrayFor(COLUMNS).forEach((dayCol, colKey) => {
          if (theFirstRow(rowKey)) {
            if (columnIsBeforeMonthStartDay(colKey)) {
              const d = prevMonthDays - prevMonthPadding;
              result.push(renderDisabledDay(`${dayRow}-${dayCol}`, d, true));
              prevMonthPadding--;
            } else {
              dayCount++;
              if (isLessThanMinimum(dayCount) || isMoreThanMaximum(dayCount)) {
                result.push(renderDisabledDay(`${dayRow}-${dayCol}`, dayCount));
              } else {
                result.push(renderNormalDay(`${dayRow}-${dayCol}`, dayCount));
              }
            }
          } else if (populatedAllMonthDays(dayCount)) {
            nextMonthDayCount++;
            result.push(
              renderDisabledDay(`${dayRow}-${dayCol}`, nextMonthDayCount, true)
            );
          }
          // all the other month days
          else {
            dayCount++;
            if (isLessThanMinimum(dayCount) || isMoreThanMaximum(dayCount)) {
              result.push(renderDisabledDay(`${dayRow}-${dayCol}`, dayCount));
            } else {
              result.push(renderNormalDay(`${dayRow}-${dayCol}`, dayCount));
            }
          }
        });
        return result;
      })}
    </div>
  );
};

export default DatesGrid;
