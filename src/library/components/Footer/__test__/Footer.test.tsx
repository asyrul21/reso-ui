import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

const SampleComponent = () => {
  return (
    <div data-testid="footer-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Footer Container Component Unit Tests", () => {
  const defaultProps = {};

  test("should render itself and children without error", () => {
    const { debug } = render(
      <Footer>
        <SampleComponent />
      </Footer>
    );

    // debug();
    const component = screen.queryByTestId("footer-root");
    expect(component).toBeTruthy();

    const child = screen.queryByTestId("footer-child-test");
    expect(child).toBeInTheDocument();
  });

  test("should set class [positionFixed] when passed as prop", () => {
    render(
      <Footer positionFixed>
        <SampleComponent />
      </Footer>
    );

    const component = screen.queryByTestId("footer-root");
    expect(component).toHaveClass("footer_container_positionFixed");
  });

  test("should have custom className when passed as prop", () => {
    render(
      <Footer rootClassName="test_custom_className">
        <SampleComponent />
      </Footer>
    );

    const component = screen.queryByTestId("footer-root");
    expect(component).toHaveClass("test_custom_className");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <Footer rootStyles={{ border: "2px solid red" }}>
        <SampleComponent />
      </Footer>
    );

    const component = screen.queryByTestId("footer-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
