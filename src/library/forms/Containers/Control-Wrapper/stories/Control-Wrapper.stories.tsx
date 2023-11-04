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

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Containers/Control Wrapper",
  component: ControlWrapper,
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
} as ComponentMeta<typeof ControlWrapper>;

export const Default = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <FormContainer
      onSubmit={() => alert(`Greetings, ${firstName} ${lastName}!`)}
    >
      <h2>Sample Form with Sub Form Groups</h2>
      <ControlWrapper mt={6}>
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
    </FormContainer>
  );
};
