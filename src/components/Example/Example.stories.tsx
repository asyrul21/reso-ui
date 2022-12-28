import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Example } from "./Example";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Reso Components/Example",
  component: Example,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Example>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  name: "John",
  theme: "light",
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  name: "Jane",
  theme: "dark",
};

export const UnknownTheme = Template.bind({});
UnknownTheme.args = {
  name: "Rob",
  theme: "pizza",
};

// export const ExampleC = () => <Example />;
