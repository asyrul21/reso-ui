import React, { useState } from "react";
import {
  StoryFn as ComponentStory,
  Meta as ComponentMeta,
} from "@storybook/react";

// always import from index to include global styles
import { Drawer } from "..";
import "./storyStyles.scss";

import dedent from "ts-dedent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Drawer",
  component: Drawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    width: {
      control: "number",
    },
  },
  decorators: [
    (storyFn) => (
      <div
        style={{
          //   border: "1px solid red",
          width: "100%",
          height: "500px",
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: dedent`
            A Drawer component which slides from the sides.
        `,
      },
    },
  },
} as ComponentMeta<typeof Drawer>;

const SampleChildComponent = () => {
  return (
    <div className="story_modal_child_sample" style={{ width: "100%" }}>
      Test Drawer Children
    </div>
  );
};

export const Default = (props) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <>
      <Drawer
        title={"My Drawer Title"}
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        {...props}
      >
        <SampleChildComponent />
      </Drawer>
      <button onClick={() => setShowDrawer(true)}>Show Drawer</button>
    </>
  );
};

export const WithContainerClass = () => {
  /**
   * CSS:
   *
   * .stories_drawer_root_class {
   *       background-color: greenyellow;
   * }
   */
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <>
      <Drawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        rootClassName="stories_drawer_root_class"
      >
        <SampleChildComponent />
      </Drawer>

      <button onClick={() => setShowDrawer(true)}>Show Drawer</button>
    </>
  );
};

export const WithContainerStyles = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <>
      <Drawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        rootStyles={{
          background: "yellow",
        }}
      >
        <SampleChildComponent />
      </Drawer>

      <button onClick={() => setShowDrawer(true)}>Show Drawer</button>
    </>
  );
};

export const WithTitleClassAndStyle = () => {
  /**
   * CSS:
   *
   * .stories_drawer_title_class {
   *       background-color: #36454f;
   *   }
   *
   * // override the title button
   * .stories_drawer_title_class {
   *        button {
   *            background-color: unset;
   *            color: white;
   *            &:hover {
   *            background-color: unset;
   *            color: grey;
   *            }
   *        }
   *    }
   */
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <>
      <Drawer
        isOpen={showDrawer}
        title="My Title"
        onClose={() => setShowDrawer(false)}
        titleClassName="stories_drawer_title_class"
        titleStyles={{ color: "white", borderBottom: "3px solid orange" }}
      >
        <SampleChildComponent />
      </Drawer>

      <button onClick={() => setShowDrawer(true)}>Show Drawer</button>
    </>
  );
};
