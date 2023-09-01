import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { View } from "@components/Containers/View";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

const SampleChildComponent = () => {
  return <div className="story_test_box">Test Child Component</div>;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Containers/View",
  component: View,
  parameters: {
    docs: {
      description: {
        component: dedent`
            A container View component with standardised styles and Theme-able.

            It supports Padding props.
        `,
      },
    },
  },
} as ComponentMeta<typeof View>;

const ComponentTemplate: ComponentStory<typeof View> = (args) => (
  <View {...args}>
    <>
      <SampleChildComponent />
      <SampleChildComponent />
    </>
  </View>
);

export const DefaultWithBorder = ComponentTemplate.bind({});
DefaultWithBorder.args = {
  rootStyles: { border: "2px solid blue" },
};

export const WithCustomClassName = ComponentTemplate.bind({});
WithCustomClassName.args = {
  rootClassName: "view_story_example",
};

export const WithPadding = ComponentTemplate.bind({});
WithPadding.args = {
  pa: 5,
  rootStyles: { border: "2px solid blue" },
};

export const WithTheme = ComponentTemplate.bind({});
WithTheme.args = {
  rootStyles: { border: "2px solid blue" },
  theme: "dark",
};
