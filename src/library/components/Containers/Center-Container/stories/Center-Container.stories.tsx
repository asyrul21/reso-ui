import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { CenterContainer } from "@components/Containers/Center-Container";
import "./storiesStyle.scss";

const SampleChildComponent = () => {
  return <div className="story_test_box">Test Child</div>;
};

export default {
  title: "Components/Containers/Center Container",
  component: CenterContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CenterContainer>;

const ComponentTemplate: ComponentStory<typeof CenterContainer> = (args) => (
  <CenterContainer {...args}>
    <SampleChildComponent />
  </CenterContainer>
);

export const DefaultWithBorder = ComponentTemplate.bind({});
DefaultWithBorder.args = {
  rootStyles: { border: "2px solid blue" },
};

export const WithCustomClassname = ComponentTemplate.bind({});
WithCustomClassname.args = {
  rootClassName: "centerContainer_story_sample",
};
