import React from "react";
import { StoryFn as ComponentStory, Meta as ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { PanelContainer } from "../../Panel-Container";
import { PanelTitle } from "../";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Panel/Panel Title",
  component: PanelTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A header component suited for the Panel container.
        `,
      },
    },
  },
} as ComponentMeta<typeof PanelTitle>;

const ComponentTemplate: ComponentStory<typeof PanelTitle> = (args) => (
  <PanelContainer>
    <PanelTitle {...args} />
  </PanelContainer>
);

export const Default = ComponentTemplate.bind({});
Default.args = {
  text: "Sample Title",
};

export const WithCustomStyle = ComponentTemplate.bind({});
WithCustomStyle.args = {
  text: "Sample Title",
  rootStyles: {
    color: "green",
    fontSize: "24px",
  },
};
