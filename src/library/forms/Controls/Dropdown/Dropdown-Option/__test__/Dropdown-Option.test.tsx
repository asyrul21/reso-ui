import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { DropdownOption } from "../";

describe("Dropdown Select Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<DropdownOption option="Option A" />);

    // debug();
    const component = screen.queryByTestId("dropdown-option-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("Option A");
  });

  test("should trigger onClick if passed as prop", () => {
    const onClickMock = jest.fn();

    const { debug } = render(
      <DropdownOption option="Option A" onClick={onClickMock} />
    );

    // debug();
    const component = screen.queryByTestId("dropdown-option-root");
    component.click();

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("should apply active styles if active", () => {
    const { debug } = render(<DropdownOption option="Option A" active />);

    // debug();
    const component = screen.queryByTestId("dropdown-option-root");

    expect(component).toHaveClass("dropdown_option_active_theme_light");
  });

  test("should not apply active styles if active but enableActiveStyle is false", () => {
    const { debug } = render(
      <DropdownOption option="Option A" active enableActiveStyles={false} />
    );

    // debug();
    const component = screen.queryByTestId("dropdown-option-root");

    expect(component).not.toHaveClass("dropdown_option_active_light");
  });

  test("should render custom option component correctly", () => {
    const { debug } = render(
      <DropdownOption
        option="Option A"
        renderCustomOption={({ option }) => {
          return <div data-testid="dropdown-option-test-custom">{option}</div>;
        }}
      />
    );

    // debug();
    const component = screen.queryByTestId("dropdown-option-test-custom");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("Option A");
  });

  test("should execute onClick when clicking custom option component", () => {
    const onClickMock = jest.fn();
    const { debug } = render(
      <DropdownOption
        option="Option A"
        renderCustomOption={({ option }) => {
          return (
            <div
              data-testid="dropdown-option-test-custom"
              onClick={() => onClickMock(option)}
            >
              {option}
            </div>
          );
        }}
      />
    );

    // debug();
    const component = screen.queryByTestId("dropdown-option-test-custom");
    expect(component).toBeInTheDocument();
    component.click();

    expect(onClickMock).toHaveBeenCalledWith("Option A");
  });
});
