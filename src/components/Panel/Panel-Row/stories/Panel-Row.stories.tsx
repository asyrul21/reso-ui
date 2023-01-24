import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Panel } from "@components/Panel/";
import { PanelRow } from "@components/Panel/Panel-Row";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Panel/Panel Row",
  component: PanelRow,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A row component suited for the Panel container, meant to show key-value pairs of information.
        `,
      },
    },
  },
} as ComponentMeta<typeof PanelRow>;

const ComponentTemplate: ComponentStory<typeof PanelRow> = (args) => (
  <Panel>
    <PanelRow {...args} />
  </Panel>
);

export const Default = ComponentTemplate.bind({});
Default.args = {
  keyStr: "Sample key:",
  value: "Sample value",
};

export const WithCustomStyle = ComponentTemplate.bind({});
WithCustomStyle.args = {
  keyStr: "Sample key:",
  value: "Sample value",
  rootStyles: {
    color: "green",
  },
};

export const WithCustomKeyStyle = ComponentTemplate.bind({});
WithCustomKeyStyle.args = {
  keyStr: "Sample key:",
  value: "Sample value",
  keyStyles: {
    color: "green",
  },
};
