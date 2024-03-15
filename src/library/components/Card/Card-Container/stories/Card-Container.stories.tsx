import React from "react";
import { StoryFn as ComponentStory, Meta as ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { CardContainer } from "../Card-Container";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Card/Card Container",
  component: CardContainer,
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
} as ComponentMeta<typeof CardContainer>;

const ComponentTemplate: ComponentStory<typeof CardContainer> = (args) => (
  <CardContainer pa={5} {...args}>
    Sample
  </CardContainer>
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
