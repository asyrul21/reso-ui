/* istanbul ignore file */
import React, { useState } from "react";

import { Example, Banner } from "./library/components";
// import { Example } from "../dist/main";
// import { Flex } from "@components/Containers/Flex";
import { View } from "@components/Containers/View";
// import { Modal } from "@components/Modal";
// import { ModalHeader } from "@components/Modal/Modal-Header";
import { DropdownSelect } from "@forms/Controls/Dropdown-Select";

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
