import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Button } from "../";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Buttons/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A generic button component.

            It supports Margin props.

            You can customize hover behaviour via rootClassName.

            Import statement: \`import { Button } from 'reso-ui/Button'\`
        `,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const ComponentTemplate: ComponentStory<typeof Button> = (args) => {
  const storyProps = {
    text: "Click",
    onClick: () => {
      alert("Button clicked!");
    },
    ...args,
  };
  return <Button {...storyProps} />;
};

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const DefaultPrimary = ComponentTemplate.bind({});
DefaultPrimary.args = {
  type: "primary",
};

export const DefaultLink = ComponentTemplate.bind({});
DefaultLink.args = {
  type: "link",
};

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
  rootClassName: "button_generic_custom_class",
};

export const UseParentComponentWidth = () => {
  return (
    <div
      style={{
        width: "320px",
        height: "120px",
        border: "2px solid blue",
        padding: "10px",
      }}
    >
      <Button text="Click" inheritWidth />
    </div>
  );
};
