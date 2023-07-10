import React from "react";
import { render, screen } from "@testing-library/react";
import { HorizontalScrollContainer } from "@components/Containers/Horizontal-Scroll-Container";

const SampleComponent = () => {
  return (
    <div data-testid="hsc-container-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Horizontal Scoll Container Component Unit Tests", () => {
  test("should render itself and children without error", () => {
    const { debug } = render(
      <HorizontalScrollContainer>
        <SampleComponent />
      </HorizontalScrollContainer>
    );

    // debug();
    const component = screen.queryByTestId("horizontal-scroll-container-root");
    expect(component).toBeTruthy();

    const child = screen.queryByTestId("hsc-container-child-test");
    expect(child).toBeTruthy();
  });

  test("should apply custom className when provided as prop", () => {
    render(
      <HorizontalScrollContainer rootClassName="sample_class">
        <SampleComponent />
      </HorizontalScrollContainer>
    );

    const component = screen.queryByTestId("horizontal-scroll-container-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <HorizontalScrollContainer rootStyles={{ border: "2px solid red" }}>
        <SampleComponent />
      </HorizontalScrollContainer>
    );

    const component = screen.queryByTestId("horizontal-scroll-container-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
