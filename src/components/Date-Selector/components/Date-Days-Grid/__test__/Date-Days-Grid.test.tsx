import React from "react";
import { DateDaysGrid } from "@components/Date-Selector/components/Date-Days-Grid/Date-Days-Grid";
import { fireEvent, render, screen } from "@testing-library/react";

// import from index does not work for jest.spyOn
import * as DateDayNameModule from "@components/Date-Selector/components/Date-Day-Name/Date-Day-Name";
import * as DateDayNumberModule from "@components/Date-Selector/components/Date-Day-Number/Date-Day-Number";
import { methodHasValue, stringHasValue } from "@utils/validations";

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

        const getDataTestId = () => {
          let testid = "date-selector-day-number-mock";
          if (isToday) {
            testid += "-today";
          }
          if (isSelected) {
            testid += "-selected";
          }
          if (disabled) {
            testid += "-disabled";
          }
          return testid;
        };

        const dayNumberText = stringHasValue(dayNumberDisplay)
          ? dayNumberDisplay
          : dayNumber;
        return (
          <div
            data-testid={getDataTestId()}
            className={rootClassName}
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

  test("should render 29 normal day numbers", () => {
    // because 1 day will be 'todayMock'
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

    expect(dayNumberComponents.length).toEqual(29);
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

  test("should render 1 today day number", () => {
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
      "date-selector-day-number-mock-today"
    );

    expect(dayNumberComponents.length).toEqual(1);
    expect(dayNumberComponents[0]).toHaveTextContent("1");
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
      "date-selector-day-number-mock-disabled"
    );

    expect(dayNumberComponents.length).toEqual(12);
  });

  test("should render 2 (before) + 10 (after) = 12 disabled days before June days start and after June days are over", () => {
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
      "date-selector-day-number-mock-disabled"
    );

    expect(dayNumberComponents.length).toEqual(12);
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
    const dayNumberComponents = screen.queryAllByTestId(
      "date-selector-day-number-mock-selected"
    );

    expect(dayNumberComponents.length).toEqual(1);
    expect(dayNumberComponents[0]).toHaveTextContent("5");
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
    const dayNumberComponents = screen.queryAllByTestId(
      "date-selector-day-number-mock-today-selected"
    );

    expect(dayNumberComponents.length).toEqual(1);
    expect(dayNumberComponents[0]).toHaveTextContent("1");
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

    expect(onClickSpy).toHaveBeenCalledWith(new Date(2020, 5, 6));
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
      "date-selector-day-number-mock-disabled"
    );

    dayNumberComponents[0].click(); // click on 5th June

    expect(onClickSpy).not.toHaveBeenCalledWith();
  });
});
