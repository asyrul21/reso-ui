import React from "react";
import { render, screen } from "@testing-library/react";
import { View } from "../View";

const SampleComponent = () => {
  return (
    <div data-testid="view-container-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("View Container Component Unit Tests", () => {
  test("should render itself and children without error", () => {
    const { debug } = render(
      <View>
        <SampleComponent />
      </View>
    );

    // debug();
    const component = screen.queryByTestId("view-container-root");
    expect(component).toBeTruthy();

    const child = screen.queryByTestId("view-container-child-test");
    expect(child).toBeTruthy();
  });

  test("should have custom rootClassName when passed as prop", () => {
    render(
      <View rootClassName="test_custom_className">
        <SampleComponent />
      </View>
    );

    const component = screen.queryByTestId("view-container-root");
    expect(component).toHaveClass("test_custom_className");
  });

  test("should have custom rootStyles when passed as prop", () => {
    render(
      <View rootStyles={{ border: "2px solid red" }}>
        <SampleComponent />
      </View>
    );

    const component = screen.queryByTestId("view-container-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply padding class when passed as prop", () => {
    render(
      <View pa={5}>
        <SampleComponent />
      </View>
    );

    const component = screen.queryByTestId("view-container-root");
    expect(component).toHaveClass("spacing-pa-5");
  });
});
