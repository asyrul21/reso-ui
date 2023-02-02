// https://medium.com/swlh/build-a-date-picker-in-15mins-using-javascript-react-from-scratch-f6932c77db09
// main reference is as above, but the implementation is my own

import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import DatesGrid from "./dates-grid/dates-grid";
import { getMonthName, getMappedDay } from "./utils";

const DateSelector = ({
  className,
  label,
  value = null,
  min = null,
  max = null,
  onChange = () => {},
  disabled = false,
}) => {
  const node = useRef();
  const dateNow = new Date();
  //   states
  const [isOpen, setIsOpen] = useState(false);
  //initialize
  const [dateDate, setDateDate] = useState(1);
  const [dateYear, setDateYear] = useState(null);
  const [dateMonth, setDateMonth] = useState(null);

  // close on click outside
  const handleClickComponent = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };
  useEffect(() => {
    // add event listener on mount
    document.addEventListener("mousedown", handleClickComponent);

    if (!disabled) {
      if (value) {
        setDateDate(value.getDate());
        setDateYear(value.getFullYear());
        setDateMonth(value.getMonth());
      } else {
        const today = new Date();
        setDateYear(today.getFullYear());
        setDateMonth(today.getMonth());
      }
    }

    // remove event listener when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickComponent);
    };
  }, [value, min, max, disabled]);

  const formatShownDate = () => {
    return `${dateDate} ${getMonthName(dateMonth)} ${dateYear}`;
  };

  const getMonthStartDay = () => {
    const startDay = new Date(dateYear, dateMonth).getDay();
    return getMappedDay(startDay);
  };

  const getMonthDays = (month) => {
    const offsetDate = "40";
    const monthDaysOffset = new Date(dateYear, month, offsetDate).getDate();
    return Number(offsetDate) - Number(monthDaysOffset);
  };

  const getComponentHeader = () => {
    if (value !== null) {
      return formatShownDate();
    } else {
      return "All-time";
    }
  };

  const containerClasses = classnames({
    no_select: true,
    component_dateSelector_container: true,
    [`${className}`]: true,
  });

  const dateSelectorClasses = classnames({
    component_dateSelector_dateSelector: true,
    component_dateSelector_dateSelector_opened: isOpen,
    component_dateSelector_container_disabled: disabled,
  });
  return (
    <div className={containerClasses} ref={node}>
      {label && <p className="component_dateSelector_label">{label}: </p>}
      <div
        className={dateSelectorClasses}
        onClick={() => {
          if (!disabled) {
            setIsOpen(!isOpen);
          }
        }}
      >
        {disabled && (
          <div className="component_dateSelector_disabled_overlay" />
        )}
        <p className="component_dateSelector_shownDate">
          {getComponentHeader()}
        </p>
      </div>
      <div className="relative_container">
        {isOpen && (
          <div className="component_dateSelector_datesGrid_container">
            {/*  year selector */}
            <div className="component_dateSelector_yearSelector">
              <div
                className="component_dateSelector_yearSelector_arrow"
                onClick={() => {
                  setDateYear(dateYear - 1);
                }}
              >
                {"<<"}
              </div>
              <span className="component_dateSelector_yearSelector_text">
                {dateYear}
              </span>
              <div
                className="component_dateSelector_yearSelector_arrow"
                onClick={() => {
                  setDateYear(dateYear + 1);
                }}
              >
                {">>"}
              </div>
            </div>
            {/* month selector */}
            <div className="component_dateSelector_monthSelector">
              <div
                className="component_dateSelector_monthSelector_arrow"
                onClick={() => {
                  if (dateMonth - 1 < 0) {
                    setDateMonth(11);
                  } else {
                    setDateMonth(dateMonth - 1);
                  }
                }}
              >
                {"<"}
              </div>
              <span className="component_dateSelector_monthSelector_text">
                {getMonthName(dateMonth)}
              </span>
              <div
                className="component_dateSelector_monthSelector_arrow"
                onClick={() => {
                  if (dateMonth + 1 > 11) {
                    setDateMonth(0);
                  } else {
                    setDateMonth(dateMonth + 1);
                  }
                }}
              >
                {">"}
              </div>
            </div>

            {/* dates grid */}
            <DatesGrid
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
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateSelector;
