import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import {
  FormContainer,
  SubFormContainer,
  ControlWrapper,
} from "@forms/Containers";
// import "./storiesStyle.scss";

import { Label } from "@forms/Controls/Label";
import { TextInput } from "@forms/Controls/Text-Input";
import { SubmitButton } from "@forms/Controls/Submit-Button";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Containers/Sub Form Container",
  component: SubFormContainer,
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
} as ComponentMeta<typeof SubFormContainer>;

export const Default = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <FormContainer
      onSubmit={() => alert(`Greetings, ${firstName} ${lastName}!`)}
    >
      <h2>Sample Form with Sub Form Groups</h2>
      <SubFormContainer title="Details" mb={8}>
        <ControlWrapper>
          <Label
            htmlFor="firstNameInput"
            label="First Name"
            description={"Your first name"}
            required
            mr={7}
          />
          <TextInput
            id="firstNameInput"
            value={firstName}
            onChange={(val) => setFirstName(val as string)}
          />
        </ControlWrapper>
        <ControlWrapper>
          <Label
            htmlFor="lastNameInput"
            label="Last Name"
            description={"Your last name"}
            required
            mr={7}
          />
          <TextInput
            id="lastNameInput"
            value={lastName}
            onChange={(val) => setLastName(val as string)}
          />
        </ControlWrapper>
      </SubFormContainer>
      <SubmitButton mb={4} />
    </FormContainer>
  );
};

export const WithContainerStyles = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <FormContainer
      onSubmit={() => alert(`Greetings, ${firstName} ${lastName}!`)}
      rootStyles={{ background: "AntiqueWhite" }}
      pa={5}
    >
      <h2>Sample Form with Sub Form Groups</h2>
      <SubFormContainer
        title="Details"
        mb={8}
        rootStyles={{ background: "GhostWhite" }}
      >
        <ControlWrapper>
          <Label
            htmlFor="firstNameInput"
            label="First Name"
            description={"Your first name"}
            required
            mr={7}
          />
          <TextInput
            id="firstNameInput"
            value={firstName}
            onChange={(val) => setFirstName(val as string)}
          />
        </ControlWrapper>
        <ControlWrapper>
          <Label
            htmlFor="lastNameInput"
            label="Last Name"
            description={"Your last name"}
            required
            mr={7}
          />
          <TextInput
            id="lastNameInput"
            value={lastName}
            onChange={(val) => setLastName(val as string)}
          />
        </ControlWrapper>
      </SubFormContainer>
      <SubmitButton mb={4} />
    </FormContainer>
  );
};
