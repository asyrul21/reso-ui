import React from "react";
import { render, screen } from "@testing-library/react";
import { PanelButton } from "@components/Panel/Panel-Button";

describe("Panel Button Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<PanelButton text="test" />);

    // debug();
    const component = screen.queryByTestId("panel-button-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("test");
  });

  test("should apply custom className when provided as prop", () => {
    render(<PanelButton text="test" rootClassName="sample_class" />);

    const component = screen.queryByTestId("panel-button-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <PanelButton text="test" rootStyles={{ border: "2px solid red" }} />
    );

    const component = screen.queryByTestId("panel-button-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should onClick when provided as prop", () => {
    const onClickSpy = jest.fn();
    render(<PanelButton text="test" onClick={onClickSpy} />);

    const component = screen.queryByTestId("panel-button-root");
    component.click();

    expect(onClickSpy).toHaveBeenCalled();
  });
});
