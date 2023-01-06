import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CenterContainer } from "@components/Containers/Center-Container";

const SampleComponent = () => {
  return (
    <div data-testid="center-container-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Center Container Component Unit Tests", () => {
  test("should render itself and children without error", () => {
    const { debug } = render(
      <CenterContainer>
        <SampleComponent />
      </CenterContainer>
    );

    // debug();
    const component = screen.queryByTestId("center-container-root");
    expect(component).toBeTruthy();

    const child = screen.queryByTestId("center-container-child-test");
    expect(child).toBeTruthy();
  });

  test("should have custom className when passed as prop", () => {
    render(
      <CenterContainer className="test_custom_className">
        <SampleComponent />
      </CenterContainer>
    );

    const component = screen.queryByTestId("center-container-root");
    expect(component).toHaveClass("test_custom_className");
  });
});
