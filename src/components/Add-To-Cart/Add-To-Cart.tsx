import React from "react";
import { QuantityCounter } from "@components/Quantity-Counter";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// styles
import "./styles/Add-To-Cart.layout.scss";
import "./styles/Add-To-Cart.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

export interface IAddToCartProps extends IComponent, IThemeProps {
  inStock: boolean;
  quantityValue: number;
  currency: string;
  price: string;
  subTotal: string;
  onChangeQuantity?: (val: number) => void;
  onButtonClick?: () => void;
  buttonDisabled?: boolean;
  children?: JSX.Element;
}

export const AddToCart = ({
  inStock = true,
  quantityValue = 1,
  currency = "RM",
  price = "999.00",
  subTotal = "999.0.",
  onChangeQuantity = (val: number) => {},
  onButtonClick = () => {},
  buttonDisabled = false,
  className,
  theme,
  children,
}: IAddToCartProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        component_addToCart_container: true,
      },
      className,
      { no_select: true }
    ),
    createThemeStyles("addToCart_theme_", theme)
  );

  const addToCartButtonStyles = createComponentStyles(
    createLayoutStyles({
      component_addToCartContainer_button: true,
    }),
    createThemeStyles("addToCart_button_theme_", theme)
  );
  return (
    <div className={containerStyles} data-testid="component-addToCart-root">
      <div className="component_addToCartContainer_row">
        <span>Status</span>{" "}
        <span data-test="component_addToCart_stock">
          {inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
      <div className="component_addToCartContainer_row">
        <span>Quantity:</span>
        <QuantityCounter
          value={quantityValue}
          onChange={(num) => {
            onChangeQuantity(num);
          }}
        />
      </div>
      <div className="component_addToCartContainer_row">
        <span>{`Subtotal (${currency})`}:</span>
        <span>{subTotal}</span>
      </div>
      {/* TODO: Use our own Button component for below */}
      <button
        className={addToCartButtonStyles}
        data-testid="component-addToCart-button"
        onClick={() => {
          onButtonClick();
        }}
        disabled={!inStock || buttonDisabled}
      >
        Add to Cart
      </button>
      {children}
    </div>
  );
};

export default AddToCart;
