import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { Dialog } from "@components/Dialog";
// import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Modal/Dialog",
  component: Dialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A Modal Dialog component to either alert user with something, or ask for user's confirmation.
        `,
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

export const DefaultYesNo = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  return (
    <>
      {showDialog && (
        <Dialog
          type="yesNo"
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          onClickYes={() => {
            alert("You clicked YES!");
            setShowDialog(false);
          }}
          onClickNo={() => {
            alert("You clicked NO!");
            setShowDialog(false);
          }}
          description="Once confirmed, this process cannot be undone. Proceed?"
        />
      )}
      <button onClick={() => setShowDialog(true)}>Show Modal</button>
    </>
  );
};

export const DefaultYesNoWithCustomStyles = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  return (
    <>
      {showDialog && (
        <Dialog
          rootStyles={{ background: "yellow", border: "2px solid blue" }}
          type="yesNo"
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          onClickYes={() => {
            alert("You clicked YES!");
            setShowDialog(false);
          }}
          onClickNo={() => {
            alert("You clicked NO!");
            setShowDialog(false);
          }}
          description="Once confirmed, this process cannot be undone. Proceed?"
        />
      )}
      <button onClick={() => setShowDialog(true)}>Show Modal</button>
    </>
  );
};

export const OKDialog = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  return (
    <>
      {showDialog && (
        <Dialog
          type="ok"
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          onClickOk={() => {
            alert("You clicked OK!");
            setShowDialog(false);
          }}
          description="Request successfully submitted"
        />
      )}
      <button onClick={() => setShowDialog(true)}>Show Modal</button>
    </>
  );
};

export const OKDialogWithCustomText = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  return (
    <>
      {showDialog && (
        <Dialog
          type="ok"
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          onClickOk={() => {
            alert("You clicked OK!");
            setShowDialog(false);
          }}
          okText="Awesome"
          description="Request successfully submitted"
        />
      )}
      <button onClick={() => setShowDialog(true)}>Show Modal</button>
    </>
  );
};
