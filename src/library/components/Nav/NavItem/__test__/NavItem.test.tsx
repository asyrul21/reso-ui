import React from "react";
import { act, render, screen } from "@testing-library/react";
import { NavItem } from "../NavItem";

describe("NavItem Component Unit Tests", () => {
  test("should render and anchor tag by default without error", () => {
    const testText = "test";
    const { debug } = render(<NavItem href="#">{testText}</NavItem>);

    // debug();
    const component = screen.queryByTestId("navItem-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent(testText);

    const aTag = screen.queryByTestId("navItem-element-a");
    expect(aTag).toBeInTheDocument();
  });

  test("should render button if passed as prop", () => {
    const { debug } = render(
      <NavItem Implementation="button">test button</NavItem>
    );

    // debug();
    const button = screen.queryByTestId("navItem-element-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("test button");
  });

  test("should execute onClick when clicked", () => {
    const onClickMock = jest.fn();
    const { debug } = render(
      <NavItem href="#" onClick={onClickMock}>
        "test
      </NavItem>
    );

    const aTag = screen.getByTestId("navItem-element-a");
    act(() => {
      aTag.click();
    });

    expect(onClickMock).toHaveBeenCalled();
  });

  test("should have active class if active", () => {
    const { debug } = render(
      <NavItem href="#" active>
        "test
      </NavItem>
    );

    const aTag = screen.getByTestId("navItem-element-a");
    expect(aTag).toHaveClass("navItem_element_active");
  });

  test("should not have active class if active is true but enableActiveClass is false", () => {
    const { debug } = render(
      <NavItem href="#" active enableActiveStyles={false}>
        "test
      </NavItem>
    );

    const aTag = screen.getByTestId("navItem-element-a");
    expect(aTag).not.toHaveClass("navItem_element_active");
  });

  test("should render custom navItem element correctly", () => {
    const testText = "test";
    const { debug } = render(
      <NavItem
        renderCustomNavItem={() => {
          return <span data-testid="custom-nav-item-test">{testText}</span>;
        }}
      />
    );

    // debug();
    const aTag = screen.queryByTestId("navItem-element-a");
    expect(aTag).not.toBeInTheDocument();

    const button = screen.queryByTestId("navItem-element-button");
    expect(button).not.toBeInTheDocument();

    const component = screen.queryByTestId("custom-nav-item-test");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent(testText);
  });
});
