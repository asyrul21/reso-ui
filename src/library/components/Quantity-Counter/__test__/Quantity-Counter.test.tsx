import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { QuantityCounter } from "../Quantity-Counter";

describe("Quantity Counter", () => {
  const defaultProps = {
    value: 5,
    // tslint:disable-next-line: no-empty
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
    act(() => {
      addButton.click();
    });

    expect(onCounterChange).toHaveBeenCalled();
    expect(onCounterChange).toHaveBeenCalledWith(6);
  });

  it("should not call onChange if reached min", () => {
    const onCounterChange = jest.fn();

    const testProps = {
      ...defaultProps,
      value: 1,
      min: 1,
      onChange: onCounterChange,
    };

    render(<QuantityCounter {...testProps} />);

    const addButton = screen.queryByTestId("quantity-counter-subtract");
    act(() => {
      addButton.click();
    });

    expect(onCounterChange).not.toHaveBeenCalled();
  });

  it("should not call onChange if reached max", () => {
    const onCounterChange = jest.fn();

    const testProps = {
      ...defaultProps,
      max: 5,
      onChange: onCounterChange,
    };

    render(<QuantityCounter {...testProps} />);

    const addButton = screen.queryByTestId("quantity-counter-add");
    act(() => {
      addButton.click();
    });

    expect(onCounterChange).not.toHaveBeenCalled();
  });

  it("should call onAdd if provided as prop", () => {
    const onAddMock = jest.fn();

    const testProps = {
      ...defaultProps,
      onAdd: onAddMock,
    };

    render(<QuantityCounter {...testProps} />);

    const addButton = screen.queryByTestId("quantity-counter-add");
    act(() => {
      addButton.click();
    });

    expect(onAddMock).toHaveBeenCalled();
  });

  it("should call onSubtract if provided as prop", () => {
    const onSubtractMock = jest.fn();

    const testProps = {
      ...defaultProps,
      onSubtract: onSubtractMock,
    };

    render(<QuantityCounter {...testProps} />);

    const addButton = screen.queryByTestId("quantity-counter-subtract");
    act(() => {
      addButton.click();
    });

    expect(onSubtractMock).toHaveBeenCalled();
  });

  it("should call onChange with correct value when subtracting", () => {
    const onCounterChange = jest.fn();

    const testProps = {
      ...defaultProps,
      onChange: onCounterChange,
    };

    render(<QuantityCounter {...testProps} />);

    const subtractButton = screen.queryByTestId("quantity-counter-subtract");
    act(() => {
      subtractButton.click();
    });

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
    act(() => {
      subtractButton.click();
    });

    expect(onCounterChange).not.toHaveBeenCalled();
  });
});
