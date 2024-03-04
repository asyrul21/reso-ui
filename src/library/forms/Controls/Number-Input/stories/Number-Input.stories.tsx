import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { FormContainer, ControlWrapper } from "../../../Containers";
// import "./storiesStyle.scss";

import { Label } from "../../../Controls/Label";
import { NumberInput } from "../";
import { SubmitButton } from "../../../Controls/Submit-Button";

import dedent from "ts-dedent";
import {
  numberIsLessThan,
  numberIsMoreThanOrEqualsTo,
  numberIsRequired,
} from "../../../Validators";
import { useFormInput } from "../../../Hooks";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Controls/Number Input",
  component: NumberInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A form input components for numbers.

            You may use the \`useFormInput\` built-in hook for better interactivity.

            Use \`rootClassNmae\` or \`rootStyles\` to override wrapper stylings.

            Use \`inputClassName\` or \`inputStyles\` to override default input element styles.

            You can provide custom validators via the \`customValidators\` prop.

            You may use the \`useFormInput\` built-in hook for better interactivity.

            Supports Margin Props.

            Import statement: \`import { NumberInput } from 'reso-ui'\`
        `,
      },
    },
  },
} as ComponentMeta<typeof NumberInput>;

export const Default = () => {
  const {
    value: numberInputValue1,
    setValue: setNumberInputValue1,
    error: numberInput1Error,
    setError: setNumberInput1Error,
  } = useFormInput<number>(1);

  const {
    value: numberInputValue2,
    setValue: setNumberInputValue2,
    error: numberInput2Error,
    setError: setNumberInput2Error,
  } = useFormInput<number>(1);

  // using regular React's useStateHook
  const [numberInputValue3, setNumberInputValue3] = useState(1);

  const {
    value: numberInputValue4,
    setValue: setNumberInputValue4,
    error: numberInput4Error,
    setError: setNumberInput4Error,
  } = useFormInput<number>(1);

  const handleSubmit = () => {
    if (!numberInput1Error && !numberInput2Error) {
      alert("Form data submitted!");
    }

    // if there is error, do not submit
    alert("You have errors");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Sample Form</h2>
      <ControlWrapper>
        <Label
          htmlFor="sampleNumberInput1"
          label="Quantity"
          description={"With minimum 5 validation, validated on Load"}
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <NumberInput
          id="sampleNumberInput1"
          value={numberInputValue1}
          onChange={(val) => setNumberInputValue1(Number(val))}
          error={numberInput1Error}
          setError={(e) => setNumberInput1Error(e)}
          min={5}
          validateOnLoad
        />
      </ControlWrapper>
      <ControlWrapper>
        <Label
          htmlFor="sampleNumberInput2"
          label="Quantity"
          description="With container styles, with maximum 10 validation"
          required
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <NumberInput
          id="sampleNumberInput2"
          value={numberInputValue2}
          rootStyles={{
            backgroundColor: "beige",
            padding: "5px",
            borderRadius: "10px",
          }}
          max={10}
          onChange={(val) => setNumberInputValue2(Number(val))}
          error={numberInput2Error}
          setError={(e) => setNumberInput2Error(e)}
        />
      </ControlWrapper>
      <ControlWrapper>
        <Label
          htmlFor="sampleNumberInput3"
          label="Quantity"
          description="With inputStyles"
          required
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <NumberInput
          id="sampleNumberInput3"
          value={numberInputValue3}
          inputStyles={{
            borderColor: "blue",
          }}
          onChange={(val) => setNumberInputValue3(Number(val))}
        />
      </ControlWrapper>
      <ControlWrapper>
        <Label
          htmlFor="sampleNumberInput4"
          label="Quantity"
          description="Minimum 5, with useHTMLErrorMessage set to true"
          required
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <NumberInput
          id="sampleNumberInput4"
          min={5}
          value={numberInputValue4}
          onChange={(val) => setNumberInputValue4(Number(val))}
          error={numberInput4Error}
          setError={(e) => setNumberInput4Error(e)}
          useHTMLErrorMessage
        />
      </ControlWrapper>
      <SubmitButton mb={4} />
    </FormContainer>
  );
};
