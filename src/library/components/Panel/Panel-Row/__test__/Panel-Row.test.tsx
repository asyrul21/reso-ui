import React from "react";
import { render, screen } from "@testing-library/react";
import { PanelRow } from "../Panel-Row";

describe("Panel Title Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<PanelRow keyStr="testKey" value="testValue" />);

    // debug();
    const component = screen.queryByTestId("panel-row-root");
    expect(component).toBeInTheDocument();

    const keySpan = screen.queryByTestId("panel-row-key");
    expect(keySpan).toHaveTextContent("testKey");

    const valueSpan = screen.queryByTestId("panel-row-value");
    expect(valueSpan).toHaveTextContent("testValue");
  });

  test("should apply custom className when provided as prop", () => {
    render(
      <PanelRow
        keyStr="testKey"
        value="testValue"
        rootClassName="sample_class"
      />
    );

    const component = screen.queryByTestId("panel-row-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <PanelRow
        keyStr="testKey"
        value="testValue"
        rootStyles={{ border: "2px solid red" }}
      />
    );

    const component = screen.queryByTestId("panel-row-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
