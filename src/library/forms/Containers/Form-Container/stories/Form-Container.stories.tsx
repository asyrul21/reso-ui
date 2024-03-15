import React, { useState } from "react";
import { StoryFn as ComponentStory, Meta as ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { FormContainer, ControlWrapper } from "../../";
// import "./storiesStyle.scss";

import { Label } from "../../../Controls/Label";
import { TextInput } from "../../../Controls/Text-Input";
import { SubmitButton } from "../../../Controls/Submit-Button";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Containers/Form Container",
  component: FormContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A Form container component with customised look and feel.

            It supports both Margin and Padding props.
        `,
      },
    },
  },
} as ComponentMeta<typeof FormContainer>;

export const Default = () => {
  const [textInputValue, setTextInputValue] = useState("");

  return (
    <FormContainer onSubmit={() => alert("Form data submitted!")}>
      <h2>Sample Form</h2>
      <ControlWrapper>
        <Label
          htmlFor="sampleTextInput1"
          label="First Name"
          description={"Your first name"}
          required
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <TextInput
          id="sampleTextInput1"
          value={textInputValue}
          onChange={(val) => setTextInputValue(val as string)}
        />
      </ControlWrapper>
      <SubmitButton mb={4} />
    </FormContainer>
  );
};

export const WithContainerStyles = () => {
  const [textInputValue, setTextInputValue] = useState("");
  return (
    <FormContainer
      onSubmit={() => alert("Form data submitted!")}
      rootStyles={{ background: "AntiqueWhite" }}
      pa={5}
    >
      <h2>Sample Form</h2>
      <ControlWrapper>
        <Label
          htmlFor="sampleTextInput1"
          label="First Name"
          description={"Your first name"}
          required
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <TextInput
          id="sampleTextInput1"
          value={textInputValue}
          onChange={(val) => setTextInputValue(val as string)}
        />
      </ControlWrapper>
      <SubmitButton mb={4} />
    </FormContainer>
  );
};

// export const Default = ComponentTemplate.bind({});
// Default.args = {};

// export const WithClassName = ComponentTemplate.bind({});
// WithClassName.args = {
//   rootClassName: "panel_container_root_class",
// };

// export const WithCustomStyle = ComponentTemplate.bind({});
// WithCustomStyle.args = {
//   rootStyles: {
//     background: "green",
//     color: "white",
//   },
// };
