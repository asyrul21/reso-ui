import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Modal } from "@components/Containers/Modal";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

const SampleChildComponent = () => {
  return (
    <div className="story_modal_child_sample" style={{ width: "320px" }}>
      Test Child Modal
    </div>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: dedent`
            A container component to allow rendering of popup modals.

            The parent of this component must have \`position:relative\`, hence should work well within our *View* component.

            The child to the component should have \`width\` defined, so it can take the child's width.

            It supports Padding props for the inner modal container.
        `,
      },
    },
  },
} as ComponentMeta<typeof Modal>;

export const Default = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      {showModal && (
        <Modal
          title="Modal Story Example"
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        >
          <SampleChildComponent />
        </Modal>
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
        <Modal
          title="Modal Story Example"
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          rootStyles={{
            border: "2px solid green",
          }}
        >
          <SampleChildComponent />
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </>
  );
};

export const StylingInnerModalContainer = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      {showModal && (
        <Modal
          title="Modal Story Example"
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          modalStyles={{
            border: "2px solid green",
          }}
          pa={5}
        >
          <SampleChildComponent />
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </>
  );
};
