import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { AddToCart } from "@components";
import "./storiesStyle.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Reso Components/Add To Cart",
  component: AddToCart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AddToCart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ComponentTemplate: ComponentStory<typeof AddToCart> = (args) => (
  <AddToCart {...args} />
);

export const NoTheme = ComponentTemplate.bind({});
NoTheme.args = {
  inStock: true,
  quantityValue: 2,
  currency: "RM",
  price: "100.00",
  subTotal: "100.00",
  onButtonClick: () => {
    alert("Add to Cart Button Clicked!");
  },
  onChangeQuantity: (val) => {
    alert(`Quantity value updated to: ${val}`);
  },
};

export const LightTheme = ComponentTemplate.bind({});
LightTheme.args = {
  theme: "light",
  inStock: true,
  quantityValue: 2,
  currency: "RM",
  price: "100.00",
  subTotal: "100.00",
  onButtonClick: () => {
    alert("Add to Cart Button Clicked!");
  },
  onChangeQuantity: (val) => {
    alert(`Quantity value updated to: ${val}`);
  },
};

export const CustomStylesWithClassNameProp = ComponentTemplate.bind({});
CustomStylesWithClassNameProp.args = {
  className: "addToCart_stories_styles",
  inStock: true,
  quantityValue: 2,
  currency: "RM",
  price: "100.00",
  subTotal: "100.00",
  onButtonClick: () => {
    alert("Add to Cart Button Clicked!");
  },
  onChangeQuantity: (val) => {
    alert(`Quantity value updated to: ${val}`);
  },
};
