import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { ComponentError } from "@components/Errors/Component-Error";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Errors/Component Error",
  component: ComponentError,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A component to show when there is an error occuring within a component.

            It is absolute-positioned, hence require parent component to have \`position:relative\`
        `,
      },
    },
  },
} as ComponentMeta<typeof ComponentError>;

const ComponentTemplate: ComponentStory<typeof ComponentError> = (args) => (
  <div
    style={{
      height: "300px",
      width: "300px",
      border: "1px solid black",
      position: "relative",
    }}
  >
    <ComponentError {...args} />
  </div>
);

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const WithText = ComponentTemplate.bind({});
WithText.args = {
  text: "Data failed to be fetched",
};

export const CustomContainerClassname = ComponentTemplate.bind({});
CustomContainerClassname.args = {
  rootClassName: "component_error_story_sample",
};
