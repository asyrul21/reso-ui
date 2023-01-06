import React from "react";
import { render, screen } from "@testing-library/react";
import { ComponentLoader } from "@components";

describe("Component Loader Unit Tests", () => {
  test("should render parent and itself without error", () => {
    const { debug } = render(
      <div
        data-testid="component-loader-parent-test"
        style={{ width: "200px", height: "200px", position: "relative" }}
      >
        <ComponentLoader />
        <p>This is a sample component</p>
      </div>
    );

    // debug();
    const component = screen.queryByTestId("component-loader-root");
    expect(component).toBeTruthy();

    const loader = screen.queryByTestId("component-loader-icon-container");
    expect(loader).toBeTruthy();

    const parent = screen.queryByTestId("component-loader-parent-test");
    expect(parent).toBeTruthy();
  });

  test("should have custom container classname when passed as props", () => {
    render(
      <div style={{ width: "200px", height: "200px", position: "relative" }}>
        <ComponentLoader className="custom_loader_class_test" />
        <p>This is a sample component</p>
      </div>
    );

    const component = screen.queryByTestId("component-loader-root");
    expect(component).toHaveClass("custom_loader_class_test");
  });

  test("should have custom icon container classname when passed as props", () => {
    render(
      <div style={{ width: "200px", height: "200px", position: "relative" }}>
        <ComponentLoader iconContainerClassName="custom_icon_container_class_test" />
        <p>This is a sample component</p>
      </div>
    );

    const component = screen.queryByTestId("component-loader-icon-container");
    expect(component).toHaveClass("custom_icon_container_class_test");
  });
});
