import React from "react";
import { StoryFn as ComponentStory, Meta as ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Loader } from "../";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Loaders/Loader",
  component: Loader,
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
} as ComponentMeta<typeof Loader>;

const ComponentTemplate: ComponentStory<typeof Loader> = (args) => (
  <div style={{ width: "200px", height: "200px", position: "relative" }}>
    <Loader {...args} />
    An Example Component
  </div>
);

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const CustomContainerClass = ComponentTemplate.bind({});
CustomContainerClass.args = {
  rootClassName: "Loader_container_story",
};

export const CustomIconContainerClass = ComponentTemplate.bind({});
CustomIconContainerClass.args = {
  iconContainerClassName: "Loader_icon_container_story",
};
