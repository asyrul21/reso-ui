import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Banner } from "../Banner";

// import from index does not work for jest.spyOn
import * as ButtonModule from "../../../Buttons/Button/Button";

describe("Banner Component Unit Tests", () => {
  beforeEach(() => {
    jest
      .spyOn(ButtonModule, "Button")
      .mockImplementation(({ rootClassName, rootStyles, onClick, text }) => {
        return (
          <button
            data-testid="banner-close-button"
            className={rootClassName}
            style={rootStyles}
            onClick={onClick}
          >
            {text}
          </button>
        );
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should render info banner without crashing", () => {
    const { debug } = render(<Banner text="banner text test" type="info" />);

    // debug();
    const component = screen.queryByTestId("banner-root");
    expect(component).toBeInTheDocument();

    expect(component).toHaveClass("banner_container_info");
  });

  test("should render success banner without crashing", () => {
    const { debug } = render(<Banner text="banner text test" type="success" />);

    // debug();
    const component = screen.queryByTestId("banner-root");
    expect(component).toBeInTheDocument();

    expect(component).toHaveClass("banner_container_success");
  });

  test("should render warning banner without crashing", () => {
    const { debug } = render(<Banner text="banner text test" type="warning" />);

    // debug();
    const component = screen.queryByTestId("banner-root");
    expect(component).toBeInTheDocument();

    expect(component).toHaveClass("banner_container_warning");
  });

  test("should render error banner without crashing", () => {
    const { debug } = render(<Banner text="banner text test" type="error" />);

    // debug();
    const component = screen.queryByTestId("banner-root");
    expect(component).toBeInTheDocument();

    expect(component).toHaveClass("banner_container_error");
  });

  test("should render info banner with text without crashing", () => {
    const { debug } = render(<Banner text="banner text test" type="info" />);

    // debug();
    const component = screen.queryByTestId("banner-root");
    expect(component).toHaveTextContent("banner text test");
  });

  test("should not render info banner when close button is clicked", () => {
    const { debug } = render(<Banner text="banner text test" type="info" />);

    // debug();
    const closeButton = screen.queryByTestId("banner-close-button");
    closeButton.click();

    const component = screen.queryByTestId("banner-root");
    expect(component).not.toBeInTheDocument();
  });
});
