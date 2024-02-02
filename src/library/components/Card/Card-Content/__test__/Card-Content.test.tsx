import React from "react";
import { render, screen } from "@testing-library/react";
import { CardContent } from "../Card-Content";

const SampleComponent = () => {
  return (
    <div data-testid="card-content-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Card Content Component Unit Tests", () => {
  test("should render itself and children without error", () => {
    const { debug } = render(
      <CardContent>
        <SampleComponent />
      </CardContent>
    );

    // debug();
    const component = screen.queryByTestId("card-content-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("card_content_container");

    const child = screen.queryByTestId("card-content-child-test");
    expect(child).toBeInTheDocument();
  });

  test("should apply wrap class by default", () => {
    render(
      <CardContent pa={5}>
        <SampleComponent />
      </CardContent>
    );

    const component = screen.queryByTestId("card-content-root");
    expect(component).toHaveClass("card_content_container_wrap");
  });

  test("should not apply wrap class when passed as prop", () => {
    render(
      <CardContent pa={5} wrap={false}>
        <SampleComponent />
      </CardContent>
    );

    const component = screen.queryByTestId("card-content-root");
    expect(component).not.toHaveClass("card_content_container_wrap");
  });

  test("should have custom rootClassName when passed as prop", () => {
    render(
      <CardContent rootClassName="test_custom_className">
        <SampleComponent />
      </CardContent>
    );

    const component = screen.queryByTestId("card-content-root");
    expect(component).toHaveClass("test_custom_className");
  });

  test("should have custom rootStyles when passed as prop", () => {
    render(
      <CardContent rootStyles={{ border: "2px solid red" }}>
        <SampleComponent />
      </CardContent>
    );

    const component = screen.queryByTestId("card-content-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply padding class when passed as prop", () => {
    render(
      <CardContent pa={5}>
        <SampleComponent />
      </CardContent>
    );

    const component = screen.queryByTestId("card-content-root");
    expect(component).toHaveClass("spacing-pa-5");
  });
});
