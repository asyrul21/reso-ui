import React, { useState } from "react";
import { StoryFn as ComponentStory, Meta as ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { ModalContainer } from "../../Modal-Container";
import { ModalHeader } from "../";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Modal/Modal Header",
  component: ModalHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A header component suited for the Modal container.
        `,
      },
    },
  },
} as ComponentMeta<typeof ModalHeader>;

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
          <ModalHeader
            title="Sample Title"
            onClose={() => setShowModal(false)}
          />

          <SampleChildComponent />
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
          <ModalHeader
            title="Sample Title"
            onClose={() => setShowModal(false)}
            rootStyles={{
              borderBottom: "3px solid red",
            }}
          />
          <SampleChildComponent />
        </ModalContainer>
      )}
      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </>
  );
};
