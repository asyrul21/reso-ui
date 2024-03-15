import React from "react";
import { act, render, screen } from "@testing-library/react";
import { DateComponentNavigation } from "../Date-Component-Navigation";

describe("Date Component Navigation Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<DateComponentNavigation value="sample" />);

    // debug();
    const component = screen.queryByTestId("date-selector-nav-root");
    expect(component).toBeInTheDocument();
  });

  test("should apply default root className", () => {
    const { debug } = render(<DateComponentNavigation value="sample" />);

    // debug();
    const component = screen.queryByTestId("date-selector-nav-root");
    expect(component).toHaveClass("date_component_navigation_container");
  });

  test("should apply custom root className when provided as prop", () => {
    const { debug } = render(
      <DateComponentNavigation
        value="sample"
        rootClassName="sample_date_selector_nav_root_className"
      />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-nav-root");
    expect(component).toHaveClass("sample_date_selector_nav_root_className");
  });

  test("should apply custom root styles when provided as prop", () => {
    render(
      <DateComponentNavigation
        value="test"
        rootStyles={{ border: "2px solid red" }}
      />
    );

    const component = screen.queryByTestId("date-selector-nav-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply root theme classNames when provided as prop", () => {
    const { debug } = render(
      <DateComponentNavigation value="sample" theme="dark" />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-nav-root");
    expect(component).toHaveClass(
      "date_component_navigation_container_theme_dark"
    );
  });

  describe("Previous Button", () => {
    test("should apply default previous button className", () => {
      const { debug } = render(<DateComponentNavigation value="sample" />);

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-prev");
      expect(component).toHaveClass("date_component_navigation_button");
    });

    test("should apply custom previous button className when provided as prop", () => {
      const { debug } = render(
        <DateComponentNavigation
          value="sample"
          previousBtnClassName="sample_date_selector_prev_btn_className"
        />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-prev");
      expect(component).toHaveClass("sample_date_selector_prev_btn_className");
    });

    test("should apply previous theme classNames when provided as prop", () => {
      const { debug } = render(
        <DateComponentNavigation value="sample" theme="dark" />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-prev");
      expect(component).toHaveClass(
        "date_component_navigation_button_theme_dark"
      );
    });

    test("should apply custom previous button styles when provided as prop", () => {
      render(
        <DateComponentNavigation
          value="test"
          previousBtnStyles={{ border: "2px solid red" }}
        />
      );

      const component = screen.queryByTestId("date-selector-nav-btn-prev");
      expect(component).toHaveStyle("border: 2px solid red");
    });

    test("should call onClickPrevious when clicked previous button", () => {
      const onClickSpy = jest.fn();
      const { debug } = render(
        <DateComponentNavigation value="sample" onClickPrevious={onClickSpy} />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-prev");
      act(() => {
        component.click();
      });
      expect(onClickSpy).toHaveBeenCalled();
    });

    test("should not call onClickPrevious when clicked previous button and previous button is disabled", () => {
      const onClickSpy = jest.fn();
      const { debug } = render(
        <DateComponentNavigation
          value="sample"
          onClickPrevious={onClickSpy}
          disablePrevious
        />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-prev");
      act(() => {
        component.click();
      });
      expect(onClickSpy).not.toHaveBeenCalled();
    });

    test("should render custom previous component when provided as prop", () => {
      const CustomPrevComponent = () => {
        return <div data-testid="date-selector-nav-custom-prev">Prev</div>;
      };
      const { debug } = render(
        <DateComponentNavigation
          value="sample"
          customPreviousComponent={CustomPrevComponent}
        />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-prev");
      expect(component).toBeInTheDocument();

      const customComponent = screen.queryByTestId(
        "date-selector-nav-custom-prev"
      );
      expect(customComponent).toBeInTheDocument();
    });
  });

  describe("Next Button", () => {
    test("should apply default next button className", () => {
      const { debug } = render(<DateComponentNavigation value="sample" />);

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-next");
      expect(component).toHaveClass("date_component_navigation_button");
    });

    test("should apply custom next button className when provided as prop", () => {
      const { debug } = render(
        <DateComponentNavigation
          value="sample"
          nextBtnClassName="sample_date_selector_next_btn_className"
        />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-next");
      expect(component).toHaveClass("sample_date_selector_next_btn_className");
    });

    test("should apply next theme classNames when provided as prop", () => {
      const { debug } = render(
        <DateComponentNavigation value="sample" theme="dark" />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-next");
      expect(component).toHaveClass(
        "date_component_navigation_button_theme_dark"
      );
    });

    test("should apply custom next button styles when provided as prop", () => {
      render(
        <DateComponentNavigation
          value="test"
          nextBtnStyles={{ border: "2px solid red" }}
        />
      );

      const component = screen.queryByTestId("date-selector-nav-btn-next");
      expect(component).toHaveStyle("border: 2px solid red");
    });

    test("should call onClickNext when clicked next button", () => {
      const onClickSpy = jest.fn();
      const { debug } = render(
        <DateComponentNavigation value="sample" onClickNext={onClickSpy} />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-next");
      act(() => {
        component.click();
      });
      expect(onClickSpy).toHaveBeenCalled();
    });

    test("should not call onClickNext when clicked next button and next button is disabled", () => {
      const onClickSpy = jest.fn();
      const { debug } = render(
        <DateComponentNavigation
          value="sample"
          onClickNext={onClickSpy}
          disableNext
        />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-next");
      act(() => {
        component.click();
      });
      expect(onClickSpy).not.toHaveBeenCalled();
    });

    test("should render custom next component when provided as prop", () => {
      const CustomNextComponent = () => {
        return <div data-testid="date-selector-nav-custom-next">Next</div>;
      };
      const { debug } = render(
        <DateComponentNavigation
          value="sample"
          customNextComponent={CustomNextComponent}
        />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-btn-next");
      expect(component).toBeInTheDocument();

      const customComponent = screen.queryByTestId(
        "date-selector-nav-custom-next"
      );
      expect(customComponent).toBeInTheDocument();
    });
  });

  describe("Value Text", () => {
    test("should apply default next button className", () => {
      const { debug } = render(<DateComponentNavigation value="sample" />);

      // debug();
      const component = screen.queryByTestId("date-selector-nav-text");
      expect(component).toHaveClass("date_component_navigation_text");
    });

    test("should apply custom next button className when provided as prop", () => {
      const { debug } = render(
        <DateComponentNavigation
          value="sample"
          textClassName="sample_date_selector_nav_text_className"
        />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-text");
      expect(component).toHaveClass("sample_date_selector_nav_text_className");
    });

    test("should apply custom next button styles when provided as prop", () => {
      render(
        <DateComponentNavigation
          value="test"
          textStyles={{ border: "2px solid red" }}
        />
      );

      const component = screen.queryByTestId("date-selector-nav-text");
      expect(component).toHaveStyle("border: 2px solid red");
    });

    test("should apply text theme classNames when provided as prop", () => {
      const { debug } = render(
        <DateComponentNavigation value="sample" theme="dark" />
      );

      // debug();
      const component = screen.queryByTestId("date-selector-nav-text");
      expect(component).toHaveClass(
        "date_component_navigation_text_theme_dark"
      );
    });
  });
});
