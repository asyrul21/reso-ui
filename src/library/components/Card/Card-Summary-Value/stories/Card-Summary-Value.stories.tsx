import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { CardContainer } from "@components/Card";
import { CardSummaryValue } from "@components/Card/Card-Summary-Value";

import dedent from "ts-dedent";
import { CardContent } from "@components/Card/Card-Content";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Card/Card Summary Value",
  component: CardSummaryValue,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A text component meant to display Summary Values within a Card.
        `,
      },
    },
  },
} as ComponentMeta<typeof CardSummaryValue>;

const ComponentTemplate: ComponentStory<typeof CardSummaryValue> = (args) => (
  <CardContainer pa={5}>
    <CardSummaryValue {...args} />
  </CardContainer>
);

export const DefaultWithBorder = ComponentTemplate.bind({});
DefaultWithBorder.args = {
  rootStyles: {
    border: "2px solid green",
  },
  value: 10,
};

export const WithCustomStyle = ComponentTemplate.bind({});
WithCustomStyle.args = {
  rootStyles: {
    background: "green",
    padding: "10px",
    color: "white",
  },
  value: "$12.5k",
};

export const DefaultWithTextOverflow = () => (
  <CardContainer pa={5}>
    <CardContent>
      <CardSummaryValue value={"£12,500,000,000,000"} />
    </CardContent>
  </CardContainer>
);
