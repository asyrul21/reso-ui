import React from "react";
import { render, screen } from "@testing-library/react";
import { Back } from "@components/Buttons/Back";

describe("Back Button Component Unit Tests", () => {
  test("should render itself with default text without error", () => {
    const { debug } = render(<Back to="/" />);

    // debug();
    const component = screen.queryByTestId("back-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("Back");
  });

  test("should render itself with custom text without error", () => {
    const { debug } = render(<Back to="/" text="Return" />);

    // debug();
    const component = screen.queryByTestId("back-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("Return");
  });

  test("should apply custom className when provided as prop", () => {
    render(<Back to="/" rootClassName="sample_back_root_className" />);

    const component = screen.queryByTestId("back-root");
    expect(component).toHaveClass("sample_back_root_className");
  });

  test("should apply custom styles when provided as prop", () => {
    render(<Back to="/" rootStyles={{ border: "2px solid red" }} />);

    const component = screen.queryByTestId("back-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply link className when provided as prop", () => {
    render(<Back to="/" linkClassName="sample_back_className" />);

    const component = screen.queryByTestId("back-link");
    expect(component).toHaveClass("sample_back_className");
  });

  test("should apply custom link styles when provided as prop", () => {
    render(<Back to="/" linkStyles={{ color: "orange" }} />);

    const component = screen.queryByTestId("back-link");
    expect(component).toHaveStyle("color: orange");
  });
});
