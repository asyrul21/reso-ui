import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Icon } from "@components/Icon";
import { HomeIcon } from "@icons";
import { Flex } from "@components/Containers/Flex";
// import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Icon",
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A wrapper for an icon SVG.

            It supports Margin props.

            It requires an SVG Functional Component for the [SvgIcon] prop. You can use our built-in icons, or provide your own.

            If you are using Typescript and svgr/webpack, the SVG is normally imported like this:

            \`import HomeIcon from "./svg/home.svg";\`

            or if you are not on Typescript, they are normally imported like this:

            \`import { ReactComponent as HomeIcon } from "./svg/home.svg";\`
        `,
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const ComponentTemplate: ComponentStory<typeof Icon> = (args) => {
  const storyProps = {
    SvgIcon: HomeIcon,
    ...args,
  };
  return <Icon {...storyProps} />;
};

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const WithCustomDimensions = ComponentTemplate.bind({});
WithCustomDimensions.args = {
  rootStyles: {
    border: "2px solid blue",
  },
  width: 42,
  height: 42,
};

export const WithCustomStyle = ComponentTemplate.bind({});
WithCustomStyle.args = {
  rootStyles: {
    border: "2px solid blue",
    background: "yellow",
  },
};

export const PassingSvgIcon = () => {
  // import { HomeIcon } from "src/icons/your path";
  return <Icon SvgIcon={HomeIcon} />;
};

export const InlineIcon = () => {
  // container
  // import { Flex } from "@components/Containers/Flex";

  // Icon
  // import { Icon } from "@components/Icon";
  // import { HomeIcon } from "@icons";
  return (
    <Flex
      justify="start"
      ph={2}
      rootStyles={{
        width: "200px",
        height: "42px",
        border: "2px solid grey",
        borderRadius: "5px",
      }}
    >
      <Icon SvgIcon={HomeIcon} inline mr={2} />
      Example
    </Flex>
  );
};
