/* istanbul ignore file */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Example,
  Banner,
  Navbar,
  NavItem,
  Text,
  Footer,
} from "./library/components";
import { Main, View, CenterContainer } from "./library/components/Containers";
import { DropdownSelect } from "./library/forms/Controls/Dropdown/Dropdown-Select";
import { DropdownOption } from "./library/forms/Controls/Dropdown/Dropdown-Option";

// import sample scss
// IMPORTANT: App.scss must come AFTER component imports
import "./App.scss";
import {
  ControlWrapper,
  FileInput,
  FormContainer,
  Label,
  SubmitButton,
  TextInput,
  useDropdown,
  useFileInput,
  useFormInput,
} from "./library";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const Sample = [
    { id: "0", name: "Banana" },
    { id: "1", name: "Apple" },
    { id: "2", name: "Orange" },
    { id: "3", name: "Mango" },
    { id: "4", name: "Pineapple" },
    { id: "5", name: "Grapes" },
  ];

  const {
    value: selectedValue,
    options,
    selectedKey,
    error,
    setError,
    setSelectedKey,
  } = useDropdown(undefined, Sample, {
    keyProp: "id",
    valueProp: "name",
    initObject: {
      key: "all",
      value: "All",
    },
  });

  const {
    value: textInputValue1,
    setValue: setTextInputValue1,
    error: textInput1Error,
    setError: setTextInputError1,
  } = useFormInput<string>("");

  const {
    selectedFile,
    setSelectedFile,
    selectedFilePath,
    reset,
    error: fileError,
    setError: setFileError,
  } = useFileInput();

  const theme = "light";
  return (
    <>
      <Navbar theme={theme} maxWidth={1280}>
        <NavItem
          renderCustomNavItem={() => {
            return (
              <DropdownSelect
                OptionsContainerElement="div"
                asNavItem
                expandOn="hover"
                value="Profile"
              >
                <DropdownOption Element="a" option="Page 1" />
                <DropdownOption
                  renderCustomOption={() => {
                    return (
                      <Link to="/" className="dropdown_option_base">
                        Link 1
                      </Link>
                    );
                  }}
                />
                <DropdownOption Element="a" option="Page 3" />
              </DropdownSelect>
            );
          }}
        />
        <NavItem theme={theme} href="#">
          Link
        </NavItem>
        <NavItem theme={theme} href="#" active>
          Link
        </NavItem>
        <NavItem theme={theme} Implementation="button">
          Button
        </NavItem>
        <NavItem theme={theme} Implementation="button" active>
          Button
        </NavItem>
      </Navbar>
      <Main theme={theme}>
        <View>
          <Banner type="info" text="hello" />
          <CenterContainer maxWidth={720}>
            <Example name="john" />
            <FormContainer
              id="test-form-1"
              onSubmit={() => {
                alert("submitting form");
              }}
            >
              <Text Element="h2" mv={5}>
                Sample Form
              </Text>
              <ControlWrapper>
                <Label
                  htmlFor="sampleTextInput1"
                  label="First Name"
                  description="Required validation, validated on render"
                  required
                  mr={7}
                  rootStyles={{ width: "145px" }}
                />
                <TextInput
                  id="sampleTextInput1"
                  value={textInputValue1}
                  onChange={(val) => setTextInputValue1(val as string)}
                  placeholder="Your first name"
                  error={textInput1Error}
                  required
                  setError={setTextInputError1}
                  validateOnLoad
                />
              </ControlWrapper>
              <Text Element="h3" mv={5}>
                Dropdown Default Options and Hooks: {selectedValue}
              </Text>
              <ControlWrapper>
                <Label
                  htmlFor="sampleDropdown1"
                  label="Fruit"
                  required
                  mr={7}
                  rootStyles={{ width: "145px" }}
                />
                <DropdownSelect
                  id="sampleDropdown1"
                  options={options}
                  value={selectedValue}
                  onChange={(key) => setSelectedKey(key)}
                  error={error}
                  setError={setError}
                  required
                  selectedKey={selectedKey}
                />
              </ControlWrapper>
              <ControlWrapper>
                <Label
                  htmlFor="sampleFileInput"
                  label="Upload Image"
                  description="Required validation, validated on render"
                  required
                  mr={7}
                  rootStyles={{ width: "145px" }}
                />
                <FileInput
                  id="sampleFileInput"
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
              <SubmitButton />
            </FormContainer>
          </CenterContainer>
        </View>
        <Footer theme="dark">Footer</Footer>
      </Main>
    </>
  );
};

export default App;
