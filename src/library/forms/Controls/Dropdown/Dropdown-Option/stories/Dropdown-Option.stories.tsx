import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { FormContainer, ControlWrapper } from "../../../../Containers";
// import "./storiesStyle.scss";

import { Label } from "../../../../Controls/Label";
import { DropdownSelect } from "../../";
import { DropdownOption } from "../";

import dedent from "ts-dedent";
import { Text } from "../../../../../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Controls/Dropdown/Dropdown Option",
  component: DropdownOption,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A dropdown option component.

            This component is to provide flexibility to how the \`<DropdownSelect />\` component behaves.

            Provide this component as children to \`<DropdownSelect />\` to override the default options element or logic.

            If you still wish to override this component further, use the \`renderCustomOption\` prop to provide your own JSX implementation. 
            
            If you choose this route, you may use the library CSS class \`dropdown_option_base\` to help blend in the styles.

            Using the \`renderCustomOption\` can be handy for eg. if you want to have React-Router-Dom's \`<Link />\` elements rendered as options on the Navbar. For more details, see Navbar Docs.

            Import statement: \`import { DropdownOption } from 'reso-ui'\`
        `,
      },
    },
  },
} as ComponentMeta<typeof DropdownOption>;

export const Default = () => {
  return (
    <FormContainer rootStyles={{ height: "420px" }} onSubmit={() => {}}>
      <Text Element="p" mv={5}>
        Default element {"<li />"}
      </Text>
      <ControlWrapper>
        <Label
          htmlFor="sampleDropdown1"
          label="Fruit"
          required
          mr={7}
          rootStyles={{ width: "100px" }}
        />
        <DropdownSelect id="sampleDropdown1">
          <DropdownOption
            option="Option 1"
            onClick={() => alert("You clicked Option 1")}
          />
          <DropdownOption
            option="Option 2"
            onClick={() => alert("You clicked Option 2")}
          />
          <DropdownOption
            option="Option 3"
            onClick={() => alert("You clicked Option 3")}
          />
        </DropdownSelect>
      </ControlWrapper>
    </FormContainer>
  );
};

export const usingAnchorTag = () => {
  return (
    <FormContainer rootStyles={{ height: "420px" }} onSubmit={() => {}}>
      <Text Element="p" mv={5}>
        Use anchor {"<a />"} as element. Note that the <strong>onClick</strong>{" "}
        will not work. Instead, you need to use <strong>href</strong> and{" "}
        <strong>target</strong> props.
      </Text>
      <ControlWrapper>
        <Label
          htmlFor="sampleDropdown1"
          label="Fruit"
          required
          mr={7}
          rootStyles={{ width: "100px" }}
        />
        <DropdownSelect id="sampleDropdown1">
          <DropdownOption Element="a" option="Link 1" />
          <DropdownOption
            Element="a"
            option="Google"
            target="_blank"
            href="https://www.google.com"
          />
        </DropdownSelect>
      </ControlWrapper>
    </FormContainer>
  );
};

export const usingRenderCustomOption = () => {
  return (
    <FormContainer rootStyles={{ height: "420px" }} onSubmit={() => {}}>
      <Text Element="p" mv={5}>
        Use anchor {"<a />"} as element. Note that the <strong>onClick</strong>{" "}
        will not work. Instead, you need to use <strong>href</strong> and{" "}
        <strong>target</strong> props.
      </Text>
      <ControlWrapper>
        <Label
          htmlFor="sampleDropdown1"
          label="Fruit"
          required
          mr={7}
          rootStyles={{ width: "100px" }}
        />
        <DropdownSelect id="sampleDropdown1">
          <DropdownOption Element="a" option="Link 1" />
          <DropdownOption
            Element="a"
            option="Google"
            target="_blank"
            href="https://www.google.com"
          />
          <DropdownOption
            renderCustomOption={({ theme, active, option }) => {
              return (
                <a className="dropdown_option_base">My Custom Option</a>
                //  Block below has been commented due to Storybook contraints
                //  <Link to="/" className="dropdown_option_base">
                //    A ReactRouterDom's Link
                //  </Link>
              );
            }}
          />
        </DropdownSelect>
      </ControlWrapper>
    </FormContainer>
  );
};
