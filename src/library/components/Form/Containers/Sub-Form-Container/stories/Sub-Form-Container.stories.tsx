import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Form, SubForm, FormInputContainer } from "@components/Form/Containers";
// import "./storiesStyle.scss";

import { InputLabel } from "@components/Form/Inputs/Input-Label";
import { TextInput } from "@components/Form/Inputs/Text-Input";
import { SubmitButton } from "@components/Form/Inputs/Submit-Button";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Containers/Sub Form",
  component: Form,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A container to group several related controls / inputs together.

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
      <SubForm title="Details" mb={8}>
        <FormInputContainer>
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
      </SubForm>
      <SubmitButton mb={4} />
    </Form>
  );
};

export const WithContainerStyles = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <Form
      onSubmit={() => alert(`Greetings, ${firstName} ${lastName}!`)}
      rootStyles={{ background: "AntiqueWhite" }}
      pa={5}
    >
      <h2>Sample Form with Sub Form Groups</h2>
      <SubForm title="Details" mb={8} rootStyles={{ background: "GhostWhite" }}>
        <FormInputContainer>
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
      </SubForm>
      <SubmitButton mb={4} />
    </Form>
  );
};
