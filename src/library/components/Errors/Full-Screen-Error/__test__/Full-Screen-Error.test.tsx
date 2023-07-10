import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { FullScreenError } from "@components/Errors/Full-Screen-Error";

describe("Full Screen Error Unit Tests", () => {
  test("should render without crashing with default text", () => {
    const { debug } = render(<FullScreenError />);
    // debug();
    const component = screen.queryByTestId("full-screen-error-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("Oops, something went horribly wrong!");
  });

  test("should render text when provided as prop", () => {
    const { debug } = render(<FullScreenError text="test123" />);
    // debug();
    const component = screen.queryByTestId("full-screen-error-text");
    expect(component).toHaveTextContent("test123");
  });

  test("should apply container rootClassName when provided as prop", () => {
    const testProps = {
      rootClassName: "full_screen_error_sample_className",
    };
    const { debug } = render(<FullScreenError {...testProps} />);
    // debug();
    const component = screen.queryByTestId("full-screen-error-root");
    expect(component).toHaveClass("full_screen_error_sample_className");
  });

  test("should apply container rootStyles when provided as prop", () => {
    const testProps = {
      rootStyles: { border: "2px solid red" },
    };
    const { debug } = render(<FullScreenError {...testProps} />);
    // debug();
    const component = screen.queryByTestId("full-screen-error-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply icon class when provided as prop", () => {
    const testProps = {
      iconClassName: "full_screen_error_sample_icon",
    };
    const { debug } = render(<FullScreenError {...testProps} />);
    // debug();
    const component = screen.queryByTestId("full-screen-error-icon");
    expect(component).toHaveClass("full_screen_error_sample_icon");
  });

  test("should apply container styles when provided as prop", () => {
    const testProps = {
      iconStyles: { border: "2px solid red" },
    };
    const { debug } = render(<FullScreenError {...testProps} />);
    // debug();
    const component = screen.queryByTestId("full-screen-error-icon");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply text class when provided as prop", () => {
    const testProps = {
      textClassName: "fullScreenError_text_sample_className",
    };
    const { debug } = render(<FullScreenError {...testProps} />);
    // debug();
    const component = screen.queryByTestId("full-screen-error-text");
    expect(component).toHaveClass("fullScreenError_text_sample_className");
  });

  test("should apply text styles when provided as prop", () => {
    const testProps = {
      textStyles: { border: "2px solid red" },
      text: "sample",
    };
    const { debug } = render(<FullScreenError {...testProps} />);
    // debug();
    const component = screen.queryByTestId("full-screen-error-text");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
