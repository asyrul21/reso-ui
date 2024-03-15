import React from "react";
import { StoryFn as ComponentStory, Meta as ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { CardContainer } from "../../Card-Container";
import { CardContent } from "../";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Card/Card Content",
  component: CardContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A container component meant to wrap children of Card.

            It supports both Margin and Padding props.
        `,
      },
    },
  },
} as ComponentMeta<typeof CardContent>;

const ComponentTemplate: ComponentStory<typeof CardContent> = (args) => (
  <CardContainer pa={5}>
    <CardContent {...args}>
      content 1 this is a sample content for a card.
    </CardContent>
    <CardContent {...args}>content 2</CardContent>
  </CardContainer>
);

export const DefaultWithBorder = ComponentTemplate.bind({});
DefaultWithBorder.args = {
  rootStyles: {
    border: "2px solid green",
  },
};

export const WithCustomStyle = ComponentTemplate.bind({});
WithCustomStyle.args = {
  rootStyles: {
    background: "green",
    color: "white",
  },
};

export const DefaultWithTextOverflow = () => (
  <CardContainer pa={5}>
    <CardContent rootStyles={{ border: "1px solid green" }} wrap={false}>
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's
    </CardContent>
  </CardContainer>
);
