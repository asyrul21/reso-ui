import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { QuantityCounter } from "../Quantity-Counter";

describe("Quantity Counter", () => {
  const defaultProps = {
    value: 5,
    onChange: () => {},
  };

  it("should render without crashing", () => {
    render(<QuantityCounter {...defaultProps} />);

    const component = screen.queryByTestId("quantity-counter-root");
    expect(component).toBeTruthy();
  });

  it("should show correct value", () => {
    render(<QuantityCounter {...defaultProps} />);

    const component = screen.queryByTestId("quantity-counter-value");
    expect(Number(component.textContent)).toBe(5);
  });

  it("should call onChange with correct value when adding", () => {
    const onCounterChange = jest.fn();

    const testProps = {
      ...defaultProps,
      onChange: onCounterChange,
    };

    render(<QuantityCounter {...testProps} />);

    const addButton = screen.queryByTestId("quantity-counter-add");
    addButton.click();

    expect(onCounterChange).toHaveBeenCalled();
    expect(onCounterChange).toHaveBeenCalledWith(6);
  });

  it("should call onChange with correct value when subtracting", () => {
    const onCounterChange = jest.fn();

    const testProps = {
      ...defaultProps,
      onChange: onCounterChange,
    };

    render(<QuantityCounter {...testProps} />);

    const subtractButton = screen.queryByTestId("quantity-counter-subtract");
    subtractButton.click();

    expect(onCounterChange).toHaveBeenCalled();
    expect(onCounterChange).toHaveBeenCalledWith(4);
  });

  it("should not call onChange when subtracting if value is equal to 1", () => {
    const onCounterChange = jest.fn();

    const testProps = {
      value: 1,
      onChange: onCounterChange,
    };

    render(<QuantityCounter {...testProps} />);

    const subtractButton = screen.queryByTestId("quantity-counter-subtract");
    subtractButton.click();

    expect(onCounterChange).not.toHaveBeenCalled();
  });
});
