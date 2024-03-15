import React from "react";
import { StoryFn as ComponentStory, Meta as ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { QuantityCounter } from "../";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Quantity Counter",
  component: QuantityCounter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof QuantityCounter>;

export const Default = () => {
  return (
    <QuantityCounter
      value={5}
      onChange={(val) => {
        alert(`Counter value updated to: ${val}`);
      }}
    />
  );
};
