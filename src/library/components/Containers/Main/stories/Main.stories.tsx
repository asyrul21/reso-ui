import React from "react";
import {
  StoryFn as ComponentStory,
  Meta as ComponentMeta,
} from "@storybook/react";
import dedent from "ts-dedent";

// always import from index to include global styles
import { Main } from "../";
// import "./storiesStyle.scss";
//
const SampleChildComponent = () => {
  return <div className="story_test_box">Test Child</div>;
};

export default {
  title: "Components/Containers/Main",
  component: Main,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A wrapper \`<main />\` element that enables default background colors and layouts, based on size of Navbar.

            Supported themes: light(default) and dark.

            Import statement: \`import { Main } from 'reso-ui'\`
        `,
      },
    },
  },
} as ComponentMeta<typeof Main>;

const ComponentTemplate: ComponentStory<typeof Main> = (args) => (
  <Main {...args}>
    <SampleChildComponent />
  </Main>
);

export const DefaultTheme = ComponentTemplate.bind({});
DefaultTheme.args = {};

export const withDarkTheme = ComponentTemplate.bind({});
withDarkTheme.args = {
  theme: "dark",
};
