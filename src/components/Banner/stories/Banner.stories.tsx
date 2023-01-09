import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Banner } from "@components/Banner";
import "./storyStyles.scss";

import dedent from "ts-dedent";

export default {
  title: "Components/Banner",
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A Banner image component, basically a styled \`Image\` component.
        `,
      },
    },
  },
} as ComponentMeta<typeof Banner>;

const ComponentTemplate: ComponentStory<typeof Banner> = (args) => (
  <Banner {...args} />
);

export const Default = ComponentTemplate.bind({});
Default.args = {
  src: "/banner-example.jpg",
};

export const CustomContainerClass = ComponentTemplate.bind({});
CustomContainerClass.args = {
  src: "/banner-example.jpg",
  className: "banner_custom_story",
};
