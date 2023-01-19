import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Banner } from "@components/Banners/Banner";
import { BannerWrapper } from "@components/Banners/Banner-Wrapper";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/Banner Wrapper",
  component: BannerWrapper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A wrapper component to put and stack all Banners.
        `,
      },
    },
  },
} as ComponentMeta<typeof BannerWrapper>;

const ComponentTemplate: ComponentStory<typeof BannerWrapper> = (args) => (
  <BannerWrapper {...args}>
    <Banner type="info" text="Some information" />
    <Banner type="success" text="Some information" />
  </BannerWrapper>
);

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const WithCustomStyle = ComponentTemplate.bind({});
WithCustomStyle.args = {
  rootStyles: {
    border: "4px solid red",
  },
};
