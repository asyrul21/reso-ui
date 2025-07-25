import React from "react";
import { render, screen } from "@testing-library/react";
import { ShimmerLoader } from "../ShimmerLoader";

describe("Shimmering Image Loader Unit Tests", () => {
  test("should render parent and itself without error", () => {
    const { debug } = render(
      <div
        data-testid="component-loader-parent-test"
        style={{ width: "200px", height: "200px", position: "relative" }}
      >
        <ShimmerLoader />
      </div>
    );

    // debug();
    const component = screen.queryByTestId("component-shimmer-loader-root");
    expect(component).toBeTruthy();

    const loader = screen.queryByTestId("component-shimmer-loader-shimmer");
    expect(loader).toBeTruthy();

    const parent = screen.queryByTestId("component-loader-parent-test");
    expect(parent).toBeTruthy();
  });
});
