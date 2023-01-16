import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ComponentError } from "@components/Errors/Component-Error";

describe("Component Error Unit Tests", () => {
  test("should render without crashing", () => {
    const { debug } = render(
      <div
        data-testid="component-error-sample-parent"
        style={{
          height: "300px",
          width: "300px",
          position: "relative",
        }}
      >
        <ComponentError />
      </div>
    );
    // debug();
    const component = screen.queryByTestId("component-error-root");
    expect(component).toBeTruthy();
  });

  test("should render text when provided as prop", () => {
    const { debug } = render(<ComponentError text="sample" />);
    // debug();
    const component = screen.queryByTestId("component-error-text");
    expect(component).toBeTruthy();
  });

  test("should apply container rootClassName when provided as prop", () => {
    const testProps = {
      rootClassName: "component_error_sample_className",
    };
    const { debug } = render(<ComponentError {...testProps} />);
    // debug();
    const component = screen.queryByTestId("component-error-root");
    expect(component).toHaveClass("component_error_sample_className");
  });

  test("should apply container rootStyles when provided as prop", () => {
    const testProps = {
      rootStyles: { border: "2px solid red" },
    };
    const { debug } = render(<ComponentError {...testProps} />);
    // debug();
    const component = screen.queryByTestId("component-error-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply icon class when provided as prop", () => {
    const testProps = {
      iconClassName: "component_error_sample_icon",
    };
    const { debug } = render(<ComponentError {...testProps} />);
    // debug();
    const component = screen.queryByTestId("component-error-icon");
    expect(component).toHaveClass("component_error_sample_icon");
  });

  test("should apply container styles when provided as prop", () => {
    const testProps = {
      iconStyles: { border: "2px solid red" },
    };
    const { debug } = render(<ComponentError {...testProps} />);
    // debug();
    const component = screen.queryByTestId("component-error-icon");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply text class when provided as prop", () => {
    const testProps = {
      textClassName: "ComponentError_text_sample_className",
      text: "sample",
    };
    const { debug } = render(<ComponentError {...testProps} />);

    // debug();
    const component = screen.queryByTestId("component-error-text");
    expect(component).toHaveClass("ComponentError_text_sample_className");
  });

  test("should apply text styles when provided as prop", () => {
    const testProps = {
      textStyles: { border: "2px solid red" },
      text: "sample",
    };
    const { debug } = render(<ComponentError {...testProps} />);
    // debug();
    const component = screen.queryByTestId("component-error-text");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
