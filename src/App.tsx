/* istanbul ignore file */
import React, { useState } from "react";

import { Example, Banner, Navbar, NavItem } from "./library/components";
import { Main, View } from "./library/components/Containers";
import { DropdownSelect } from "./library/forms/Controls/Dropdown-Select";

// import sample scss
// IMPORTANT: App.scss must come AFTER component imports
import "./App.scss";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const theme = "light";

  return (
    <>
      <Navbar theme={theme} maxWidth={1280}>
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
      <Main>
        <View>
          <Banner type="info" text="hello" />
          <Example name="john" />
          {/* <h2>Dropdown</h2>
          <DropdownSelect /> */}
        </View>
      </Main>
    </>
  );
};

export default App;
