/* istanbul ignore file */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Example, Banner, Navbar, NavItem, Text } from "./library/components";
import { Main, View, CenterContainer } from "./library/components/Containers";
import { DropdownSelect } from "./library/forms/Controls/Dropdown/Dropdown-Select";
import { DropdownOption } from "./library/forms/Controls/Dropdown/Dropdown-Option";

// import sample scss
// IMPORTANT: App.scss must come AFTER component imports
import "./App.scss";
import { useDropdown } from "./library";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const Sample = [
    { id: "0", name: "Banana" },
    { id: "1", name: "Apple" },
    { id: "2", name: "Orange" },
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
          <CenterContainer maxWidth={540}>
            <Example name="john" />
            <Text Element="h3" mv={5}>
              Dropdown Default Options and Hooks: {selectedValue}
            </Text>
            <DropdownSelect
              options={options}
              value={selectedValue}
              onChange={(key) => setSelectedKey(key)}
              error={error}
              setError={setError}
              required
              selectedKey={selectedKey}
            />
            <Text Element="h3" mv={5}>
              Dropdown UI & LI
            </Text>
            <DropdownSelect OptionsContainerElement="ul">
              <DropdownOption option="Option 1" />
              <DropdownOption option="Option 2" active />
              <DropdownOption option="Option 3" />
            </DropdownSelect>
            <Text Element="h3" mv={5}>
              Dropdown DIV & A
            </Text>
            <DropdownSelect OptionsContainerElement="div">
              <DropdownOption Element="a" option="Option 1" />
              <DropdownOption Element="a" option="Option 2" active />
              <DropdownOption Element="a" option="Option 3" />
            </DropdownSelect>
          </CenterContainer>
        </View>
      </Main>
    </>
  );
};

export default App;
