/* istanbul ignore file */
import React, { useState } from "react";

import { Example } from "./library";
import { Banner } from "./library";
// import { Example } from "../dist/main";
// import { Flex } from "@components/Containers/Flex";
// import { View } from "@components/Containers/View";
// import { Modal } from "@components/Modal";
// import { ModalHeader } from "@components/Modal/Modal-Header";
// import { ModalBody } from "@components/Modal/Modal-Body";

// import sample scss
// IMPORTANT: App.scss must come AFTER component imports
import "./App.scss";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Banner type="info" text="hello" />
      <Example name="john" />
    </>
  );
};

export default App;
