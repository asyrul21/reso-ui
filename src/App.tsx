/* istanbul ignore file */
import React, { useState } from "react";

import { Example, Banner, Navbar } from "./library/components";
import { Main, View } from "./library/components/Containers";
import { DropdownSelect } from "./library/forms/Controls/Dropdown-Select";

// import sample scss
// IMPORTANT: App.scss must come AFTER component imports
import "./App.scss";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Navbar ph={5}>Test</Navbar>
      <Main>
        <View>
          <Banner type="info" text="hello" />
          <Example name="john" />
          <h2>Dropdown</h2>
          <DropdownSelect />
        </View>
      </Main>
    </>
  );
};

export default App;
