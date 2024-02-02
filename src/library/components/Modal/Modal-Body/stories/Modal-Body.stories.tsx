import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { ModalContainer } from "../../Modal-Container";
import { ModalBody } from "../";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Modal/Modal Body",
  component: ModalBody,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A container component meant to wrap content of Modal.

            It supports Padding props.
        `,
      },
    },
  },
} as ComponentMeta<typeof ModalBody>;

const SampleChildComponent = () => {
  return (
    <div className="story_modal_child_sample" style={{ width: "320px" }}>
      Test Child Modal
    </div>
  );
};
export const Default = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      {showModal && (
        <ModalContainer isOpen={showModal} pa={5}>
          <ModalBody pa={5}>
            <button onClick={() => setShowModal(false)}>Close</button>
            <SampleChildComponent />
          </ModalBody>
        </ModalContainer>
      )}
      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </>
  );
};

export const WithContainerStyles = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      {showModal && (
        <ModalContainer isOpen={showModal} pa={5}>
          <ModalBody
            rootStyles={{
              border: "2px solid red",
            }}
            pa={5}
          >
            <button onClick={() => setShowModal(false)}>Close</button>
            <SampleChildComponent />
          </ModalBody>
        </ModalContainer>
      )}
      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </>
  );
};
