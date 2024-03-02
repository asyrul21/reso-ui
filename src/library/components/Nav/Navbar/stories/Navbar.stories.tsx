import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Navbar } from "../";
import { NavItem } from "../../NavItem";
// import "./storiesStyle.scss";

import dedent from "ts-dedent";
import {
  DropdownOption,
  DropdownSelect,
} from "../../../../forms/Controls/Dropdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Nav/Navbar",
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A Navbar component.

            It supports light and dark themes.

            It supports Paddings props.

            You can use our NavItem Component for children, Or create your own.

            Use the maxWidth and position props to customize behaviour.

            Import statement:

            \`\`\`
            import { Navbar } from 'reso-ui
            \`\`\`
        `,
      },
    },
  },
} as ComponentMeta<typeof Navbar>;

export const DefaultWithNavItem = () => {
  return (
    /** Remove the position: relative as it is meant for storybook only */
    <Navbar textLogo="Logo" rootStyles={{ position: "relative" }}>
      <NavItem>Item 1</NavItem>
      <NavItem>Item 2</NavItem>
    </Navbar>
  );
};

export const UsingDropdownAsNavItem = () => {
  return (
    /** Remove the position: relative as it is meant for storybook only */
    <Navbar
      textLogo="Logo"
      rootStyles={{ position: "relative", marginBottom: "180px" }}
    >
      <NavItem
        renderCustomNavItem={({ theme, active }) => {
          return (
            <DropdownSelect
              OptionsContainerElement="div"
              asNavItem
              expandOn="hover"
              value="Profile"
            >
              <DropdownOption Element="a" option="Page 1" />
              <DropdownOption
                renderCustomOption={({ theme, active, option }) => {
                  return (
                    <a className="dropdown_option_base">Link</a>
                    // or render your ReactRouterDom's <Link /> as below:
                    // <Link to="/" className="dropdown_option_base">
                    //   Link 1
                    // </Link>
                  );
                }}
              />
              <DropdownOption Element="a" option="Page 3" />
            </DropdownSelect>
          );
        }}
      />
      <NavItem>Item 1</NavItem>
      <NavItem>Item 2</NavItem>
    </Navbar>
  );
};

export const WithCustomLogo = () => {
  return (
    /** Remove the position: relative as it is meant for storybook only */
    <Navbar
      rootStyles={{ position: "relative" }}
      renderCustomLogo={() => {
        return (
          <div style={{ color: "green", background: "yellow" }}>Custom</div>
        );
      }}
    >
      <NavItem>Item 1</NavItem>
      <NavItem>Item 2</NavItem>
    </Navbar>
  );
};
