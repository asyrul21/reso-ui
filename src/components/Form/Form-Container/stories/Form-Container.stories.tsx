import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Form } from "@components/Form";
// import "./storiesStyle.scss";

import { InputLabel } from "@components/Form/Inputs/Input-Label";
import { TextInput } from "@components/Form/Inputs/Text-Input";
import { SubmitButton } from "@components/Form/Inputs/Submit-Button";
import { FormInputContainer } from "@components/Form/Form-Input-Container";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Containers/Form",
  component: Form,
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
} as ComponentMeta<typeof Form>;

export const Default = () => {
  const [textInputValue, setTextInputValue] = useState("");
  return (
    <Form onSubmit={() => alert("Form data submitted!")}>
      <h2>Sample Form</h2>
      <FormInputContainer>
        <InputLabel
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
          onChange={(e) => setTextInputValue(e.target.value)}
        />
      </FormInputContainer>
      <SubmitButton mb={4} />
    </Form>
  );
};

export const WithContainerStyles = () => {
  const [textInputValue, setTextInputValue] = useState("");
  return (
    <Form
      onSubmit={() => alert("Form data submitted!")}
      rootStyles={{ background: "AntiqueWhite" }}
      pa={5}
    >
      <h2>Sample Form</h2>
      <FormInputContainer>
        <InputLabel
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
          onChange={(e) => setTextInputValue(e.target.value)}
        />
      </FormInputContainer>
      <SubmitButton mb={4} />
    </Form>
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
