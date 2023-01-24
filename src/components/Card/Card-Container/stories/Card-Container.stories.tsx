import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Card } from "@components/Card";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card/Container",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A container component with customised look and feel.

            It supports both Margin and Padding props.
        `,
      },
    },
  },
} as ComponentMeta<typeof Card>;

const ComponentTemplate: ComponentStory<typeof Card> = (args) => (
  <Card pa={5} {...args}>
    Sample
  </Card>
);

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const WithCustomStyle = ComponentTemplate.bind({});
WithCustomStyle.args = {
  rootStyles: {
    background: "green",
    color: "white",
  },
};
