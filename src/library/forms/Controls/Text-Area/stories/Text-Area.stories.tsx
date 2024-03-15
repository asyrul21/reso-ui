import React, { useState } from "react";
import {
  StoryFn as ComponentStory,
  Meta as ComponentMeta,
} from "@storybook/react";

// always import from index to include global styles
import { FormContainer, ControlWrapper } from "../../../Containers";
// import "./storiesStyle.scss";

import { Label } from "../../../Controls/Label";
import { TextArea } from "../";

import dedent from "ts-dedent";
import { useFormInput } from "../../../Hooks";
import { Text } from "../../../../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Controls/Text Area",
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A Text Area component.

            You may use the \`useFormInput\` built-in hook for better interactivity.

            Use \`rootClassNmae\` or \`rootStyles\` to override wrapper stylings.

            Use \`inputClassName\` or \`inputStyles\` to override default input element styles.

            You can provide custom validators via the \`customValidators\` prop.

            Supports Margin Props.

            Import statement: \`import { TextArea } from 'reso-ui'\`
        `,
      },
    },
  },
} as ComponentMeta<typeof TextArea>;

export const Default = () => {
  const {
    value,
    setValue,
    error: textError,
    setError: setTextError,
  } = useFormInput("");

  return (
    <FormContainer id="test-form-1" onSubmit={() => {}}>
      <Text Element="h3" mv={5}>
        Default implementation with built-in Hook
      </Text>
      <ControlWrapper>
        <Label
          htmlFor="sampleTextArea1"
          label="Description"
          required
          mr={7}
          rootStyles={{ width: "145px" }}
        />
        <TextArea
          id="sampleTextArea1"
          formId="test-form-1"
          required
          name="my-text-area"
          value={value}
          error={textError}
          setError={setTextError}
          onChange={(v) => setValue(v as string)}
        />
      </ControlWrapper>
    </FormContainer>
  );
};

export const noBorderExample = () => {
  const {
    value,
    setValue,
    error: textError,
    setError: setTextError,
  } = useFormInput("");

  return (
    <FormContainer id="test-form-1" onSubmit={() => {}}>
      <Text Element="h3" mv={5}>
        Full width text area, without borders and shadows, with validations
      </Text>
      <ControlWrapper>
        <TextArea
          rootStyles={{
            borderBottom: "2px solid grey",
            paddingBottom: "10px",
          }}
          minLength={3}
          noShadowOnFocus
          placeholder="Type something here"
          inputStyles={{ border: "none", backgroundColor: "unset" }}
          id="sampleTextArea2"
          formId="test-form-1"
          required
          name="my-text-area"
          value={value}
          error={textError}
          setError={setTextError}
          onChange={(v) => setValue(v as string)}
        />
      </ControlWrapper>
    </FormContainer>
  );
};
