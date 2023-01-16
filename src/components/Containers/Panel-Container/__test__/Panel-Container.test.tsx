import React from "react";
import { render, screen } from "@testing-library/react";
import { PanelContainer } from "@components/Containers/Panel-Container";

const SampleComponent = () => {
  return (
    <div data-testid="panel-container-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Panel Container Component Unit Tests", () => {
  test("should render itself and children without error", () => {
    const { debug } = render(
      <PanelContainer>
        <SampleComponent />
      </PanelContainer>
    );

    // debug();
    const component = screen.queryByTestId("panel-container-root");
    expect(component).toBeTruthy();

    const child = screen.queryByTestId("panel-container-child-test");
    expect(child).toBeTruthy();
  });

  test("should apply custom className when provided as prop", () => {
    render(
      <PanelContainer rootClassName="sample_class">
        <SampleComponent />
      </PanelContainer>
    );

    const component = screen.queryByTestId("panel-container-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <PanelContainer rootStyles={{ border: "2px solid red" }}>
        <SampleComponent />
      </PanelContainer>
    );

    const component = screen.queryByTestId("panel-container-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
