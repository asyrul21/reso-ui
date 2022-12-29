import React from "react";

// import sample component here
// import { QuantityCounter } from "./components/Quantity-Counter";

// import sample scss
import { Example } from "@components/Example";
import "./App.scss";

const App = () => {
  return (
    // <QuantityCounter
    //   theme="light"
    //   value={1}
    //   onChange={(val) => {
    //     console.log(`Quantity count updated: ${val}`);
    //   }}
    // />
    <Example name="john" />
  );
};

export default App;
