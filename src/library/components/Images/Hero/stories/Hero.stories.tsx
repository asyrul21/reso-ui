import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Hero } from "@components/Images/Hero";
import "./storyStyles.scss";

import dedent from "ts-dedent";

export default {
  title: "Components/Images/Hero",
  component: Hero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A Hero image component, basically a styled \`Image\` component.

            By default, it has a max-width of 1280px. If you wish to extend it to full width of browser,
            you can use the *fullWidth* prop.

            The parent of this component must have \`display: block\`, and NOT \`display: flex\`
        `,
      },
    },
  },
} as ComponentMeta<typeof Hero>;

const ComponentTemplate: ComponentStory<typeof Hero> = (args) => (
  <Hero {...args} />
);

export const Default = ComponentTemplate.bind({});
Default.args = {
  src: "/hero-example.jpg",
};

export const WithContainerClass = ComponentTemplate.bind({});
WithContainerClass.args = {
  src: "/hero-example.jpg",
  rootClassName: "hero_custom_story",
};

export const FullWidth = ComponentTemplate.bind({});
FullWidth.args = {
  src: "/hero-example.jpg",
  fullWidth: true,
};
