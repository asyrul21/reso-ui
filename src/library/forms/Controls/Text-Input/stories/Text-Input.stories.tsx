import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { FormContainer, ControlWrapper } from "@forms/Containers";
// import "./storiesStyle.scss";

import { Label } from "@forms/Controls/Label";
import { TextInput } from "@forms/Controls/Text-Input";
import { SubmitButton } from "@forms/Controls/Submit-Button";

import dedent from "ts-dedent";
import {
  stringHasMinLength,
  stringIsEmail,
  stringIsPhoneDefault,
  stringIsRequired,
} from "@forms/Validators";
import { useFormInput } from "@forms/Hooks";

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
    setError: setTextInputError1,
    // forceValidate: forceValidateInput1,
  } = useFormInput<string>("");
  const {
    value: textInputValue2,
    setValue: setTextInputValue2,
    error: textInput2Error,
    setError: setTextInputError2,
    // forceValidate: forceValidateInput2,
  } = useFormInput<string>("");

  // using regular useState hook
  const [textInputValue3, setTextInputValue3] = useState("");

  const {
    value: emailInputValue,
    setValue: setEmailInputValue,
    error: emailInputError,
    setError: setEmailInputError,
    // forceValidate: forceValidateEmail,
  } = useFormInput<string>("");

  const {
    value: passwordInputValue,
    setValue: setPasswordInputValue,
    error: passwordInputError,
    setError: setPasswordInputError,
    // forceValidate: forceValidatePasswordInput,
  } = useFormInput<string>("");

  const {
    value: telInputValue,
    setValue: setTelInputValue,
    error: telInputError,
    setError: setTelInputError,
    // forceValidate: forceValidateTelInput,
  } = useFormInput<string>("");

  const handleFormSubmit = () => {
    alert("submit!");
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
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
          onChange={(val) => setTextInputValue1(val as string)}
          placeholder="Your first name"
          error={textInput1Error}
          required
          setError={setTextInputError1}
          // onInvalid={(val) => forceValidateInput1()}
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
          onChange={(val) => setTextInputValue2(val as string)}
          setError={setTextInputError2}
          // onInvalid={(val) => forceValidateInput2(e)}
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
          onChange={(val) => setTextInputValue3(val as string)}
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
          onChange={(val) => setEmailInputValue(val as string)}
          // onInvalid={(val) => forceValidateEmail(e)}
          setError={setEmailInputError}
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
          onChange={(val) => setPasswordInputValue(val as string)}
          error={passwordInputError}
          setError={setPasswordInputError}
          // onInvalid={(val) => forceValidatePasswordInput(e)}
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
          onChange={(val) => setTelInputValue(val as string)}
          error={telInputError}
          setError={setTelInputError}
          // onInvalid={(val) => forceValidateTelInput(e)}
        />
      </ControlWrapper>
      <button type="submit">send</button>
      <SubmitButton mb={4} />
    </FormContainer>
  );
};
