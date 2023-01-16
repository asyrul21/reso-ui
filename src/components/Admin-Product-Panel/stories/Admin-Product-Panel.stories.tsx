import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { AdminProductPanel } from "@components/Admin-Product-Panel";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Admin Product Panel",
  component: AdminProductPanel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A panel for admins to view a Product's quantities and sales information.
        `,
      },
    },
  },
} as ComponentMeta<typeof AdminProductPanel>;

const ComponentTemplate: ComponentStory<typeof AdminProductPanel> = (args) => (
  <AdminProductPanel {...args} />
);

export const Default = ComponentTemplate.bind({});
Default.args = {
  countInStock: 5,
};

export const WithCustomEditButtonStyles = ComponentTemplate.bind({});
WithCustomEditButtonStyles.args = {
  countInStock: 5,
  editButtonStyles: { backgroundColor: "yellow" },
};

export const WithCustomArchiveButtonClass = ComponentTemplate.bind({});
WithCustomArchiveButtonClass.args = {
  countInStock: 5,
  archiveButtonClassName: "adminProductPanel_sample_archive",
};

export const WithCustomRowClassName = ComponentTemplate.bind({});
WithCustomRowClassName.args = {
  countInStock: 5,
  rowClassName: "adminProductPanel_sample_row",
};

export const WithCustomRowStyles = ComponentTemplate.bind({});
WithCustomRowStyles.args = {
  countInStock: 5,
  rowStyles: {
    background: "orange",
    padding: "5px",
    borderRadius: "5px",
    marginBottom: "5px",
  },
};
