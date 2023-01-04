import React from "react";

// import sample scss
import { Example, QuantityCounter, AddToCart } from "@components";
import "./App.scss";

const App = () => {
  return (
    <>
      {/* no theme */}
      <Example name="john" />
      {/* with theme */}
      <Example theme="light" name="john" />
      <Example theme="dark" name="john" />
      {/* no theme, with className */}
      <Example name="john" className="example_app_styles" />
      {/* with theme, with className */}
      <Example theme="light" name="john" className="example_app_styles" />
      <QuantityCounter
        value={5}
        onChange={(val) => {
          alert(`Counter value updated to: ${val}`);
        }}
      />
      {/* with theme */}
      <AddToCart
        theme="light"
        inStock={true}
        quantityValue={1}
        currency="RM"
        price="100.00"
        subTotal="100.00"
      />
      {/* override styles with classname */}
      <AddToCart
        className="addToCart_app_styles"
        inStock={true}
        quantityValue={1}
        currency="RM"
        price="100.00"
        subTotal="100.00"
      />
    </>
  );
};

export default App;
