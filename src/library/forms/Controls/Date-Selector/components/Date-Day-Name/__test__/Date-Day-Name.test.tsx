import React from "react";
import { render, screen } from "@testing-library/react";
import { DateDayName } from "../Date-Day-Name";

describe("Date Selector Day Name Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<DateDayName>Sat</DateDayName>);

    // debug();
    const component = screen.queryByTestId("date-day-name-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("Sat");
  });

  test("should apply default classNames", () => {
    const { debug } = render(<DateDayName>Sat</DateDayName>);

    // debug();
    const component = screen.queryByTestId("date-day-name-root");
    expect(component).toHaveClass("date_selector_grid_unit");
    expect(component).toHaveClass("date_day_name_container");
  });

  test("should apply theme className when provided as prop", () => {
    const { debug } = render(<DateDayName theme="dark">Sat</DateDayName>);

    // debug();
    const component = screen.queryByTestId("date-day-name-root");
    expect(component).toHaveClass("date_day_name_theme_dark");
  });

  test("should apply custom className when provided as prop", () => {
    const { debug } = render(
      <DateDayName rootClassName="sample_date_date_name_className">
        Sat
      </DateDayName>
    );

    // debug();
    const component = screen.queryByTestId("date-day-name-root");
    expect(component).toHaveClass("sample_date_date_name_className");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <DateDayName rootStyles={{ border: "2px solid red" }}>Sat</DateDayName>
    );

    const component = screen.queryByTestId("date-day-name-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
