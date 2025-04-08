import React from "react";
import { act, render, screen } from "@testing-library/react";
import { Drawer } from "../Drawer";
import * as FlexModule from "../../Containers/Flex/Flex";
import * as ButtonModule from "../../Buttons/Button/Button";

describe("Drawer Component Unit Tests", () => {
  beforeEach(() => {
    jest.spyOn(FlexModule, "Flex").mockImplementation((props) => {
      const { children, rootClassName, rootStyles } = props;
      return (
        <div
          data-testid="drawer-flex-mock"
          className={rootClassName}
          style={rootStyles}
        >
          {children}
        </div>
      );
    });

    jest.spyOn(ButtonModule, "Button").mockImplementation((props) => {
      const { text, onClick } = props;
      return (
        <button onClick={onClick} data-testid="drawer-close-button-mock">
          {text}
        </button>
      );
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should render itself and children without error", () => {
    render(
      // tslint:disable-next-line: no-empty
      <Drawer title="sample title" isOpen={true} onClose={() => {}}>
        <div data-testid="drawer-children-test">Drawer Child Test</div>
      </Drawer>
    );

    // debug();
    const component = screen.queryByTestId("drawer-container-root");
    expect(component).toBeInTheDocument();

    const child = screen.queryByTestId("drawer-children-test");
    expect(child).toHaveTextContent("Drawer Child Test");
  });

  test("should apply custom root className when provided as prop", () => {
    render(
      // tslint:disable-next-line: no-empty
      <Drawer
        rootClassName="sample_drawer_class"
        isOpen={true}
        onClose={() => {}}
      >
        <div>Drawer Child Test</div>
      </Drawer>
    );

    const component = screen.queryByTestId("drawer-container-root");
    expect(component).toHaveClass("sample_drawer_class");
  });

  test("should apply custom root styles when provided as prop", () => {
    render(
      // tslint:disable-next-line: no-empty
      <Drawer
        isOpen={true}
        onClose={() => {}}
        rootStyles={{ border: "2px solid red" }}
      >
        <div>Drawer Child Test</div>
      </Drawer>
    );

    const component = screen.queryByTestId("drawer-container-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply custom title className when provided as prop", () => {
    render(
      // tslint:disable-next-line: no-empty
      <Drawer
        titleClassName="sample_drawer_title_class"
        isOpen={true}
        onClose={() => {}}
      >
        <div>Drawer Child Test</div>
      </Drawer>
    );

    const component = screen.queryByTestId("drawer-flex-mock");
    expect(component).toHaveClass("sample_drawer_title_class");
  });

  test("should apply custom title styles when provided as prop", () => {
    render(
      // tslint:disable-next-line: no-empty
      <Drawer
        isOpen={true}
        onClose={() => {}}
        titleStyles={{ border: "2px solid red" }}
      >
        <div>Drawer Child Test</div>
      </Drawer>
    );

    const component = screen.queryByTestId("drawer-flex-mock");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should execute onClose when provided as prop and Close button clicked", () => {
    const onCloseMock = jest.fn();
    render(
      <Drawer title="sample title" isOpen={true} onClose={onCloseMock}>
        <div data-testid="drawer-children-test">Drawer Child Test</div>
      </Drawer>
    );

    const closeButton = screen.queryByTestId("drawer-close-button-mock");

    act(() => {
      closeButton.click();
    });

    setTimeout(() => {
      expect(onCloseMock).toHaveBeenCalled();
    }, 1000);
  });
});
