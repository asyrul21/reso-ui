import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Banner } from "@components/Banners/Banner";
import { BannerWrapper } from "@components/Banners/Banner-Wrapper";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Banners/Wrapper",
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

            You can use it as it is (which behaves like any other block element), or place it as \`position: absolute\`, by enabling the
            *positionAbsolute* property.

            You can set *hasMaxHeight* to true to enable scrolling, if you wish to set the Banner Wrapper a maximum height.

            Only conditionally render this component, to prevent empty Divs (when all the Banners are closed) on your rendered dom.
        `,
      },
    },
  },
} as ComponentMeta<typeof BannerWrapper>;

const ComponentTemplateDefault: ComponentStory<typeof BannerWrapper> = (
  args
) => (
  <BannerWrapper {...args}>
    <Banner type="info" text="Some information" />
    <Banner type="success" text="Some information" />
  </BannerWrapper>
);

const ComponentTemplatePositionAbsolute: ComponentStory<typeof BannerWrapper> =
  (args) => (
    <div
      style={{
        width: "100%",
        height: "240px",
        position: "relative",
        border: "2px solid red",
        paddingTop: "120px",
      }}
    >
      <BannerWrapper {...args}>
        <Banner type="info" text="Some information" />
        <Banner type="success" text="Some information" />
        <Banner type="warning" text="Some information" />
      </BannerWrapper>
      <p>Other content</p>
    </div>
  );

export const Default = ComponentTemplateDefault.bind({});
Default.args = {};

export const WithCustomStyle = ComponentTemplateDefault.bind({});
WithCustomStyle.args = {
  rootStyles: {
    border: "4px solid red",
  },
};

export const WithPositionAbsolute = ComponentTemplatePositionAbsolute.bind({});
WithPositionAbsolute.args = {
  positionAbsolute: true,
};

export const WithPositionAbsoluteAndHasMaxHeight =
  ComponentTemplatePositionAbsolute.bind({});
WithPositionAbsoluteAndHasMaxHeight.args = {
  positionAbsolute: true,
  hasMaxHeight: true,
  rootStyles: {
    maxHeight: "120px",
  },
};
