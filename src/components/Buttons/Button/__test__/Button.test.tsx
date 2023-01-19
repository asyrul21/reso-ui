import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "@components/Buttons/Button";

describe("Generic Button Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<Button text="test" />);

    // debug();
    const component = screen.queryByTestId("button-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("test");
  });

  test("should apply inheritWidth className when provided as prop", () => {
    render(<Button text="test" inheritWidth />);

    const component = screen.queryByTestId("button-root");
    expect(component).toHaveClass("button_container_inheritWidth");
  });

  test("should apply link className when type is link", () => {
    render(<Button text="test" type="link" />);

    const component = screen.queryByTestId("button-root");
    expect(component).toHaveClass("button_container_link");
  });

  test("should apply disabled className when provided as prop", () => {
    render(<Button text="test" disabled />);

    const component = screen.queryByTestId("button-root");
    expect(component).toHaveClass("component_disabled");
  });

  test("should apply custom className when provided as prop", () => {
    render(<Button text="test" rootClassName="sample_class" />);

    const component = screen.queryByTestId("button-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(<Button text="test" rootStyles={{ border: "2px solid red" }} />);

    const component = screen.queryByTestId("button-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should execute onClick when provided as prop", () => {
    const onClickSpy = jest.fn();
    render(<Button text="test" onClick={onClickSpy} />);

    const component = screen.queryByTestId("button-root");
    component.click();

    expect(onClickSpy).toHaveBeenCalled();
  });
});
