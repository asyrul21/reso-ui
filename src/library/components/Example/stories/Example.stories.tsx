import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Example } from "../";
import "./storiesStyle.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Example",
  component: Example,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Example>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ComponentTemplate: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const DefaultNoTheme = ComponentTemplate.bind({});
DefaultNoTheme.args = {
  name: "John",
};

export const NoThemeWithClassname = ComponentTemplate.bind({});
NoThemeWithClassname.args = {
  name: "John",
  rootClassName: "exampleComponent_story",
};

export const LightTheme = ComponentTemplate.bind({});
LightTheme.args = { name: "Jane", theme: "light" };

export const DarkTheme = ComponentTemplate.bind({});
DarkTheme.args = {
  name: "Jane",
  theme: "dark",
};

export const OverrideThemeWithClassname = ComponentTemplate.bind({});
OverrideThemeWithClassname.args = {
  name: "Rob",
  theme: "dark",
  rootClassName: "exampleComponent_story",
};
