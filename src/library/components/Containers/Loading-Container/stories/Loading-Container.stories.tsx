import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { LoadingContainer } from "@components/Containers/Loading-Container";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/Loading Container",
  component: LoadingContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A wrapper component that shows a \`ComponentLoader\` when the child component is fetching some data,
            and \`ComponentError\` when there is an error with the fetching.

            It has two types:

            ## 1. Layer
            
            1. The Loader/Error is placed *ON TOP* of the child component. This is suitable if you are loading a Table or Grid.

            2. The Width and Height of this wrapper type takes the width and height of its *CHILD*. (aka \`width: fit-content\`)

            ## 2. Conditional
            
            1. The Loader/Error *REPLACES* the child component. This is suitable when you are loading a Page.

            2. The Width and Height of this wrapper type takes the width and height of its *PARENT*. (aka \`width: inherit\`).
            This is therefore advisable to have a View or a Body element enclosing this wrapper type.
        `,
      },
    },
  },
} as ComponentMeta<typeof LoadingContainer>;

const ComponentTemplateLayer: ComponentStory<typeof LoadingContainer> = (
  args
) => (
  <LoadingContainer {...args}>
    <div
      style={{
        border: "2px solid red",
        width: "300px",
        height: "300px",
      }}
    >
      Sample Component Underneath
    </div>
  </LoadingContainer>
);

const ComponentTemplateConditional: ComponentStory<typeof LoadingContainer> = (
  args
) => (
  <div style={{ width: "100%", height: "420px" }}>
    <LoadingContainer {...args}>
      <div
        style={{
          border: "2px solid red",
          width: "300px",
          height: "300px",
          margin: "0 auto",
        }}
      >
        Sample Component Underneath
      </div>
    </LoadingContainer>
  </div>
);

export const LayeringALoadingComponent = ComponentTemplateLayer.bind({});
LayeringALoadingComponent.args = {
  type: "layer",
  loading: true,
};

export const LayeringAnErronousComponent = ComponentTemplateLayer.bind({});
LayeringAnErronousComponent.args = {
  type: "layer",
  error: "Oops Something went wrong",
};

export const LayeringALoadingComponentWithMinHeight =
  ComponentTemplateLayer.bind({});
LayeringALoadingComponentWithMinHeight.args = {
  type: "layer",
  loading: true,
  minHeight: "320px",
};

export const ConditionalLoadingComponent = ComponentTemplateConditional.bind(
  {}
);
ConditionalLoadingComponent.args = {
  type: "conditional",
  loading: true,
};

export const ConditionalErronousComponent = ComponentTemplateConditional.bind(
  {}
);
ConditionalErronousComponent.args = {
  type: "conditional",
  error: "Oops Something went wrong",
};
