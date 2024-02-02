import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { PanelContainer } from "../";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Panel/Panel Container",
  component: PanelContainer,
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
} as ComponentMeta<typeof PanelContainer>;

const ComponentTemplate: ComponentStory<typeof PanelContainer> = (args) => (
  <PanelContainer {...args}>Sample</PanelContainer>
);

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const WithClassName = ComponentTemplate.bind({});
WithClassName.args = {
  rootClassName: "panel_container_root_class",
};

export const WithCustomStyle = ComponentTemplate.bind({});
WithCustomStyle.args = {
  rootStyles: {
    background: "green",
    color: "white",
  },
};
