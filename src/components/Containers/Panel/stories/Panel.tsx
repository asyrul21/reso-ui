import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Panel } from "@components/Containers/Panel";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/Panel Container",
  component: Panel,
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
} as ComponentMeta<typeof Panel>;

const ComponentTemplate: ComponentStory<typeof Panel> = (args) => (
  <Panel {...args}>Sample</Panel>
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
