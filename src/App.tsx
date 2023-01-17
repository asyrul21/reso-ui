import React, { useState } from "react";

import { Example } from "@components/Example";
import { QuantityCounter } from "@components/Quantity-Counter";
import { AddToCart } from "@components/Add-To-Cart";
import { Flex } from "@components/Containers/Flex";
import { CenterContainer } from "@components/Containers/Center-Container";
import { Image } from "@components/Image";
import { Banner } from "@components/Banner";
import { ComponentLoader } from "@components/Loaders/Component-Loader";
import { ComponentError } from "@components/Errors/Component-Error";
import { LoadingContainer } from "@components/Containers/Loading-Container";
import { View } from "@components/Containers/View";
import { Modal } from "@components/Containers/Modal";
import { MultiImageViewer } from "@components/Multi-Image-Viewer";
import { AdminProductPanel } from "@components/Admin-Product-Panel";
import { Panel } from "@components/Containers/Panel";
import { PanelTitle } from "@components/Panel/Panel-Title";
import { PanelRow } from "@components/Panel/Panel-Row";
import { PanelButton } from "@components/Panel/Panel-Button";

// import sample scss
// IMPORTANT: App.scss must come AFTER component imports
import "./App.scss";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <View rootStyles={{ border: "2px solid blue" }} pa={5}>
        {showModal && (
          <Modal
            title="Example Modal"
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            modalStyles={{ border: "2px solid red" }}
            pa={5}
          >
            <p>Sample</p>
          </Modal>
        )}
        {/* no theme */}
        <Flex borderColor="green" mb={5}>
          <Example name="john" />
        </Flex>
        {/* with theme */}
        <Flex mb={5}>
          <Example theme="light" name="john" />
        </Flex>
        <Flex mb={5}>
          <Example theme="dark" name="john" />
        </Flex>
        {/* no theme, with className */}
        <Flex mb={5}>
          <Example name="john" rootClassName="example_app_styles" />
        </Flex>
        {/* with theme, with className */}
        <Flex mb={5}>
          <Example
            theme="light"
            name="john"
            rootClassName="example_app_styles"
          />
        </Flex>
        <Flex pa={5}>
          <QuantityCounter
            value={5}
            onChange={(val) => {
              alert(`Counter value updated to: ${val}`);
            }}
          />
        </Flex>
        {/* with theme */}
        <Flex
          mb={5}
          ma={"auto"}
          borderColor="blue"
          rootStyles={{
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
        </Flex>
        {/* override styles with classname */}
        <Flex mb={5}>
          <AddToCart
            rootClassName="addToCart_app_styles"
            inStock={true}
            quantityValue={1}
            currency="RM"
            price="100.00"
            subTotal="100.00"
          />
        </Flex>
        <Flex justify="start" borderColor="blue">
          <>
            <Flex mr={5}>
              <div className="app_test_box">Test 1</div>
            </Flex>
            <Flex>
              <div className="app_test_box">Test 2</div>
            </Flex>
          </>
        </Flex>
        <CenterContainer rootStyles={{ border: "2px solid green" }}>
          <div className="app_test_box">Test 1</div>
        </CenterContainer>
        <Flex mb={5}>
          <div className="app_test_box" style={{ position: "relative" }}>
            <ComponentLoader />
          </div>
        </Flex>
        {/* with border and margin */}
        <Flex mb={5}>
          <Image
            src="image-example.jpg"
            rootStyles={{ border: "2px solid red" }}
            ma={5}
          />
        </Flex>
        <Flex mb={5}>
          <Banner
            src="banner-example.jpg"
            rootStyles={{ border: "2px solid red" }}
          />
        </Flex>
        <Flex mb={5}>
          {/* No text */}
          <div className="app_test_box" style={{ position: "relative" }}>
            <ComponentError />
          </div>
        </Flex>
        <Flex mb={5}>
          {/* With text */}
          <div className="app_test_box" style={{ position: "relative" }}>
            <ComponentError text="Something went wrong" />
          </div>
        </Flex>
        <h1>Layer</h1>
        <Flex mb={5}>
          {/* layer */}
          <LoadingContainer type="layer" loading={true}>
            <div className="app_test_data_table">
              Sample Data Table Component
            </div>
          </LoadingContainer>
        </Flex>

        {/* conditional */}
        <h1>Conditional</h1>
        <Flex mb={5}>
          <div style={{ width: "100%", minHeight: "320px" }}>
            <LoadingContainer type="conditional" loading={true}>
              <div className="app_test_data_table">
                Sample Data Table Component
              </div>
            </LoadingContainer>
          </div>
        </Flex>
        <h1>Modal</h1>
        <Flex mb={5}>
          <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
        </Flex>
        <h1>Single Image</h1>
        <Flex mb={5}>
          <MultiImageViewer
            imageObjects={[
              {
                path: "image-example.jpg",
              },
            ]}
            defaultImagePath="fallback-image-example.jpg"
          />
        </Flex>
        <h1>Multiple Images</h1>
        <MultiImageViewer
          mb={5}
          imageObjects={[
            {
              path: "image-example.jpg",
            },
            {
              path: "image-example-2.jpg",
            },
            {
              path: "image-example-3.jpg",
            },
            {
              path: "image-example.jpg",
            },
          ]}
          defaultImagePath="fallback-image-example.jpg"
        />
        <Flex mb={5}>
          <AdminProductPanel countInStock={5} />
        </Flex>
        <Flex mb={5}>
          <AdminProductPanel countInStock={5} isLowStock />
        </Flex>
        <Panel>
          <PanelTitle text="Admin Panel" />
          <PanelRow
            keyStr="Qty in Stock:"
            value={5}
            valueStyles={{ fontWeight: "bold", color: "#a43030" }}
          />
          <PanelRow keyStr="Sales this month:" value={5} />
          <PanelRow keyStr="Total sales" value={2} />
          <PanelButton
            text="Edit"
            onClick={() => {
              alert("Panel button clicked!");
            }}
          />
          <PanelButton
            text="Archive"
            onClick={() => {
              alert("Panel button clicked!");
            }}
          />
        </Panel>
      </View>
    </>
  );
};

export default App;
