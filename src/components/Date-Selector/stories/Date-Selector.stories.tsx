import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { DateSelector, IDateSelectorProps } from "@components/Date-Selector";
import "./storiesStyle.scss";

import dedent from "ts-dedent";
import { Flex } from "@components/Containers/Flex";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form Controls/Date Selector",
  component: DateSelector,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A Date Selector component.

            It supports Margin props, except Margin Bottom, which you may or may not adjust to your liking.
        `,
      },
    },
  },
} as ComponentMeta<typeof DateSelector>;

const ComponentTemplate: ComponentStory<typeof DateSelector> = (args) => {
  const storyProps = {
    value: new Date(),
    rootStyles: { marginBottom: "280px" },
    ...args,
  } as IDateSelectorProps;
  return <DateSelector {...storyProps} />;
};

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const WithCustomRootClassName = ComponentTemplate.bind({});
WithCustomRootClassName.args = {
  rootClassName: "date-selector-stories-sample",
};

export const WithCustomRootStyles = ComponentTemplate.bind({});
WithCustomRootStyles.args = {
  rootStyles: {
    marginBottom: "280px",
    backgroundColor: "cyan",
    color: "orange",
    fontWeight: "bold",
  },
};

export const WithCustomGridStyles = ComponentTemplate.bind({});
WithCustomGridStyles.args = {
  gridContainerStyles: {
    marginBottom: "280px",
    backgroundColor: "cyan",
    color: "orange",
  },
};

export const BindingToParentState = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  return (
    <Flex direction="column" align="start">
      <p>Selected Date: {`${selectedDate}`}</p>
      <DateSelector
        value={selectedDate}
        onChange={(d) => setSelectedDate(d)}
        rootStyles={{ marginBottom: "280px" }}
      />
    </Flex>
  );
};

export const CustomDateNumbers = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  return (
    <Flex direction="column" align="start">
      <p>Selected Date: {`${selectedDate}`}</p>
      <DateSelector
        value={selectedDate}
        onChange={(d) => setSelectedDate(d)}
        rootStyles={{ marginBottom: "280px" }}
        getDisplayDayNumber={(d) => `X${d}`}
      />
    </Flex>
  );
};

export const CustomFormatting = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  return (
    <Flex direction="column" align="start">
      <p>Selected Date: {`${selectedDate}`}</p>
      <DateSelector
        value={selectedDate}
        onChange={(d) => setSelectedDate(d)}
        rootStyles={{ marginBottom: "280px" }}
        format={(d) => `Selected Date: ${d.toDateString()}`}
      />
    </Flex>
  );
};

// export const WithCustomContainerStyles = ComponentTemplate.bind({});
// WithCustomContainerStyles.args = {
//   rootStyles: {
//     backgroundColor: "red",
//   },
// };

// export const WithCustomLinkClassName = ComponentTemplate.bind({});
// WithCustomLinkClassName.args = {
//   linkClassName: "back-stories-sample-link",
// };

// export const WithCustomLinkStyles = ComponentTemplate.bind({});
// WithCustomLinkStyles.args = {
//   linkStyles: {
//     color: "red",
//   },
// };

// export const Disabled = ComponentTemplate.bind({});
// Disabled.args = {
//   disabled: true,
// };
