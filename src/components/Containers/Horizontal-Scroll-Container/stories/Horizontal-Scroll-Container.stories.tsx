import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { HorizontalScrollContainer } from "@components/Containers/Horizontal-Scroll-Container";
import { HorizontalScrollItem } from "@components/Containers/Horizontal-Scroll-Item";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/Horizontal Scroll Container",
  component: HorizontalScrollContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A container component that enables horizontal arrangements of children, scrollable when overflown.

            The children to this component must have \`display: inline-block\`. Alternatively, you can use the HorizontalScrollItem to wrap your children component.
            
            If you wish to have children with \`display: flex\`, you can wrap that component with the HorizontalScrollItem.

            It supports both Margin and Padding props.
        `,
      },
    },
  },
} as ComponentMeta<typeof HorizontalScrollContainer>;

const ComponentTemplate: ComponentStory<typeof HorizontalScrollContainer> = (
  args
) => (
  <HorizontalScrollContainer {...args}>
    <HorizontalScrollItem mh={5}>
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
    <HorizontalScrollItem mh={5}>
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
    <HorizontalScrollItem mh={5}>
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
  </HorizontalScrollContainer>
);

export const DefaultWithBorder = ComponentTemplate.bind({});
DefaultWithBorder.args = {
  rootStyles: {
    border: "2px solid blue",
  },
  pv: 3,
};

export const withPaddingProps = ComponentTemplate.bind({});
withPaddingProps.args = {
  rootStyles: {
    border: "2px solid blue",
  },
  pa: 5,
};
