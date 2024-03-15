import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

// always import from index to include global styles
import { Back } from "../";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

const Meta: Meta<typeof Back> = {
  title: "Components/Buttons/Back",
  component: Back,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: dedent`
            A Back Button component.

            It supports Margin props.

            You can customize hover and behaviour via linkClassName.

            Import statement: \`import { Back } from 'reso-ui'\`
        `,
      },
    },
  },
};

export default Meta;
type Story = StoryObj<typeof Back>;

export const Default: Story = {
  args: {
    to: "/",
    text: "Back",
  },
  render: (args) => {
    return <Back {...args} />;
  },
};

export const WithCustomContainerClassName = {
  ...Default,
  args: {
    ...Default.args,
    rootClassName: "back-stories-sample",
  },
};

export const WithCustomContainerStyles = {
  ...Default,
  args: {
    ...Default.args,
    rootStyles: {
      backgroundColor: "red",
    },
  },
};

export const WithCustomLinkClassName = {
  ...Default,
  args: {
    ...Default.args,
    linkClassName: "back-stories-sample-link",
  },
};

export const WithCustomLinkStyles = {
  ...Default,
  args: {
    ...Default.args,
    linkStyles: {
      color: "red",
    },
  },
};

export const Disabled = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};
