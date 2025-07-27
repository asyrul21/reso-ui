/* istanbul ignore file */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
  Example,
  Banner,
  Navbar,
  NavItem,
  Text,
  Footer,
  Button,
  ModalContainer,
  ModalBody,
  ModalHeader,
  Image,
} from "./library/components";
import {
  Main,
  View,
  CenterContainer,
  Flex,
} from "./library/components/Containers";
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
import { Drawer } from "./library/components/Drawer";
import { ResponsiveContext } from "./library/context/ResponsiveContext";
import { ShimmerLoader } from "./library/components/Loaders/ShimmerLoader/ShimmerLoader";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const { isTablet } = useContext(ResponsiveContext);
  // console.log("isTablet:", isTablet);

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
      {showModal && (
        <ModalContainer isOpen={showModal} pa={5}>
          <ModalHeader title="My Modal" onClose={() => setShowModal(false)} />
          <ModalBody
            pa={5}
            rootStyles={{
              width: "540px",
              height: "540px",
            }}
          >
            <p>Test Modal</p>
          </ModalBody>
        </ModalContainer>
      )}
      <Drawer
        isOpen={showDrawer}
        side="right"
        width={512}
        onClose={() => setShowDrawer(false)}
        title="Test Title"
      >
        <p>Test</p>
      </Drawer>
      <Main theme={theme}>
        <View>
          <Banner type="info" text="hello" />
          <CenterContainer maxWidth={720}>
            <Flex justify="start">
              <Button text="Show Modal" onClick={() => setShowModal(true)} />
              <Button text="Show Drawer" onClick={() => setShowDrawer(true)} />
            </Flex>
            <Example name="john" />

            <Image
              mv={5}
              src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div style={{ width: "260px" }}>
              <FileInput
                id="123"
                onChange={(file) => console.log(file)}
                hideTextInputField
                labelText="Select File"
              />
            </div>

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
