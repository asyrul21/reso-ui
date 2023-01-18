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

            By default, it has a max-width of 1280px. If you wish to extend it to full width of browser,
            you can use the *fullWidth* prop.

            The parent of this component must have \`display: block\`, and NOT \`display: flex\`
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
  rootClassName: "banner_custom_story",
};

export const FullWidth = ComponentTemplate.bind({});
FullWidth.args = {
  src: "/banner-example.jpg",
  fullWidth: true,
};
