import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Form } from "@components/Form";
import { SubForm } from "@components/Form/Sub-Form-Container";
// import "./storiesStyle.scss";

import { InputLabel } from "@components/Form/Inputs/Input-Label";
import { TextInput } from "@components/Form/Inputs/Text-Input";
import { FormInputContainer } from "@components/Form/Form-Input-Container";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Containers/Input Container",
  component: Form,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A container to group an Input control and it's Label, so that we can control the margins more easily.

            It supports both Margin props.
        `,
      },
    },
  },
} as ComponentMeta<typeof Form>;

export const Default = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <Form onSubmit={() => alert(`Greetings, ${firstName} ${lastName}!`)}>
      <h2>Sample Form with Sub Form Groups</h2>
      <FormInputContainer mt={6}>
        <InputLabel
          htmlFor="firstNameInput"
          label="First Name"
          description={"Your first name"}
          required
          mr={7}
        />
        <TextInput
          id="firstNameInput"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormInputContainer>
      <FormInputContainer>
        <InputLabel
          htmlFor="lastNameInput"
          label="Last Name"
          description={"Your last name"}
          required
          mr={7}
        />
        <TextInput
          id="lastNameInput"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormInputContainer>
    </Form>
  );
};
