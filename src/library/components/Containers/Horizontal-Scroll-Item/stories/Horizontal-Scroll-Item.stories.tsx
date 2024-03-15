import React from "react";
import { StoryFn as ComponentStory, Meta as ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { HorizontalScrollItem } from "../";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Containers/Horizontal Scroll Item",
  component: HorizontalScrollItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A container component suited for the Horizontal Scroll Container.

            It supports both Margin and Padding props.
        `,
      },
    },
  },
} as ComponentMeta<typeof HorizontalScrollItem>;

const ComponentTemplate: ComponentStory<typeof HorizontalScrollItem> = (
  args,
) => (
  <HorizontalScrollItem {...args}>
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "2px solid red",
      }}
    >
      sample child
    </div>
  </HorizontalScrollItem>
);

export const DefaultWithBorder = ComponentTemplate.bind({});
DefaultWithBorder.args = {
  rootStyles: {
    border: "2px solid blue",
  },
};

export const withPaddingProps = ComponentTemplate.bind({});
withPaddingProps.args = {
  rootStyles: {
    border: "2px solid blue",
  },
  pa: 5,
};
