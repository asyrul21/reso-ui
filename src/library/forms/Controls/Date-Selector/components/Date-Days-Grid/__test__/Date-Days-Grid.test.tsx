import React from "react";
import classnames from "classnames";
import { render, screen } from "@testing-library/react";
import { methodHasValue, stringHasValue } from "@utils/validations";

// import from index does not work for jest.spyOn
import { DateDaysGrid } from "@forms/Controls/Date-Selector/components/Date-Days-Grid/Date-Days-Grid";
import * as DateDayNameModule from "@forms/Controls/Date-Selector/components/Date-Day-Name/Date-Day-Name";
import * as DateDayNumberModule from "@forms/Controls/Date-Selector/components/Date-Day-Number/Date-Day-Number";

describe("Date Selector Days Grid Component Unit Tests", () => {
  beforeEach(() => {
    jest.spyOn(DateDayNameModule, "DateDayName").mockImplementation((props) => {
      const { rootClassName, rootStyles, children } = props;

      return (
        <div
          data-testid="date-selector-day-name-mock"
          className={rootClassName}
          style={rootStyles}
        >
          {children}
        </div>
      );
    });

    jest
      .spyOn(DateDayNumberModule, "DateDayNumberComponent")
      .mockImplementation((props) => {
        const {
          dayNumber,
          dayNumberDisplay,
          isToday,
          isSelected,
          disabled,
          onClick,
          rootClassName,
          rootStyles,
        } = props;

        const containerClasses = classnames({
          rootClassName: !!rootClassName,
          date_day_number_mock_selected: isSelected,
          date_day_number_mock_today: isToday,
          date_day_number_mock_disabled: disabled,
        });

        const dayNumberText = stringHasValue(dayNumberDisplay)
          ? dayNumberDisplay
          : dayNumber;

        return (
          <div
            data-testid="date-selector-day-number-mock"
            className={containerClasses}
            style={rootStyles}
            onClick={
              methodHasValue(onClick) ? () => onClick(dayNumber) : undefined
            }
          >
            {dayNumberText}
          </div>
        );
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should render itself without error", () => {
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
      />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-grid-root");
    expect(component).toBeInTheDocument();
  });

  test("should apply default className", () => {
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
      />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-grid-root");
    expect(component).toHaveClass("date_days_grid_container");
  });

  test("should apply theme classNames when provided as prop", () => {
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
        theme="dark"
      />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-grid-root");
    expect(component).toHaveClass("date_days_grid_theme_dark");
  });

  test("should apply custom className when provided as prop", () => {
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
        rootClassName="date_selector_grid_custom_className"
      />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-grid-root");
    expect(component).toHaveClass("date_selector_grid_custom_className");
  });

  test("should apply custom styles when provided as prop", () => {
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
        rootStyles={{ border: "2px solid red" }}
      />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-grid-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should render default day names correctly", () => {
    const defaultDayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
      />
    );

    // debug();
    const dayNameComponents = screen.queryAllByTestId(
      "date-selector-day-name-mock"
    );

    dayNameComponents.map((component, idx) => {
      expect(component).toHaveTextContent(defaultDayNames[idx]);
    });
  });

  test("should render custom day names correctly", () => {
    const customDayNames = ["Isn", "Sel", "Rab", "Kha", "Jum", "Sab", "Aha"];
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
        getDisplayDayName={(day) => {
          return customDayNames[day];
        }}
      />
    );

    // debug();
    const dayNameComponents = screen.queryAllByTestId(
      "date-selector-day-name-mock"
    );

    dayNameComponents.map((component, idx) => {
      expect(component).toHaveTextContent(customDayNames[idx]);
    });
  });

  test("should render 42 DayNumber components", () => {
    // 6 rows x 7 columns
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
      />
    );

    // debug();
    const dayNumberComponents = screen.queryAllByTestId(
      "date-selector-day-number-mock"
    );

    expect(dayNumberComponents.length).toEqual(42);
  });

  test("should render custom day numbers correctly", () => {
    const customDayNumbers = { 1: "One", 2: "Two", 3: "Thr", 4: "Fou" };
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
        getDisplayDayNumber={(day) => {
          if (customDayNumbers[day]) {
            return customDayNumbers[day];
          }

          return day;
        }}
      />
    );

    // debug();
    const customDayNumber1 = screen.queryAllByText("One");
    expect(customDayNumber1[0]).toBeInTheDocument();

    const customDayNumber2 = screen.queryAllByText("Two");
    expect(customDayNumber2[0]).toBeInTheDocument();

    const customDayNumber3 = screen.queryAllByText("Thr");
    expect(customDayNumber3[0]).toBeInTheDocument();

    const customDayNumber4 = screen.queryAllByText("Fou");
    expect(customDayNumber4[0]).toBeInTheDocument();
  });

  test("should render today DayNumber correctly", () => {
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
      />
    );

    // debug();
    const dayNumberComponents = screen.queryAllByText("1");
    const today = dayNumberComponents[0];

    expect(today).toBeInTheDocument();
    expect(today).toHaveClass("date_day_number_mock_today");
  });

  test("should render 12 disabled days after June days are over", () => {
    // because there only 30 days in June
    // and there total of 6 rows x 7 columns rendered days = 42
    // and first day of June 2020 starts on Monday (monthStartDay = 0)
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
      />
    );

    // debug();
    const dayNumberComponents = screen.queryAllByTestId(
      "date-selector-day-number-mock"
    );

    const last12Days = dayNumberComponents.slice(-12);
    last12Days.map((Day) => {
      expect(Day).toHaveClass("date_day_number_mock_disabled");
    });
  });

  test("should render 2 (before) and 10 (after) disabled days before June days start and after June days are over", () => {
    // because there only 30 days in June
    // and there total of 6 rows x 7 columns rendered days = 42
    // and first day of June 2022 starts on Wednesday (monthStartDay = 2)
    const todayMock = new Date(2022, 5, 1); // Wed June 01 2022

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={2}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2022}
        selectedMonth={5}
      />
    );

    // debug();
    const dayNumberComponents = screen.queryAllByTestId(
      "date-selector-day-number-mock"
    );

    const first2Days = dayNumberComponents.slice(0, 2);
    first2Days.map((Day) => {
      expect(Day).toHaveClass("date_day_number_mock_disabled");
    });

    const last10Days = dayNumberComponents.slice(-10);
    last10Days.map((Day) => {
      expect(Day).toHaveClass("date_day_number_mock_disabled");
    });

    const juneDays = dayNumberComponents.slice(2, -10);
    expect(juneDays.length).toEqual(30);
    juneDays.map((Day) => {
      expect(Day).not.toHaveClass("date_day_number_mock_disabled");
    });
  });

  test("should render 1 selected day when passed as [value] prop", () => {
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
    const selectedDate = new Date(2020, 5, 5);

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
        value={selectedDate}
      />
    );

    // debug();
    const dayNumberComponents = screen.queryAllByText("5");
    const today = dayNumberComponents[0];

    expect(today).toBeInTheDocument();
    expect(today).toHaveClass("date_day_number_mock_selected");
  });

  test("should render 1 selected and today day when passed as [value] prop", () => {
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
    const selectedDate = new Date(2020, 5, 1);

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
        value={selectedDate}
      />
    );

    // debug();
    const dayNumberComponents = screen.queryAllByText("1");
    const today = dayNumberComponents[0];

    expect(today).toBeInTheDocument();
    expect(today).toHaveClass("date_day_number_mock_selected");
    expect(today).toHaveClass("date_day_number_mock_today");
  });

  test("should call onClick when clicked a normal day", () => {
    const onClickSpy = jest.fn();
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
        onClickDay={onClickSpy}
      />
    );

    // debug();
    const dayNumberComponents = screen.queryAllByTestId(
      "date-selector-day-number-mock"
    );

    dayNumberComponents[4].click(); // click on 5th June

    expect(onClickSpy).toHaveBeenCalledWith(new Date(2020, 5, 5));
  });

  test("should not call onClick when clicked a disabled day", () => {
    const onClickSpy = jest.fn();
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
        onClickDay={onClickSpy}
      />
    );

    // debug();
    const dayNumberComponents = screen.queryAllByTestId(
      "date-selector-day-number-mock"
    );
    const disabledDay = dayNumberComponents[dayNumberComponents.length - 1]; // 12th JULY - should be disabled

    disabledDay.click();

    expect(onClickSpy).not.toHaveBeenCalled();
  });

  test("should render 3 (before) disabled days before June if min date is passed as prop", () => {
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
    const minDateMock = new Date(2020, 5, 4);

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
        minimumDate={minDateMock}
      />
    );

    // debug();
    const dayNumberComponents = screen.queryAllByTestId(
      "date-selector-day-number-mock"
    );

    const first3Days = dayNumberComponents.slice(0, 3);
    first3Days.map((Day) => {
      expect(Day).toHaveClass("date_day_number_mock_disabled");
    });

    const otherJuneDays = dayNumberComponents.slice(3, 30);
    otherJuneDays.map((Day) => {
      expect(Day).not.toHaveClass("date_day_number_mock_disabled");
    });

    const julyDays = dayNumberComponents.slice(30);
    julyDays.map((Day) => {
      expect(Day).toHaveClass("date_day_number_mock_disabled");
    });
  });

  test("should render disabled days on 10th June onwards if max date is passed as prop", () => {
    const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
    const maxDateMock = new Date(2020, 5, 10);

    const { debug } = render(
      <DateDaysGrid
        monthStartDay={0}
        monthNumberOfDays={30}
        prevMonthDays={31}
        today={todayMock}
        selectedYear={2020}
        selectedMonth={5}
        maximumDate={maxDateMock}
      />
    );

    // debug();
    const dayNumberComponents = screen.queryAllByTestId(
      "date-selector-day-number-mock"
    );

    const first9Days = dayNumberComponents.slice(0, 10);
    first9Days.map((Day) => {
      expect(Day).not.toHaveClass("date_day_number_mock_disabled");
    });

    const otherDays = dayNumberComponents.slice(10);
    otherDays.map((Day) => {
      expect(Day).toHaveClass("date_day_number_mock_disabled");
    });
  });
});
