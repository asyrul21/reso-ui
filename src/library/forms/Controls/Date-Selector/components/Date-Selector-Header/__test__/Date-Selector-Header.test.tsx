import React from "react";
import { act, render, screen } from "@testing-library/react";
import { DateSelectorHeader } from "../Date-Selector-Header";

describe("Date Selector Header Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<DateSelectorHeader text="sample" />);

    // debug();
    const component = screen.queryByTestId("date-selector-header-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("sample");
  });

  test("should apply default className", () => {
    const { debug } = render(<DateSelectorHeader text="sample" />);

    // debug();
    const component = screen.queryByTestId("date-selector-header-root");
    expect(component).toHaveClass("date_selector_header");
  });

  test("should apply default and opened classNames when [opened] prop is true", () => {
    const { debug } = render(
      <DateSelectorHeader text="sample" opened={true} />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-header-root");
    expect(component).toHaveClass("date_selector_header");
    expect(component).toHaveClass("date_selector_header_opened");
  });

  test("should apply default className but not opened classNames when [opened] prop is false", () => {
    const { debug } = render(
      <DateSelectorHeader text="sample" opened={false} />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-header-root");
    expect(component).toHaveClass("date_selector_header");
    expect(component).not.toHaveClass("date_selector_header_opened");
  });

  test("should apply theme classNames when provided as prop", () => {
    const { debug } = render(<DateSelectorHeader text="sample" theme="dark" />);

    // debug();
    const component = screen.queryByTestId("date-selector-header-root");
    expect(component).toHaveClass("date_selector_header_theme_dark");
  });

  test("should apply custom className when provided as prop", () => {
    const { debug } = render(
      <DateSelectorHeader
        text="sample"
        rootClassName="sample_date_selector_header_className"
      />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-header-root");
    expect(component).toHaveClass("sample_date_selector_header_className");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <DateSelectorHeader
        text="test"
        rootStyles={{ border: "2px solid red" }}
      />
    );

    const component = screen.queryByTestId("date-selector-header-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should call onClick when clicked", () => {
    const onClickSpy = jest.fn();
    const { debug } = render(
      <DateSelectorHeader text="sample" onClick={onClickSpy} />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-header-root");
    act(() => {
      component.click();
    });
    expect(onClickSpy).toHaveBeenCalled();
  });

  test("should not call onClick when disabled", () => {
    const onClickSpy = jest.fn();
    const { debug } = render(
      <DateSelectorHeader text="sample" onClick={onClickSpy} disabled />
    );

    // debug();
    const component = screen.queryByTestId("date-selector-header-root");
    act(() => {
      component.click();
    });
    expect(onClickSpy).not.toHaveBeenCalled();
  });
});
