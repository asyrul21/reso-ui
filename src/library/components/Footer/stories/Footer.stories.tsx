import React, { useState } from "react";
import { StoryFn as ComponentStory, Meta as ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Footer } from "../";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Footer",
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A footer wrapper component.

            It supports Padding props.

            You may also set [positionFixed] prop to true, to fix it at the bottom of the screen.
        `,
      },
    },
  },
} as ComponentMeta<typeof Footer>;

const ComponentTemplate: ComponentStory<typeof Footer> = (args) => {
  return (
    <Footer {...args} pa={5}>
      <div>Sample Footer child component</div>
    </Footer>
  );
};

export const DefaultWithPaddingAll = ComponentTemplate.bind({});
DefaultWithPaddingAll.args = {};

export const WithCustomContainerClassName = ComponentTemplate.bind({});
WithCustomContainerClassName.args = {
  rootClassName: "footer-stories-sample",
};

export const WithPositionFixed = ComponentTemplate.bind({});
WithPositionFixed.args = {
  positionFixed: true,
};
