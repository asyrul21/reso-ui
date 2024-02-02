import React from "react";
import { render, screen } from "@testing-library/react";
import { PanelTitle } from "../Panel-Title";

describe("Panel Title Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<PanelTitle text="test" />);

    // debug();
    const component = screen.queryByTestId("panel-title-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("test");
  });

  test("should apply custom className when provided as prop", () => {
    render(<PanelTitle text="test" rootClassName="sample_class" />);

    const component = screen.queryByTestId("panel-title-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(<PanelTitle text="test" rootStyles={{ border: "2px solid red" }} />);

    const component = screen.queryByTestId("panel-title-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
