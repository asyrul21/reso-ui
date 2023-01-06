import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { ComponentLoader } from "@components";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loaders/Component Loader",
  component: ComponentLoader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A basic Loader to be placed *on top* of a component. It can be used within a component, or as a ternary placeholder.
            
            The parent component MUST have \`position: relative\`.
        `,
      },
    },
  },
} as ComponentMeta<typeof ComponentLoader>;

const ComponentTemplate: ComponentStory<typeof ComponentLoader> = (args) => (
  <div style={{ width: "200px", height: "200px", position: "relative" }}>
    <ComponentLoader {...args} />
    An Example Component
  </div>
);

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const CustomContainerClass = ComponentTemplate.bind({});
CustomContainerClass.args = {
  className: "componentLoader_container_story",
};

export const CustomIconContainerClass = ComponentTemplate.bind({});
CustomIconContainerClass.args = {
  iconContainerClassName: "componentLoader_icon_container_story",
};
