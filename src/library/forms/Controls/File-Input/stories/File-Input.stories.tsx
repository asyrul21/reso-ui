import React, { useState } from "react";
import {
  StoryFn as ComponentStory,
  Meta as ComponentMeta,
} from "@storybook/react";

// always import from index to include global styles
import { FormContainer, ControlWrapper } from "../../../Containers";
// import "./storiesStyle.scss";

import { Label } from "../../../Controls/Label";
import { FileInput } from "../";
import { SubmitButton } from "../../../Controls/Submit-Button";

import dedent from "ts-dedent";
import { useFileInput } from "../../../Hooks";
import { Text } from "../../../../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Controls/File Input",
  component: FileInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: dedent`
            A form input component for uploading files.

            You may use the \`useFileInput\` built-in hook for better interactivity.

            If you use the hook, you may use the [selectedFilePath] to display "previews".

            Use \`rootClassNmae\` or \`rootStyles\` to override wrapper stylings.

            Use \`textInputClassName\` or \`textInputStyles\` to override default Text input element styles.

            Use \`fileInputClassName\` or \`fileInputStyles\` to override default "Select File" button styles".

            Use \`resetButtonClassName\` or \`resetButtonStyles\` to override default "Reset" button styles".

            You can use the [accept] prop to filter the types of files that user is allowed to upload. It accepts two formats:

            1. extension (or comma delimeted values of it) - eg. ".png" or ".png, .jpg, .svg"

            2. mimetype (or comman delimeted values of it) - eg. "image/png", or "*/*, image/*, application/pdf"

            3. A mixture of comma delimeted values of the two formats above - eg. ".png, image/svg, .pdf"

            The [accept] property will automatically check the files chosen by the user, and display validation errors if there are any.

            You can also disable non-allowed file types when the User is selecting his/her files on the Explorer, which is enabled by defualt.
            
            To disable this, set prop [filterExtensionsInUsersFileExplorer] to false.

            Note that users can only upload one file at a time.

            Also note that this component is validated-on-render, and this behaviour cannot be changed.

            You can also provide custom validators via the \`customValidators\` prop.

            Supports Margin Props.

            Import statement: \`import { FileInput } from 'reso-ui'\`
        `,
      },
    },
  },
} as ComponentMeta<typeof FileInput>;

export const Default = () => {
  const {
    selectedFile,
    setSelectedFile,
    selectedFilePath,
    reset,
    error: fileError,
    setError: setFileError,
  } = useFileInput();

  return (
    <FormContainer rootStyles={{ height: "120px" }} onSubmit={() => {}}>
      <Text Element="h3" mv={5}>
        Default File Input, using built-in Hook
      </Text>
      <ControlWrapper>
        <Label
          htmlFor="sampleFileInput"
          label="Upload Image"
          required
          mr={7}
          rootStyles={{ width: "145px" }}
        />
        <FileInput
          id="sampleFileInput1"
          value={selectedFile?.name}
          onChange={(file) => setSelectedFile(file)}
          error={fileError}
          onReset={() => reset()}
          required
          setError={setFileError}
          selectedFile={selectedFile}
          accept="image/png, .svg, image/jpg"
        />
      </ControlWrapper>
    </FormContainer>
  );
};

export const WithFileTypeValidations = () => {
  const {
    selectedFile,
    setSelectedFile,
    selectedFilePath,
    reset,
    error: fileError,
    setError: setFileError,
  } = useFileInput();

  return (
    <FormContainer rootStyles={{ height: "120px" }} onSubmit={() => {}}>
      <Text Element="h3" mv={5}>
        Disabling the <strong>filterExtensionsInUsersFileExplorer</strong> prop.
      </Text>
      <ControlWrapper>
        <Label
          htmlFor="sampleFileInput"
          label="Upload Image"
          required
          mr={7}
          rootStyles={{ width: "145px" }}
        />
        <FileInput
          id="sampleFileInput2"
          value={selectedFile?.name}
          onChange={(file) => setSelectedFile(file)}
          error={fileError}
          onReset={() => reset()}
          required
          setError={setFileError}
          filterExtensionsInUsersFileExplorer={false}
          selectedFile={selectedFile}
          accept="image/png, .svg, image/jpg"
        />
      </ControlWrapper>
    </FormContainer>
  );
};
