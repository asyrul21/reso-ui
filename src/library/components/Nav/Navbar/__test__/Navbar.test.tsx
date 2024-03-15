import React from "react";
import { act, render, screen } from "@testing-library/react";
import { Navbar } from "../Navbar";

describe("NavBar Component Unit Tests", () => {
  test("should render without error", () => {
    const { debug } = render(
      <Navbar>
        <p>test</p>
      </Navbar>
    );

    // debug();
    const component = screen.queryByTestId("navbar-root");
    expect(component).toBeInTheDocument();
  });

  test("should render logo text correctly", () => {
    const text = "logo-test";
    const { debug } = render(
      <Navbar textLogo={text}>
        <p>test</p>
      </Navbar>
    );

    // debug();
    const component = screen.getByTestId("navbar-logo");
    expect(component).toHaveTextContent(text);
  });

  test("should execute onClickLogo when provided as prop", () => {
    const text = "logo-test";
    const onClickLogoMock = jest.fn();
    const { debug } = render(
      <Navbar textLogo={text} onClickLogo={onClickLogoMock}>
        <p>test</p>
      </Navbar>
    );

    // debug();
    const component = screen.getByTestId("navbar-logo");
    act(() => {
      component.click();
    });

    expect(onClickLogoMock).toHaveBeenCalled();
  });

  test("should render custom logo correctly", () => {
    const { debug } = render(
      <Navbar
        renderCustomLogo={() => {
          return <div data-testid="navbar-custom-logo">My Logo</div>;
        }}
      >
        <p>test</p>
      </Navbar>
    );

    // debug();
    const component = screen.getByTestId("navbar-custom-logo");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("My Logo");
  });

  test("should render children correctly", () => {
    const { debug } = render(
      <Navbar>
        <span data-testid="navbar-child-1">test1</span>
        <span data-testid="navbar-child-2">tes2</span>
        <span data-testid="navbar-child-3">test3</span>
      </Navbar>
    );

    // debug();
    const child1 = screen.getByTestId("navbar-child-1");
    expect(child1).toBeInTheDocument();

    const child2 = screen.getByTestId("navbar-child-2");
    expect(child2).toBeInTheDocument();

    const child3 = screen.getByTestId("navbar-child-3");
    expect(child3).toBeInTheDocument();
  });
});
