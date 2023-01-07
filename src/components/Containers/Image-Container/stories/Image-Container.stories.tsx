import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { ImageContainer } from "@components/Containers/Image-Container";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/Image Container",
  component: ImageContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A Wrapper for an Image component or an \`<img />\` element. It renders a \`Component Loader\` when
            the image is not yet loaded, then removes it once the image is ready.

            It also supports Margin props.
            
            The child to this component must be either an \`Image\` component, or an <img /> element, and will have
            props [loaded] and [onLoad] supplied to them with values.

            The child to this component should have styles { width: "100%", height: "auto"}
        `,
      },
    },
  },
} as ComponentMeta<typeof ImageContainer>;

const ComponentTemplate: ComponentStory<typeof ImageContainer> = (args) => (
  <ImageContainer {...args}>
    <img
      src="/image-example.jpg"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  </ImageContainer>
);

export const DefaultWithBorder = ComponentTemplate.bind({});
DefaultWithBorder.args = {
  styles: {
    border: "2px solid blue",
  },
};
