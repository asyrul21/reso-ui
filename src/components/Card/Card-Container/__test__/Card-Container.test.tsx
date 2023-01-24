import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "@components/Card/";

const SampleComponent = () => {
  return (
    <div data-testid="card-container-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Card Container Component Unit Tests", () => {
  test("should render itself and children without error", () => {
    const { debug } = render(
      <Card>
        <SampleComponent />
      </Card>
    );

    // debug();
    const component = screen.queryByTestId("card-container-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("card_container");

    const child = screen.queryByTestId("card-container-child-test");
    expect(child).toBeInTheDocument();
  });

  test("should have custom rootClassName when passed as prop", () => {
    render(
      <Card rootClassName="test_custom_className">
        <SampleComponent />
      </Card>
    );

    const component = screen.queryByTestId("card-container-root");
    expect(component).toHaveClass("test_custom_className");
  });

  test("should have custom rootStyles when passed as prop", () => {
    render(
      <Card rootStyles={{ border: "2px solid red" }}>
        <SampleComponent />
      </Card>
    );

    const component = screen.queryByTestId("card-container-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply padding class when passed as prop", () => {
    render(
      <Card pa={5}>
        <SampleComponent />
      </Card>
    );

    const component = screen.queryByTestId("card-container-root");
    expect(component).toHaveClass("spacing-pa-5");
  });
});
