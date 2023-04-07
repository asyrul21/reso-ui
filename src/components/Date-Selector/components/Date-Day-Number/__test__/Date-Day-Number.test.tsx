import React from "react";
import { render, screen } from "@testing-library/react";
import { DateDayNumberComponent } from "@components/Date-Selector/components/Date-Day-Number/Date-Day-Number";

describe("Date Selector Day Number Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<DateDayNumberComponent dayNumber={1} />);

    // debug();
    const component = screen.queryByTestId("date-day-number-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("1");
  });

  test("should render itself with custom dayNumberDisplay if provided as prop", () => {
    const { debug } = render(
      <DateDayNumberComponent dayNumber={1} dayNumberDisplay={"One"} />
    );

    // debug();
    const component = screen.queryByTestId("date-day-number-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("One");
  });

  test("should apply default root classNames", () => {
    const { debug } = render(<DateDayNumberComponent dayNumber={1} />);

    // debug();
    const component = screen.queryByTestId("date-day-number-root");
    expect(component).toHaveClass("date_selector_grid_unit");
    expect(component).toHaveClass("date_day_number_container");
  });

  test("should apply root theme classNames when provided as prop", () => {
    const { debug } = render(
      <DateDayNumberComponent dayNumber={1} theme="dark" />
    );

    // debug();
    const component = screen.queryByTestId("date-day-number-root");
    expect(component).toHaveClass("date_day_number_theme_dark");
  });

  test("should apply custom root className when provided as prop", () => {
    const { debug } = render(
      <DateDayNumberComponent
        dayNumber={1}
        rootClassName="sample_date_day_number_className"
      />
    );

    // debug();
    const component = screen.queryByTestId("date-day-number-root");
    // default
    expect(component).toHaveClass("date_selector_grid_unit");
    expect(component).toHaveClass("date_day_number_container");
    // custom
    expect(component).toHaveClass("sample_date_day_number_className");
  });

  describe("isSelected", () => {
    test("should apply default classNames when [isSelected] prop is true", () => {
      const { debug } = render(
        <DateDayNumberComponent dayNumber={1} isSelected={true} />
      );

      // debug();
      const component = screen.queryByTestId("date-day-number-root");
      // default
      expect(component).toHaveClass("date_selector_grid_unit");
      expect(component).toHaveClass("date_day_number_container");
      // selected
      expect(component).toHaveClass("date_day_number_selected_theme_light");
    });

    test("should apply default className but not selected classNames when [isSelected] prop is false", () => {
      const { debug } = render(
        <DateDayNumberComponent dayNumber={1} isSelected={false} />
      );

      // debug();
      const component = screen.queryByTestId("date-day-number-root");
      // default
      expect(component).toHaveClass("date_selector_grid_unit");
      expect(component).toHaveClass("date_day_number_container");
      // selected
      expect(component).not.toHaveClass("date_day_number_selected_theme_light");
    });

    test("should apply custom selected className when provided as prop", () => {
      const { debug } = render(
        <DateDayNumberComponent
          dayNumber={1}
          isSelected={true}
          selectedClassName="sample_date_day_number_selected_className"
        />
      );

      // debug();
      const component = screen.queryByTestId("date-day-number-root");
      // default
      expect(component).toHaveClass("date_day_number_selected_theme_light");
      // custom
      expect(component).toHaveClass(
        "sample_date_day_number_selected_className"
      );
    });

    test("should apply custom selected styles when provided as prop", () => {
      render(
        <DateDayNumberComponent
          dayNumber={1}
          isSelected={true}
          selectedStyles={{ border: "2px solid red" }}
        />
      );

      const component = screen.queryByTestId("date-day-number-root");
      expect(component).toHaveStyle("border: 2px solid red");
    });

    test("should not apply custom selected styles when disabled", () => {
      render(
        <DateDayNumberComponent
          dayNumber={1}
          isSelected={true}
          selectedStyles={{ border: "2px solid red" }}
          disabled
        />
      );

      const component = screen.queryByTestId("date-day-number-root");
      expect(component).not.toHaveStyle("border: 2px solid red");
    });
  });

  describe("Today Marker", () => {
    test("should render if [isToday] prop is true", () => {
      const { debug } = render(
        <DateDayNumberComponent dayNumber={1} isToday />
      );

      // debug();
      const component = screen.queryByTestId("date-day-number-today");
      expect(component).toBeInTheDocument();
      expect(component).toHaveTextContent("1");
    });

    test("should apply default marker classNames", () => {
      const { debug } = render(
        <DateDayNumberComponent dayNumber={1} isToday />
      );

      // debug();
      const component = screen.queryByTestId("date-day-number-today");
      expect(component).toHaveClass("date_day_number_today_marker");
    });

    test("should apply marker theme className when provided as prop", () => {
      const { debug } = render(
        <DateDayNumberComponent dayNumber={1} theme="dark" isToday />
      );

      // debug();
      const component = screen.queryByTestId("date-day-number-today");
      expect(component).toHaveClass("date_day_number_today_theme_dark");
    });

    test("should apply custom marker className with default classNames when provided as prop", () => {
      const { debug } = render(
        <DateDayNumberComponent
          dayNumber={1}
          markerClassName="sample_date_day_number_marker_className"
          isToday
        />
      );

      // debug();
      const component = screen.queryByTestId("date-day-number-today");
      // default
      expect(component).toHaveClass("date_day_number_today_marker");
      expect(component).toHaveClass("date_day_number_today_theme_light");
      // custom
      expect(component).toHaveClass("sample_date_day_number_marker_className");
    });

    test("should apply custom marker styles when provided as prop", () => {
      render(
        <DateDayNumberComponent
          dayNumber={1}
          isToday
          markerStyles={{ border: "2px solid red" }}
        />
      );

      const component = screen.queryByTestId("date-day-number-today");
      expect(component).toHaveStyle("border: 2px solid red");
    });
  });
});
