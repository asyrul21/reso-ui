import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { ExternalLinks } from "../";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/External Links",
  component: ExternalLinks,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A \`ul\` component render a list of external links.

            It supports Margin props.
        `,
      },
    },
  },
} as ComponentMeta<typeof ExternalLinks>;

const ComponentTemplate: ComponentStory<typeof ExternalLinks> = (args) => {
  const storyProps = {
    links: [
      {
        link: "#",
        text: "Test Link 1",
      },
      {
        link: "#",
        text: "Test Link 2",
      },
      {
        link: "#",
        text: "Test Link 2",
      },
    ],
    ...args,
  };
  return <ExternalLinks {...storyProps} />;
};

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const withCustomStyles = ComponentTemplate.bind({});
withCustomStyles.args = {
  rootStyles: {
    background: "yellow",
  },
};

export const withCustomLinkStyles = ComponentTemplate.bind({});
withCustomLinkStyles.args = {
  linkStyles: {
    fontWeight: "bold",
    color: "green",
  },
};

export const withCustomHoverBehaviour = ComponentTemplate.bind({});
withCustomHoverBehaviour.args = {
  linkClassName: "external_links_stories_className",
};

// export const DefaultLink = ComponentTemplate.bind({});
// DefaultLink.args = {
//   type: "link",
// };

// export const Disabled = ComponentTemplate.bind({});
// Disabled.args = {
//   disabled: true,
// };

// export const WithCustomStyle = ComponentTemplate.bind({});
// WithCustomStyle.args = {
//   rootStyles: {
//     borderColor: "green",
//     borderWidth: "4px",
//   },
// };

// export const WithCustomClass = ComponentTemplate.bind({});
// WithCustomClass.args = {
//   rootClassName: "button_generic_custom_class",
// };

// export const UseParentComponentWidth = () => {
//   return (
//     <div
//       style={{
//         width: "320px",
//         height: "120px",
//         border: "2px solid blue",
//         padding: "10px",
//       }}
//     >
//       <Button text="Click" inheritWidth />
//     </div>
//   );
// };
