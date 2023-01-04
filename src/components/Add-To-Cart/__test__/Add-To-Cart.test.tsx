import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddToCart } from "../Add-To-Cart";

describe("Add to Cart Component Unit Tests", () => {
  const defaultProps = {
    inStock: true,
    quantityValue: 1,
    currency: "RM",
    price: "100.00",
    subTotal: "100.00",
    onChangeQuantity: () => {},
    onButtonClick: () => {},
    buttonDisabled: false,
  };

  test("should render without error", () => {
    const { debug } = render(<AddToCart {...defaultProps} />);

    // debug();
    const component = screen.queryByTestId("component-addToCart-root");
    expect(component).toBeTruthy();
  });

  test("should call function when Add To Cart button is clicked", () => {
    const onButtonClick = jest.fn();

    const testProps = {
      ...defaultProps,
      onButtonClick,
    };

    render(<AddToCart {...testProps} />);

    const addToCartButton = screen.queryByTestId("component-addToCart-button");
    addToCartButton.click();

    expect(onButtonClick).toHaveBeenCalled();
  });
});
