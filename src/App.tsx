/* istanbul ignore file */
import React, { useState } from "react";

import { Example, Banner } from "./library/components";
import { View } from "./library/components/Containers";
import { DropdownSelect } from "./library/forms/Controls/Dropdown-Select";

// import sample scss
// IMPORTANT: App.scss must come AFTER component imports
import "./App.scss";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <View>
      <Banner type="info" text="hello" />
      <Example name="john" />
      <h2>Dropdown</h2>
      <DropdownSelect />
    </View>
  );
};

export default App;
