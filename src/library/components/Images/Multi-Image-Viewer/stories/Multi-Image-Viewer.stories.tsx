import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// always import from index to include global styles
import { View } from "../../../Containers/View";
import {
  IMultiImageViewerProps,
  MultiImageViewer,
} from "../";
import "./storiesStyle.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Images/Multi Image Viewer",
  component: MultiImageViewer,
  parameters: {
    docs: {
      description: {
        component: dedent`
            A component to view multiple images. 
            
            It utilizes the Image and HorizontalScrollContainer components, but with local state management features.

            It supports Margin props.
        `,
      },
    },
  },
} as ComponentMeta<typeof MultiImageViewer>;

const ComponentTemplate: ComponentStory<typeof MultiImageViewer> = (args) => {
  const templateArgs = {
    mb: 5,
    imageObjects: [
      {
        path: "image-example.jpg",
      },
      {
        path: "image-example-2.jpg",
      },
      {
        path: "image-example-3.jpg",
      },
      {
        path: "image-example.jpg",
      },
    ],
    defaultImagePath: "fallback-image-example.jpg",
    ...args,
  } as IMultiImageViewerProps;
  return <MultiImageViewer {...templateArgs} />;
};

export const Default = ComponentTemplate.bind({});
Default.args = {};

export const WithOnClick = ComponentTemplate.bind({});
WithOnClick.args = {
  clickable: "zoomIn",
  onClickImage: () => {
    alert("Main Image has been clicked");
  },
};

export const WithContainerClass = ComponentTemplate.bind({});
WithContainerClass.args = {
  rootClassName: "multiImageViewer_story_sample",
};

export const WithContainerStyles = ComponentTemplate.bind({});
WithContainerStyles.args = {
  rootStyles: {
    border: "2px solid grey",
    borderRadius: "14px",
  },
};

export const UsingCustomWidthViaStyles = ComponentTemplate.bind({});
UsingCustomWidthViaStyles.args = {
  rootStyles: {
    border: "2px solid grey",
    borderRadius: "14px",
    width: "420px",
  },
};

export const WithMiniImageStyles = ComponentTemplate.bind({});
WithMiniImageStyles.args = {
  miniImageStyles: {
    border: "2px solid red",
  },
};

export const WithMiniSelectedImageStyles = ComponentTemplate.bind({});
WithMiniSelectedImageStyles.args = {
  miniImageSelectedStyles: {
    border: "3px solid green",
    borderRadius: "25px",
  },
};

export const WithMiniSelectedImageClassName = ComponentTemplate.bind({});
WithMiniSelectedImageClassName.args = {
  miniImageSelectedClassName: "multiImageViewer_story_sample_selected",
};

export const NavigationViaExternalComponent = () => {
  const imageObjs = [
    {
      path: "image-example.jpg",
    },
    {
      path: "image-example-2.jpg",
    },
    {
      path: "image-example-3.jpg",
    },
    {
      path: "image-example.jpg",
    },
  ];
  const [viewedIndex, setViewedIndex] = useState<number>(0);
  return (
    <View>
      <h3>Current viewed index: {viewedIndex}</h3>
      <button
        onClick={() => {
          if (viewedIndex > 0) {
            setViewedIndex(viewedIndex - 1);
          }
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (viewedIndex < imageObjs.length - 1) {
            setViewedIndex(viewedIndex + 1);
          }
        }}
      >
        Next
      </button>
      <MultiImageViewer
        mv={5}
        imageObjects={imageObjs}
        indexOverride={viewedIndex}
        setIndexOverride={setViewedIndex}
        defaultImagePath="fallback-image-example.jpg"
      />
    </View>
  );
};
