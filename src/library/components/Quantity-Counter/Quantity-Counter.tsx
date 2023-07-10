import React from "react";
import classnames from "classnames";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

import "./styles/Quantity-Counter.layout.scss";
import "./styles/Quantity-Counter.theme.scss";

export interface IQuantityCounter extends IComponent, IThemeProps {
  value: number;
  onChange: (val: number) => void;
}

export const QuantityCounter = ({
  value = 1,
  onChange,
  rootClassName,
  rootStyles = {},
  theme,
}: IQuantityCounter) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        quantityCounter_container: true,
      },
      rootClassName
    ),
    createThemeStyles("quantityCounter_theme_", theme)
  );

  return (
    <div
      className={containerStyles}
      data-testid="quantity-counter-root"
      style={rootStyles}
    >
      <div
        className="quantityCounter_counterBox"
        onClick={() => {
          if (value > 1) {
            onChange(value - 1);
          }
        }}
        role="button"
        data-testid="quantity-counter-subtract"
      >
        {"-"}
      </div>
      <span data-testid="quantity-counter-value">{value}</span>
      <div
        className="quantityCounter_counterBox"
        onClick={() => {
          onChange(value + 1);
        }}
        role="button"
        data-testid="quantity-counter-add"
      >
        {"+"}
      </div>
    </div>
  );
};

export default QuantityCounter;
