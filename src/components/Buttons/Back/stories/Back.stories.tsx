import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Back } from "@components/Buttons/Back";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/Back",
  component: Back,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A Back Button component.

            It supports Margin props.

            You can customize hover and behaviour via linkClassName.
        `,
      },
    },
  },
} as ComponentMeta<typeof Back>;

const ComponentTemplate: ComponentStory<typeof Back> = (args) => {
  const storyProps = {
    to: "/",
    text: "Back",
    ...args,
  };
  return <Back {...storyProps} />;
};

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const WithCustomContainerClassName = ComponentTemplate.bind({});
WithCustomContainerClassName.args = {
  rootClassName: "back-stories-sample",
};

export const WithCustomContainerStyles = ComponentTemplate.bind({});
WithCustomContainerStyles.args = {
  rootStyles: {
    backgroundColor: "red",
  },
};

export const WithCustomLinkClassName = ComponentTemplate.bind({});
WithCustomLinkClassName.args = {
  linkClassName: "back-stories-sample-link",
};

export const WithCustomLinkStyles = ComponentTemplate.bind({});
WithCustomLinkStyles.args = {
  linkStyles: {
    color: "red",
  },
};

export const Disabled = ComponentTemplate.bind({});
Disabled.args = {
  disabled: true,
};
