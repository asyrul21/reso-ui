import React from "react";
import {
  StoryFn as ComponentStory,
  Meta as ComponentMeta,
} from "@storybook/react";

// always import from index to include global styles
import { Banner } from "../";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Banners/Banner",
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A generic Banner component with various types.

            Import statement: \`import { Banner } from 'reso-ui'\`
        `,
      },
    },
  },
} as ComponentMeta<typeof Banner>;

const ComponentTemplate: ComponentStory<typeof Banner> = (args) => {
  const storyProps = {
    text: "Some Information",
    ...args,
  };
  return <Banner {...storyProps} />;
};

export const DefaultInfo = ComponentTemplate.bind({});
DefaultInfo.args = {
  type: "info",
};

export const DefaultSuccess = ComponentTemplate.bind({});
DefaultSuccess.args = {
  type: "success",
};

export const DefaultWarning = ComponentTemplate.bind({});
DefaultWarning.args = {
  type: "warning",
};

export const DefaultError = ComponentTemplate.bind({});
DefaultError.args = {
  type: "error",
};

export const WithCustomStyle = ComponentTemplate.bind({});
WithCustomStyle.args = {
  type: "info",
  rootStyles: {
    borderStyle: "solid",
    borderColor: "green",
    borderWidth: "3px",
    background: "yellow",
    color: "black",
  },
};

export const WithCustomClass = ComponentTemplate.bind({});
WithCustomClass.args = {
  type: "info",
  rootClassName: "banner_generic_custom_class",
};

export const OverflowBehaviour = ComponentTemplate.bind({});
OverflowBehaviour.args = {
  type: "info",
  text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
};
