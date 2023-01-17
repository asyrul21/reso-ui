import React from "react";
import { render, screen } from "@testing-library/react";
import { HorizontalScrollItem } from "@components/Containers/Horizontal-Scroll-Item";

const SampleComponent = () => {
  return (
    <div data-testid="hsi-container-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Horizontal Scoll Item Component Unit Tests", () => {
  test("should render itself and children without error", () => {
    const { debug } = render(
      <HorizontalScrollItem>
        <SampleComponent />
      </HorizontalScrollItem>
    );

    // debug();
    const component = screen.queryByTestId("horizontal-scroll-item-root");
    expect(component).toBeTruthy();

    const child = screen.queryByTestId("hsi-container-child-test");
    expect(child).toBeTruthy();
  });

  test("should apply custom className when provided as prop", () => {
    render(
      <HorizontalScrollItem rootClassName="sample_class">
        <SampleComponent />
      </HorizontalScrollItem>
    );

    const component = screen.queryByTestId("horizontal-scroll-item-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <HorizontalScrollItem rootStyles={{ border: "2px solid red" }}>
        <SampleComponent />
      </HorizontalScrollItem>
    );

    const component = screen.queryByTestId("horizontal-scroll-item-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
