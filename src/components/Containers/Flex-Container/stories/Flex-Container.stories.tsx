import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { FlexContainer } from "@components";
import "./storiesStyle.scss";

const SampleChildComponent = () => {
  return <div className="story_test_box">Test Child</div>;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/Flex Container",
  component: FlexContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FlexContainer>;

const ComponentTemplate: ComponentStory<typeof FlexContainer> = (args) => (
  <FlexContainer {...args}>
    <>
      <SampleChildComponent />
      <SampleChildComponent />
    </>
  </FlexContainer>
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
  styles: { height: "300px" },
  align: "end",
};
