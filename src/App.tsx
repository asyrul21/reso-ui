import React from "react";

import { Example } from "@components/Example";
import { QuantityCounter } from "@components/Quantity-Counter";
import { AddToCart } from "@components/Add-To-Cart";
import { FlexContainer } from "@components/Containers/Flex-Container";
import { CenterContainer } from "@components/Containers/Center-Container";
import { ImageContainer } from "@components/Containers/Image-Container";
import { ComponentLoader } from "@components/Loaders/Component-Loader";

// import sample scss
// IMPORTANT: App.scss must come AFTER component imports
import "./App.scss";

const App = () => {
  return (
    <>
      {/* no theme */}
      <FlexContainer borderColor="green" mb={5}>
        <Example name="john" />
      </FlexContainer>
      {/* with theme */}
      <FlexContainer mb={5}>
        <Example theme="light" name="john" />
      </FlexContainer>
      <FlexContainer mb={5}>
        <Example theme="dark" name="john" />
      </FlexContainer>
      {/* no theme, with className */}
      <FlexContainer mb={5}>
        <Example name="john" className="example_app_styles" />
      </FlexContainer>
      {/* with theme, with className */}
      <FlexContainer mb={5}>
        <Example theme="light" name="john" className="example_app_styles" />
      </FlexContainer>
      <FlexContainer pa={5}>
        <QuantityCounter
          value={5}
          onChange={(val) => {
            alert(`Counter value updated to: ${val}`);
          }}
        />
      </FlexContainer>
      {/* with theme */}
      <FlexContainer
        mb={5}
        ma={"auto"}
        borderColor="blue"
        styles={{
          width: "fit-content",
        }}
      >
        <AddToCart
          theme="light"
          inStock={true}
          quantityValue={1}
          currency="RM"
          price="100.00"
          subTotal="100.00"
        />
      </FlexContainer>
      {/* override styles with classname */}
      <FlexContainer mb={5}>
        <AddToCart
          className="addToCart_app_styles"
          inStock={true}
          quantityValue={1}
          currency="RM"
          price="100.00"
          subTotal="100.00"
        />
      </FlexContainer>
      <FlexContainer justify="start" borderColor="blue">
        <>
          <FlexContainer mr={5}>
            <div className="app_test_box">Test 1</div>
          </FlexContainer>
          <FlexContainer>
            <div className="app_test_box">Test 2</div>
          </FlexContainer>
        </>
      </FlexContainer>
      <CenterContainer styles={{ border: "2px solid green" }}>
        <div className="app_test_box">Test 1</div>
      </CenterContainer>
      <div className="app_test_box" style={{ position: "relative" }}>
        <ComponentLoader />
      </div>
      {/* with border and margin */}
      <ImageContainer styles={{ border: "2px solid red" }} ma={5}>
        <img
          src="image-example.jpg"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </ImageContainer>
    </>
  );
};

export default App;
