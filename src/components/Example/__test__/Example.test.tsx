import React from "react";
import { render, screen } from "@testing-library/react";
import { Example } from "../Example";

describe("Example Component", () => {
  it("should render without crashing", () => {
    const { debug } = render(<Example />);
    // debug();
    const component = screen.queryByTestId("example-component-root");
    expect(component).toBeTruthy();
  });
});
