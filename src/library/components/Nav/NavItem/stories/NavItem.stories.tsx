import React from "react";
import {
  StoryFn as ComponentStory,
  Meta as ComponentMeta,
} from "@storybook/react";

// always import from index to include global styles
import { Navbar } from "../../Navbar";
import { NavItem } from "../";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Nav/NavItem",
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A NavItem component, to be used together with Navbar.

            It supports Margin props.

            You can choose the implementation between \`<a>\` (default) or \`<button>\` using the [Implementation] prop.

            However, if you wish to use your own implementation (such as using Link from react-router-dom), you can do so with the [renderCustomNavItem] prop.

            If you wish to use the [renderCustomNavItem] prop, you can use our Public CSS Class \`navItem_base\` to setup basic stylings like height and width.

            Import statement: 
            
            \`\`\`
            import { NavItem } from 'reso-ui
            \`\`\`
        `,
      },
    },
  },
} as ComponentMeta<typeof Navbar>;

export const DefaultUsingAnchorTag = () => {
  return (
    /** Remove the position: relative as it is meant for storybook only */
    <Navbar textLogo="Logo" rootStyles={{ position: "relative" }}>
      <NavItem Implementation="a">Item 1</NavItem>
      <NavItem Implementation="a" active>
        Item 2
      </NavItem>
    </Navbar>
  );
};

export const DefaultUsingButton = () => {
  return (
    /** Remove the position: relative as it is meant for storybook only */
    <Navbar textLogo="Logo" rootStyles={{ position: "relative" }}>
      <NavItem Implementation="button">Item 1</NavItem>
      <NavItem Implementation="button" active>
        Item 2
      </NavItem>
    </Navbar>
  );
};

export const WithCustomImplementation = () => {
  return (
    /** Remove the position: relative as it is meant for storybook only */
    <Navbar textLogo="Logo" rootStyles={{ position: "relative" }}>
      <NavItem>Item 1</NavItem>
      <NavItem>Item 2</NavItem>
      <NavItem
        mh={3}
        renderCustomNavItem={(props) => {
          const { theme, active } = props;
          return (
            /** use the [navItem_base] public CSS Class */
            <span className="navItem_base custom-nav-link">Custom</span>
          );
        }}
      />
    </Navbar>
  );
};
