import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { FlexContainer } from "@components";
import "./storiesStyle.scss";

const SampleChildComponent = () => {
  return <div className="story_test_box">Test Child</div>;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Reso Components/Containers/Flex Container",
  component: FlexContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FlexContainer>;

export const DefaultWithBorder = () => {
  return (
    <FlexContainer borderColor="blue">
      <>
        <SampleChildComponent />
        <SampleChildComponent />
      </>
    </FlexContainer>
  );
};

export const DefaultWithPaddingAll = () => {
  return (
    <FlexContainer borderColor="blue" pa={5}>
      <>
        <SampleChildComponent />
        <SampleChildComponent />
      </>
    </FlexContainer>
  );
};

export const Direction = () => {
  return (
    <FlexContainer borderColor="blue" direction="column">
      <>
        <SampleChildComponent />
        <SampleChildComponent />
      </>
    </FlexContainer>
  );
};

export const JustifyStart = () => {
  return (
    <FlexContainer borderColor="blue" justify="start">
      <>
        <SampleChildComponent />
        <SampleChildComponent />
      </>
    </FlexContainer>
  );
};

export const CustomStylesAndAlign = () => {
  return (
    <FlexContainer borderColor="blue" styles={{ height: "300px" }} align="end">
      <>
        <SampleChildComponent />
        <SampleChildComponent />
      </>
    </FlexContainer>
  );
};
