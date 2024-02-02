import React from "react";
import { render, screen } from "@testing-library/react";
import { DateSelector } from "../Date-Selector";

import * as DateSelectorHeaderModule from "../components/Date-Selector-Header/Date-Selector-Header";
import * as DateComponentNavigationModule from "../components/Date-Component-Navigation/Date-Component-Navigation";

describe("Date Selector Overall Component Unit Tests", () => {
  beforeEach(() => {
    jest
      .spyOn(DateSelectorHeaderModule, "DateSelectorHeader")
      .mockImplementation((props) => {
        const { rootClassName, rootStyles, text, onClick } = props;

        return (
          <button
            data-testid="date-selector-header-mock"
            className={rootClassName}
            style={rootStyles}
            onClick={onClick}
          >
            {text}
          </button>
        );
      });

    jest
      .spyOn(DateComponentNavigationModule, "DateComponentNavigation")
      .mockImplementation((props) => {
        const {
          value,
          onClickPrevious,
          onClickNext,
          rootClassName,
          rootStyles,
        } = props;

        return (
          <div
            data-testid="date-selector-component-navigation-mock"
            className={rootClassName}
            style={rootStyles}
          >
            <button
              data-testid="date-selector-component-navigation-mock-prev"
              onClick={onClickPrevious}
            >
              {"<"}
            </button>
            <span>{value}</span>
            <button
              data-testid="date-selector-component-navigation-mock-next"
              onClick={onClickNext}
            >
              {">"}
            </button>
          </div>
        );
      });

    // we do not mock Date-Days-Grid.
    // we will mock it when we need to
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should render itself without error", () => {
    const { debug } = render(<DateSelector />);

    // debug();
    const component = screen.queryByTestId("date-selector-root");
    expect(component).toBeInTheDocument();
  });

  test("should apply default root className", () => {
    const { debug } = render(<DateSelector />);

    // debug();
    const component = screen.queryByTestId("date-selector-root");
    expect(component).toHaveClass("date_selector_container");
  });

  test("should apply default theme className", () => {
    const { debug } = render(<DateSelector />);

    // debug();
    const component = screen.queryByTestId("date-selector-root");
    expect(component).toHaveClass("date_selector_theme_light");
  });

  test("should apply theme classNames when provided as prop", () => {
    const { debug } = render(<DateSelector theme="dark" />);

    // debug();
    const component = screen.queryByTestId("date-selector-root");
    expect(component).toHaveClass("date_selector_theme_dark");
  });

  test("should apply custom className when provided as prop", () => {
    const { debug } = render(
      <DateSelector rootClassName="sample_date_selector_className" />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-root");
    expect(component).toHaveClass("sample_date_selector_className");
  });

  test("should apply custom styles when provided as prop", () => {
    render(<DateSelector rootStyles={{ border: "2px solid red" }} />);

    const component = screen.queryByTestId("date-selector-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  describe("Date Selector Header", () => {
    test("should show current formatted Date correctly", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(<DateSelector value={todayMock} />);

      //   debug();
      const component = screen.queryByTestId("date-selector-header-mock");

      expect(component).toHaveTextContent("1 June 2020");
    });

    test("should show custom-formatted formatted Date correctly", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(
        <DateSelector
          value={todayMock}
          format={(d) => {
            return "test header date format!";
          }}
        />
      );

      //   debug();
      const component = screen.queryByTestId("date-selector-header-mock");

      expect(component).toHaveTextContent("test header date format!");
    });

    test("should not show expanded portion by default", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(<DateSelector value={todayMock} />);

      //   debug();
      const component = screen.queryByTestId("date-selector-expanded");
      expect(component).not.toHaveClass("date_selector_grid_container_opened");
    });

    test("should show expanded portion when clicked", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(<DateSelector value={todayMock} />);

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const component = screen.queryByTestId("date-selector-expanded");
      expect(component).toHaveClass("date_selector_grid_container_opened");
    });

    test("should not show expanded portion when clicked but disabled", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(<DateSelector value={todayMock} disabled />);

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const component = screen.queryByTestId("date-selector-expanded");
      expect(component).not.toHaveClass("date_selector_grid_container_opened");
    });
  });

  describe("Year navigation", () => {
    test("should show current year based on value passed as prop", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(<DateSelector value={todayMock} />);

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const components = screen.queryAllByTestId(
        "date-selector-component-navigation-mock"
      );
      const yearNavigation = components[0];

      expect(yearNavigation).toHaveTextContent("2020");
    });

    test("should show next year when next button is clicked", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(<DateSelector value={todayMock} />);

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const components = screen.queryAllByTestId(
        "date-selector-component-navigation-mock-next"
      );
      const yearNavigationNext = components[0];
      yearNavigationNext.click();

      const navComponents = screen.queryAllByTestId(
        "date-selector-component-navigation-mock"
      );
      const yearNavigation = navComponents[0];
      expect(yearNavigation).toHaveTextContent("2021");
    });

    test("should show prev year when prev button is clicked", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(<DateSelector value={todayMock} />);

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const components = screen.queryAllByTestId(
        "date-selector-component-navigation-mock-prev"
      );
      const yearNavigationNext = components[0];
      yearNavigationNext.click();

      const navComponents = screen.queryAllByTestId(
        "date-selector-component-navigation-mock"
      );
      const yearNavigation = navComponents[0];
      expect(yearNavigation).toHaveTextContent("2019");
    });

    test("should show custom display year name when provided as prop", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(
        <DateSelector
          value={todayMock}
          getDisplayYear={(y) => {
            return "1234";
          }}
        />
      );

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const components = screen.queryAllByTestId(
        "date-selector-component-navigation-mock"
      );
      const yearNavigation = components[0];

      expect(yearNavigation).toHaveTextContent("1234");
    });
  });

  describe("Month navigation", () => {
    test("should show current month based on value passed as prop", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(<DateSelector value={todayMock} />);

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const components = screen.queryAllByTestId(
        "date-selector-component-navigation-mock"
      );
      const monthNavigation = components[1];

      expect(monthNavigation).toHaveTextContent("June");
    });

    test("should show next month when next button is clicked", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(<DateSelector value={todayMock} />);

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const components = screen.queryAllByTestId(
        "date-selector-component-navigation-mock-next"
      );
      const monthNavigationNext = components[1];
      monthNavigationNext.click();

      const navComponents = screen.queryAllByTestId(
        "date-selector-component-navigation-mock"
      );
      const monthNavigation = navComponents[1];
      expect(monthNavigation).toHaveTextContent("July");
    });

    test("should show prev month when prev button is clicked", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(<DateSelector value={todayMock} />);

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const components = screen.queryAllByTestId(
        "date-selector-component-navigation-mock-prev"
      );
      const monthNavigationNext = components[1];
      monthNavigationNext.click();

      const navComponents = screen.queryAllByTestId(
        "date-selector-component-navigation-mock"
      );
      const monthNavigation = navComponents[1];
      expect(monthNavigation).toHaveTextContent("May");
    });

    test("should show custom display month name when provided as prop", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(
        <DateSelector
          value={todayMock}
          getDisplayMonth={(m) => {
            return "Alexandro";
          }}
        />
      );

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const components = screen.queryAllByTestId(
        "date-selector-component-navigation-mock"
      );
      const yearNavigation = components[1];

      expect(yearNavigation).toHaveTextContent("Alexandro");
    });
  });

  describe("Days Grid", () => {
    test("should show Days Grid when expanded", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(<DateSelector value={todayMock} />);

      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      //   debug();
      const component = screen.queryByTestId("date-selector-grid-root");
      expect(component).toBeInTheDocument();
    });

    test("should call onChange with correct value when a Day Number in the grid is clicked", () => {
      const onChangeSpy = jest.fn();
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(
        <DateSelector value={todayMock} onChange={onChangeSpy} />
      );

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const components = screen.queryAllByText("3");
      const newDay = components[0]; // 3rd of current month
      newDay.click();

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2020, 5, 3));
    });

    test("should not call onChange if a disabled Day Number in the grid is clicked", () => {
      const onChangeSpy = jest.fn();
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(
        <DateSelector value={todayMock} onChange={onChangeSpy} />
      );

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      const components = screen.queryAllByText("3");
      const newDay = components[1]; // 3rd of next month, should be disabled
      newDay.click();

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    test("should show custom display Day Names when provided as prop", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug } = render(
        <DateSelector
          value={todayMock}
          getDisplayDayName={(dayName) => {
            return "X";
          }}
        />
      );

      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      //   debug();
      const dayNameComponents = screen.queryAllByText("X");
      expect(dayNameComponents.length).toEqual(7);
    });

    test("should show custom display Day Numbers when provided as prop", () => {
      const todayMock = new Date(2020, 5, 1); // Mon June 01 2020
      const { debug, rerender } = render(
        <DateSelector
          value={todayMock}
          getDisplayDayNumber={(dayName) => {
            return "X";
          }}
        />
      );

      //   debug();
      const header = screen.queryByTestId("date-selector-header-mock");
      header.click();

      //   debug();
      const dayNumberComponents = screen.queryAllByText("X");
      expect(dayNumberComponents.length).toEqual(42); // 6 rows x 7 columns
    });
  });
});
