import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "../Text";

describe("Generic Button Component Unit Tests", () => {
  test("should render itself without error", () => {
    const testText = "test";
    const { debug } = render(<Text>{testText}</Text>);

    // debug();
    const component = screen.queryByTestId("text-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent(testText);
  });
});
