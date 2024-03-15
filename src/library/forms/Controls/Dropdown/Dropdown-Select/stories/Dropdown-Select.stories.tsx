import React, { useState } from "react";
import {
  StoryFn as ComponentStory,
  Meta as ComponentMeta,
} from "@storybook/react";

// always import from index to include global styles
import { FormContainer, ControlWrapper } from "../../../../Containers";
// import "./storiesStyle.scss";

import { Label } from "../../../../Controls/Label";
import { DropdownSelect } from "../";

import dedent from "ts-dedent";
import { useDropdown } from "../../../../Hooks";
import { Text } from "../../../../../components";
import { DropdownOption } from "../../Dropdown-Option";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Controls/Dropdown/Dropdown Select",
  component: DropdownSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A dropdown select component.

            You may use the \`useDropdown\` built-in hook for better interactivity.

            You can use the default implementation of options elements by providing a list of options as prop.

            Otherwise, you can customize or provide your own implementation of Option element by using the \`<DropdownOption />\` components as children (SEE DropdownOption Docs).

            You can also use this dropdown as a Menu on the Navbar, and have React-Router-Dom's \`<Link />\` elements as the options (SEE Navbar Docs).

            Supports Margin Props.

            Import statement: \`import { DropdownSelect } from 'reso-ui'\`
        `,
      },
    },
  },
} as ComponentMeta<typeof DropdownSelect>;

export const Default = () => {
  const SampleOptions = [
    { key: "0", value: "Banana" },
    { key: "1", value: "Apple" },
    { key: "2", value: "Orange" },
  ];

  const {
    value: selectedValue,
    options,
    selectedKey,
    error,
    setError,
    setSelectedKey,
  } = useDropdown(undefined, SampleOptions);

  return (
    <FormContainer rootStyles={{ height: "320px" }} onSubmit={() => {}}>
      <Text Element="h3" mv={5}>
        Dropdown Default Options and Hooks
      </Text>
      <Text Element="p" mv={5}>
        Selected value: <strong>{selectedValue}</strong>
      </Text>
      <ControlWrapper>
        <Label
          htmlFor="sampleDropdown1"
          label="Fruit"
          required
          mr={7}
          rootStyles={{ width: "100px" }}
        />
        <DropdownSelect
          id="sampleDropdown1"
          options={options}
          value={selectedValue}
          onChange={(key) => setSelectedKey(key)}
          error={error}
          setError={setError}
          required
          selectedKey={selectedKey}
        />
      </ControlWrapper>
    </FormContainer>
  );
};

export const UsingHookAsAdapter = () => {
  /**
   * You data might have different [key] prop name, like "id" or "_id".
   * Likewise, it might have different [value] prop name, like "name" or "fruit"
   */
  const SampleOptions = [
    { id: "0", name: "Banana" },
    { id: "1", name: "Apple" },
    { id: "2", name: "Orange" },
  ];

  const {
    value: selectedValue,
    options,
    selectedKey,
    error,
    setError,
    setSelectedKey,
  } = useDropdown(undefined, SampleOptions, {
    keyProp: "id",
    valueProp: "name",
  });

  return (
    <FormContainer rootStyles={{ height: "320px" }} onSubmit={() => {}}>
      <Text Element="p" mv={5}>
        You can use the <strong>useDropdown</strong> hook's config prop to
        convert your data structure to the one used in the dropdown.
      </Text>
      <Text Element="p" mv={5}>
        Selected value: <strong>{selectedValue}</strong>
      </Text>
      <ControlWrapper>
        <Label
          htmlFor="sampleDropdown1"
          label="Fruit"
          required
          mr={7}
          rootStyles={{ width: "100px" }}
        />
        <DropdownSelect
          id="sampleDropdown1"
          options={options}
          value={selectedValue}
          onChange={(key) => setSelectedKey(key)}
          error={error}
          setError={setError}
          required
          selectedKey={selectedKey}
        />
      </ControlWrapper>
    </FormContainer>
  );
};

export const UsingHookToAddAllOption = () => {
  const SampleOptions = [
    { id: "0", name: "Banana" },
    { id: "1", name: "Apple" },
    { id: "2", name: "Orange" },
  ];

  const {
    value: selectedValue,
    options,
    selectedKey,
    error,
    setError,
    setSelectedKey,
  } = useDropdown(undefined, SampleOptions, {
    keyProp: "id",
    valueProp: "name",
    /**
     * you can add an "all" option
     */
    initObject: {
      key: "all",
      value: "All",
    },
  });

  return (
    <FormContainer rootStyles={{ height: "320px" }} onSubmit={() => {}}>
      <Text Element="p" mv={5}>
        You can use the <strong>useDropdown</strong> hook's config prop to add
        an additional option. For example, an "All" option.
      </Text>
      <Text Element="p" mv={5}>
        Selected value: <strong>{selectedValue}</strong>
      </Text>
      <ControlWrapper>
        <Label
          htmlFor="sampleDropdown1"
          label="Fruit"
          required
          mr={7}
          rootStyles={{ width: "100px" }}
        />
        <DropdownSelect
          id="sampleDropdown1"
          options={options}
          value={selectedValue}
          onChange={(key) => setSelectedKey(key)}
          error={error}
          setError={setError}
          required
          selectedKey={selectedKey}
        />
      </ControlWrapper>
    </FormContainer>
  );
};

export const WithCustomDropdownOption = () => {
  return (
    <FormContainer rootStyles={{ height: "420px" }} onSubmit={() => {}}>
      <Text Element="p" mv={5}>
        Instead of relying on the underlying implementation of option elements
        by default, you can override this behaviour by passing{" "}
        {"<DropdownOption />"} as children.
      </Text>
      <Text Element="p" mv={5}>
        Also, you might might want to swap out the html element used as the
        container of the options. You can use the{" "}
        <strong>OptionsContainerElement</strong> prop to choose between{" "}
        {"<div />"} or {"<ul />"} (default)
      </Text>
      <Text Element="p" mv={5}>
        If you choose to use the {"<DropdownOption />"} as children, you may
        need to write a wrapping Container component for your dropdown to handle
        the states.
      </Text>
      <ControlWrapper>
        <Label
          htmlFor="sampleDropdown1"
          label="Fruit"
          required
          mr={7}
          rootStyles={{ width: "100px" }}
        />
        {/* default is <ul /> */}
        <DropdownSelect id="sampleDropdown1" OptionsContainerElement="div">
          <DropdownOption
            option="Option 1"
            onClick={() => alert("You clicked Option 1")}
          />
          {/* default is <li /> */}
          <DropdownOption
            Element="a"
            option="Have an anchor tag as option"
            active
            href="#"
          />
          <DropdownOption
            option="Option 3"
            onClick={() => alert("You clicked Option 1")}
          />
        </DropdownSelect>
      </ControlWrapper>
    </FormContainer>
  );
};
