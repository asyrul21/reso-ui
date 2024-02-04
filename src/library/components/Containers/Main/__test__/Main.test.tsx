import React from "react";
import { render, screen } from "@testing-library/react";
import { Main } from "../Main";

describe("Main Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(
      <Main>
        <p>test</p>
      </Main>
    );

    // debug();
    const component = screen.queryByTestId("main-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("main_container");
  });
});
