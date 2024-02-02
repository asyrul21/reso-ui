import React from "react";
import { render, screen } from "@testing-library/react";
import { CardSummaryValue } from "../Card-Summary-Value";

describe("Card Summary Value Component Unit Tests", () => {
  test("should render numerical value without error", () => {
    const { debug } = render(<CardSummaryValue value={10} />);

    // debug();
    const component = screen.queryByTestId("card-summary-value");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("card_summary_value");
    expect(component).toHaveTextContent("10");
  });

  test("should render string value without error", () => {
    const { debug } = render(<CardSummaryValue value={"hello"} />);

    // debug();
    const component = screen.queryByTestId("card-summary-value");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("card_summary_value");
    expect(component).toHaveTextContent("hello");
  });

  test("should have custom rootClassName when passed as prop", () => {
    render(
      <CardSummaryValue value={10} rootClassName="test_custom_className" />
    );

    const component = screen.queryByTestId("card-summary-value");
    expect(component).toHaveClass("test_custom_className");
  });

  test("should have custom rootStyles when passed as prop", () => {
    render(
      <CardSummaryValue value={5} rootStyles={{ border: "2px solid red" }} />
    );

    const component = screen.queryByTestId("card-summary-value");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
