import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { FullScreenError } from "@components/Errors/Full-Screen-Error";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Errors/Full Screen Error",
  component: FullScreenError,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            An Error components that overlays everything in the browser, and prevents any further interaction by the user.

            This is normally useful when you have critical system failure happening.
        `,
      },
    },
  },
} as ComponentMeta<typeof FullScreenError>;

export const Default = () => {
  const [showFullScreenError, setShowFullScreenError] =
    useState<boolean>(false);
  return (
    <>
      {showFullScreenError && <FullScreenError />}
      <button onClick={() => setShowFullScreenError(true)}>Show Modal</button>
    </>
  );
};

export const DefaultWithCustomText = () => {
  const [showFullScreenError, setShowFullScreenError] =
    useState<boolean>(false);
  return (
    <>
      {showFullScreenError && <FullScreenError text="Something happened!" />}
      <button onClick={() => setShowFullScreenError(true)}>Show Modal</button>
    </>
  );
};

export const DefaultWithCustomIconStyles = () => {
  const [showFullScreenError, setShowFullScreenError] =
    useState<boolean>(false);
  return (
    <>
      {showFullScreenError && (
        <FullScreenError
          text="Something happened!"
          iconStyles={{
            background: "green",
            borderColor: "yellow",
          }}
        />
      )}
      <button onClick={() => setShowFullScreenError(true)}>Show Modal</button>
    </>
  );
};
