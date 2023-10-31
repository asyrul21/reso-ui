import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { FormContainer, ControlWrapper } from "@forms/Containers";
// import "./storiesStyle.scss";

import { Label } from "@forms/Controls/Label";
import { TextInput } from "@forms/Controls/Text-Input";
import { SubmitButton } from "@forms/Controls/Submit-Button";

import dedent from "ts-dedent";
import { useTextInput } from "@forms/Hooks/useTextInput";
import {
  stringHasMinLength,
  stringIsEmail,
  stringIsPhoneDefault,
  stringIsRequired,
} from "@forms/Validators";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Controls/Text Input",
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A form input components for texts, email, and telephone strings.
        `,
      },
    },
  },
} as ComponentMeta<typeof TextInput>;

export const Default = () => {
  const {
    value: textInputValue1,
    setValue: setTextInputValue1,
    error: textInput1Error,
    // forceValidate: forceValidateInput1,
  } = useTextInput("", [stringIsRequired]);
  const {
    value: textInputValue2,
    setValue: setTextInputValue2,
    error: textInput2Error,
    // forceValidate: forceValidateInput2,
  } = useTextInput("", [stringIsRequired]);

  // using regular useState hook
  const [textInputValue3, setTextInputValue3] = useState("");

  const {
    value: emailInputValue,
    setValue: setEmailInputValue,
    error: emailInputError,
    // forceValidate: forceValidateEmail,
  } = useTextInput("", [stringIsEmail]);

  const {
    value: passwordInputValue,
    setValue: setPasswordInputValue,
    error: passwordInputError,
    // forceValidate: forceValidatePasswordInput,
  } = useTextInput("", [stringHasMinLength(6)]);

  const {
    value: telInputValue,
    setValue: setTelInputValue,
    error: telInputError,
    // forceValidate: forceValidateTelInput,
  } = useTextInput("", [stringIsPhoneDefault]);

  return (
    <FormContainer onSubmit={() => alert("Form data submitted!")}>
      <h2>Sample Form</h2>
      <ControlWrapper>
        <Label
          htmlFor="sampleTextInput1"
          label="First Name"
          description="Required validation with default HTML error message"
          required
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <TextInput
          id="sampleTextInput1"
          value={textInputValue1}
          onChange={(e) => setTextInputValue1(e.target.value)}
          placeholder="Your first name"
          error={textInput1Error}
          required
          // onInvalid={(e) => forceValidateInput1()}
        />
      </ControlWrapper>
      <ControlWrapper>
        <Label
          htmlFor="sampleTextInput2"
          label="Middle Name"
          description={
            "With container styles, required validation but without default HTML error message"
          }
          required
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <TextInput
          id="sampleTextInput2"
          value={textInputValue2}
          rootStyles={{
            backgroundColor: "beige",
            padding: "5px",
            borderRadius: "10px",
          }}
          required
          error={textInput2Error}
          onChange={(e) => setTextInputValue2(e.target.value)}
          // onInvalid={(e) => forceValidateInput2(e)}
        />
      </ControlWrapper>
      <ControlWrapper>
        <Label
          htmlFor="sampleTextInput3"
          label="Last Name"
          description={"With inputStyles"}
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <TextInput
          id="sampleTextInput3"
          value={textInputValue3}
          inputStyles={{
            borderColor: "blue",
          }}
          onChange={(e) => setTextInputValue3(e.target.value)}
        />
      </ControlWrapper>
      <ControlWrapper>
        <Label
          htmlFor="sampleEmailInput"
          label="Email"
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <TextInput
          type="email"
          id="sampleEmailInput"
          value={emailInputValue}
          onChange={(e) => setEmailInputValue(e.target.value)}
          // onInvalid={(e) => forceValidateEmail(e)}
          error={emailInputError}
        />
      </ControlWrapper>
      <ControlWrapper>
        <Label
          htmlFor="samplePasswordInput"
          label="Password"
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <TextInput
          type="password"
          id="samplePasswordInput"
          value={passwordInputValue}
          onChange={(e) => setPasswordInputValue(e.target.value)}
          error={passwordInputError}
          // onInvalid={(e) => forceValidatePasswordInput(e)}
          minLength={6}
        />
      </ControlWrapper>
      <ControlWrapper>
        <Label
          htmlFor="sampleTelInput"
          label="Telephone"
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <TextInput
          type="tel"
          id="sampleTelInput"
          value={telInputValue}
          onChange={(e) => setTelInputValue(e.target.value)}
          error={telInputError}
          // onInvalid={(e) => forceValidateTelInput(e)}
        />
      </ControlWrapper>
      <SubmitButton mb={4} />
    </FormContainer>
  );
};
