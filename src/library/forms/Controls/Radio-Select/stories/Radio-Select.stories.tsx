import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { FormContainer, ControlWrapper } from "../../../Containers";
// import "./storiesStyle.scss";

import { Label } from "../../../Controls/Label";
import { RadioSelect } from "../";

import dedent from "ts-dedent";
import { useRadioSelect } from "../../../Hooks";
import { Text } from "../../../../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Controls/Radio Select",
  component: RadioSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A Radio (buttons) Select Component, behaves somewhat similar to \`DropdownSelect\`.

            You may use the \`useRadioSelect\` built-in hook for better interactivity.

            Use \`optionsContainerClassName\` or \`optionsContainerStyles\` to override display-flex behaviour in arranging the radio buttons.

            Use \`labelClassName\` or \`labelStyles\` to override default text / label styles.

            Use \`radioClassName\` or \`radioStyles\` to override default radio and label container styles, like padding, margin etc.

            Supports Margin Props.

            Import statement: \`import { RadioSelect } from 'reso-ui'\`
        `,
      },
    },
  },
} as ComponentMeta<typeof RadioSelect>;

export const Default = () => {
  const SampleOptions = [
    { id: "0", name: "Banana" },
    { id: "1", name: "Apple" },
    { id: "2", name: "Orange" },
    { id: "3", name: "Mango" },
    { id: "4", name: "Pineapple" },
    { id: "5", name: "Grapes" },
  ];

  const {
    value: selectedRadioValue,
    options: radioOptions,
    selectedKey: selectedRadioKey,
    error: radioError,
    setError: setRadioError,
    setSelectedKey: setSelectedRadioKey,
  } = useRadioSelect(undefined, SampleOptions, {
    keyProp: "id",
    valueProp: "name",
  });

  return (
    <FormContainer rootStyles={{ height: "320px" }} onSubmit={() => {}}>
      <Text Element="h3" mv={5}>
        RadioSelect Default Options and Hook
      </Text>
      <Text Element="p" mv={5}>
        Selected value: <strong>{selectedRadioValue}</strong>
      </Text>
      <ControlWrapper>
        <Label
          htmlFor="sampleradio1"
          label="Favourite fruit"
          required
          mr={7}
          rootStyles={{ width: "145px" }}
        />
        <RadioSelect
          id="sampleradio1"
          required
          name="my_radio"
          value={selectedRadioValue}
          error={radioError}
          setError={setRadioError}
          selectedKey={selectedRadioKey}
          // add margin between the radio buttons if you want:
          // radioStyles={{ margin: "5px" }}
          onChange={(key) => setSelectedRadioKey(key)}
          options={[...radioOptions]}
        />
      </ControlWrapper>
    </FormContainer>
  );
};
