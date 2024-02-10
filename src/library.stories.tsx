import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import dedent from "ts-dedent";

import { Example } from "./library";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Overview",
  component: Example,
  parameters: {
    docs: {
      description: {
        component: dedent`
            Reso UI strives to be an all-in-one UI library that enables maximum customizability.

            Every component comes with at least a \`rootClassName\` and \`rootStyles\` properties to enable client to override the styles and/or behaviours of the containers of the components.

            Some components may also have additional className and style props to enable clients to override more specific elements.

            Some components may support padding props and margin props to enable client to set spacing and layout styles directly on the JSX.

            This library aims to include all the essential tools needed to build a front-end React application:

            - UI Components

            - Hooks

            - Icons

            - Utils

            To use our component, import the styles in your project root \`index.ts\` or \`index.tsx\` or \`index.js\`. This line has to be BEFORE your application-specific stylings:

            \`\`\`js
            import "reso-ui/styles";

            // your application-specific styles will override reso-ui styles
            import "./index.css";
            \`\`\`

            Then import with \`import { Button } from 'reso-ui'\` throughout your app.
        `,
      },
    },
  },
} as ComponentMeta<typeof Example>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ComponentTemplate: ComponentStory<typeof Example> = (args) => (
  <Example {...args}>
    <div style={{ marginTop: 10, fontWeight: "bold" }}>
      Please view the Docs Tab
    </div>
  </Example>
);

export const Default = ComponentTemplate.bind({});
Default.args = {
  name: "John",
};
