import React from "react";
import { StoryFn as ComponentStory, Meta as ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Flex } from "../";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

const SampleChildComponent = () => {
  return <div className="story_test_box">Test Child</div>;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Containers/Flex",
  component: Flex,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A container component with Display Flex features enabled.

            It supports both Margin and Padding props.
        `,
      },
    },
  },
} as ComponentMeta<typeof Flex>;

const ComponentTemplate: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <>
      <SampleChildComponent />
      <SampleChildComponent />
    </>
  </Flex>
);

export const DefaultWithBorder = ComponentTemplate.bind({});
DefaultWithBorder.args = {
  borderColor: "blue",
};

export const DefaultWithPaddingAll = ComponentTemplate.bind({});
DefaultWithPaddingAll.args = {
  borderColor: "blue",
  pa: 5,
};

export const DirectionColumn = ComponentTemplate.bind({});
DirectionColumn.args = {
  borderColor: "blue",
  direction: "column",
};

export const JustifyStart = ComponentTemplate.bind({});
JustifyStart.args = {
  borderColor: "blue",
  justify: "start",
};

export const CustomStylesAndAlign = ComponentTemplate.bind({});
CustomStylesAndAlign.args = {
  borderColor: "blue",
  justify: "start",
  rootStyles: { height: "300px" },
  align: "end",
};
