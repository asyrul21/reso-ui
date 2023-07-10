import React from "react";
import { render, screen } from "@testing-library/react";
import { Panel } from "@components/Panel";

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
      <Panel>
        <SampleComponent />
      </Panel>
    );

    // debug();
    const component = screen.queryByTestId("panel-container-root");
    expect(component).toBeInTheDocument();

    const child = screen.queryByTestId("panel-container-child-test");
    expect(child).toBeInTheDocument();
  });

  test("should apply custom className when provided as prop", () => {
    render(
      <Panel rootClassName="sample_class">
        <SampleComponent />
      </Panel>
    );

    const component = screen.queryByTestId("panel-container-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <Panel rootStyles={{ border: "2px solid red" }}>
        <SampleComponent />
      </Panel>
    );

    const component = screen.queryByTestId("panel-container-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
