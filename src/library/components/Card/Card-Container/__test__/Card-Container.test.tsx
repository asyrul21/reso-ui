import React from "react";
import { render, screen } from "@testing-library/react";
import { CardContainer } from "@components/Card";

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
      <CardContainer>
        <SampleComponent />
      </CardContainer>
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
      <CardContainer rootClassName="test_custom_className">
        <SampleComponent />
      </CardContainer>
    );

    const component = screen.queryByTestId("card-container-root");
    expect(component).toHaveClass("test_custom_className");
  });

  test("should have custom rootStyles when passed as prop", () => {
    render(
      <CardContainer rootStyles={{ border: "2px solid red" }}>
        <SampleComponent />
      </CardContainer>
    );

    const component = screen.queryByTestId("card-container-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply padding class when passed as prop", () => {
    render(
      <CardContainer pa={5}>
        <SampleComponent />
      </CardContainer>
    );

    const component = screen.queryByTestId("card-container-root");
    expect(component).toHaveClass("spacing-pa-5");
  });
});
