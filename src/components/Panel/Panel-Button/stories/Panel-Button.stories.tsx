import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Panel } from "@components/Containers/Panel";
import { PanelButton } from "@components/Panel/Panel-Button";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Panel/Panel Button",
  component: PanelButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A button component suited for the Panel container.

            You can customize hover behaviour via rootClassName.
        `,
      },
    },
  },
} as ComponentMeta<typeof PanelButton>;

const ComponentTemplate: ComponentStory<typeof PanelButton> = (args) => {
  const storyProps = {
    text: "Sample",
    onClick: () => {
      alert("Button clicked!");
    },
    ...args,
  };
  return (
    <Panel>
      <PanelButton {...storyProps} />
    </Panel>
  );
};

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const Disabled = ComponentTemplate.bind({});
Disabled.args = {
  disabled: true,
};

export const WithCustomStyle = ComponentTemplate.bind({});
WithCustomStyle.args = {
  rootStyles: {
    borderColor: "green",
    borderWidth: "4px",
  },
};

export const WithCustomClass = ComponentTemplate.bind({});
WithCustomClass.args = {
  rootClassName: "panel_button_custom_class",
};
