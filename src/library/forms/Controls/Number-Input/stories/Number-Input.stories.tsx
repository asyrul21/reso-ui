import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { FormContainer, ControlWrapper } from "@forms/Containers";
// import "./storiesStyle.scss";

import { Label } from "@forms/Controls/Label";
import { NumberInput } from "@forms/Controls/Number-Input";
import { SubmitButton } from "@forms/Controls/Submit-Button";

import dedent from "ts-dedent";
import {
  numberIsLessThan,
  numberIsMoreThanOrEqualsTo,
  numberIsRequired,
} from "@forms/Validators";
import { useNumberInput } from "@forms/Hooks";

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
    forceValidate: forceValidateInput1,
  } = useNumberInput(1, [numberIsRequired, numberIsMoreThanOrEqualsTo(5)]);

  const {
    value: numberInputValue2,
    setValue: setNumberInputValue2,
    error: numberInput2Error,
    forceValidate: forceValidateInput2,
  } = useNumberInput(1, [numberIsRequired, numberIsLessThan(10)]);

  // using regular React's useStateHook
  const [numberInputValue3, setNumberInputValue3] = useState(1);

  return (
    <FormContainer onSubmit={() => alert("Form data submitted!")}>
      <h2>Sample Form</h2>
      <ControlWrapper>
        <Label
          htmlFor="sampleNumberInput1"
          label="Quantity"
          description={"With minimum 5 validation"}
          mr={7}
          rootStyles={{ width: "128px" }}
        />
        <NumberInput
          id="sampleNumberInput1"
          value={numberInputValue1}
          onChange={(e) => setNumberInputValue1(Number(e.target.value))}
          error={numberInput1Error}
          onInvalid={(e) => forceValidateInput1()}
          // min={5}
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
          onChange={(e) => setNumberInputValue2(Number(e.target.value))}
          error={numberInput2Error}
          onInvalid={(e) => forceValidateInput2()}
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
          onChange={(e) => setNumberInputValue3(Number(e.target.value))}
        />
      </ControlWrapper>
      <SubmitButton mb={4} />
    </FormContainer>
  );
};
