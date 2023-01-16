import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Image } from "@components/Image";
import "./storyStyles.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Image",
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            An Image component contained within a \`<div />\` that renders a \`Component Loader\` when
            the image is not yet loaded, then removes it once the image is ready.

            It supports Margin props.
        `,
      },
    },
  },
} as ComponentMeta<typeof Image>;

const ComponentTemplate: ComponentStory<typeof Image> = (args) => (
  <Image {...args} />
);

export const Default = ComponentTemplate.bind({});
Default.args = {
  src: "/image-example.jpg",
};

export const CustomContainerClass = ComponentTemplate.bind({});
CustomContainerClass.args = {
  src: "/image-example.jpg",
  rootClassName: "image_custom_story",
};

export const WithoutFallbacks = ComponentTemplate.bind({});
WithoutFallbacks.args = {
  src: "/a-broken-link",
  rootStyles: {
    border: "2px solid blue",
  },
};
WithoutFallbacks.parameters = {
  docs: {
    description: {
      story:
        "Sometimes the source link to an image deployed over the internet get broken. To prevent this, you can provide fallback sources.",
    },
  },
};

export const UsingFallbacks = ComponentTemplate.bind({});
UsingFallbacks.args = {
  src: "/a-broken-link",
  fallbacks: ["/fallback-image-example.jpg"],
  rootStyles: {
    border: "2px solid blue",
  },
};
UsingFallbacks.parameters = {
  docs: {
    description: {
      story:
        "You can provide fallback image sources, for the component to try and render those sources first, before showing the *broken image icon*.",
    },
  },
};

export const ClickableAndOnClick = ComponentTemplate.bind({});
ClickableAndOnClick.args = {
  src: "/image-example.jpg",
  rootStyles: {
    border: "2px solid blue",
  },
  clickable: "pointer",
  onClick: () => {
    alert("Image was clicked!");
  },
};
