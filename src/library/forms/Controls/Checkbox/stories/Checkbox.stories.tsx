import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { FormContainer, ControlWrapper } from "../../../Containers";
// import "./storiesStyle.scss";

import { Label } from "../../../Controls/Label";
import { Checkbox } from "../";
import { SubmitButton } from "../../../Controls/Submit-Button";

import dedent from "ts-dedent";
import { useFormInput } from "../../../Hooks/Controls";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Controls/Checkbox",
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A form checkbox component.
        `,
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const Default = () => {
  const {
    value: checkboxValue1,
    setValue: setCheckboxValue1,
    error: checkboxInput1Error,
    setError: setCheckboxInput1Error,
  } = useFormInput<boolean>(false);

  const {
    value: checkboxValue2,
    setValue: setCheckboxValue2,
    error: checkboxInput2Error,
    setError: setCheckboxInput2Error,
  } = useFormInput<boolean>(false);

  const {
    value: checkboxValue3,
    setValue: setCheckboxValue3,
    error: checkboxInput3Error,
    setError: setCheckboxInput3Error,
  } = useFormInput<boolean>(false);

  const {
    value: checkboxValue4,
    setValue: setCheckboxValue4,
    error: checkboxInput4Error,
    setError: setCheckboxInput4Error,
  } = useFormInput<boolean>(false);

  const handleFormSubmit = () => {
    alert("submit!");
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <h2>Sample Form</h2>
      <ControlWrapper>
        <Label
          htmlFor="checkbox1"
          label="Checkbox 1"
          description="No validation"
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <Checkbox
          id="checkbox1"
          value={checkboxValue1}
          onChange={(val) => setCheckboxValue1(val as boolean)}
          error={checkboxInput1Error}
          setError={setCheckboxInput1Error}
        />
      </ControlWrapper>
      <ControlWrapper>
        <Label
          htmlFor="checkbox2"
          label="Checkbox 2"
          description="Required, validated on load"
          required
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <Checkbox
          id="checkbox2"
          required
          value={checkboxValue2}
          onChange={(val) => setCheckboxValue2(val as boolean)}
          error={checkboxInput2Error}
          setError={setCheckboxInput2Error}
          validateOnLoad
        />
      </ControlWrapper>
      <ControlWrapper>
        <Label
          htmlFor="checkbox3"
          label="Checkbox 3"
          description="With text label as child, no validation"
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <Checkbox
          id="checkbox3"
          value={checkboxValue3}
          onChange={(val) => setCheckboxValue3(val as boolean)}
          error={checkboxInput3Error}
          setError={setCheckboxInput3Error}
        >
          I agree to the terms and conditions
        </Checkbox>
      </ControlWrapper>
      <ControlWrapper>
        <Label
          htmlFor="checkbox4"
          label="Checkbox 4"
          description="With text label as child, validated on load"
          required
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <Checkbox
          id="checkbox4"
          required
          value={checkboxValue4}
          onChange={(val) => setCheckboxValue4(val as boolean)}
          error={checkboxInput4Error}
          setError={setCheckboxInput4Error}
          validateOnLoad
        >
          I agree to the terms and conditions
        </Checkbox>
      </ControlWrapper>
    </FormContainer>
  );
};
