import React from "react";
import { render, screen } from "@testing-library/react";
import { ImageContainer } from "@components/Containers/Image-Container";
import * as ComponentLoaderModule from "@components/Loaders/Component-Loader";

describe("Image Container Unit Tests", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const defaultProps = {};

  test("should show loader when image is not yet loaded", () => {
    console.log(ComponentLoaderModule);
    jest
      .spyOn(ComponentLoaderModule, "ComponentLoader")
      .mockImplementation(() => {
        return <div data-testid="image-container-mock-loader">Mock Loader</div>;
      });

    const { debug } = render(
      <ImageContainer>
        <img src="" />
      </ImageContainer>
    );

    debug();
    const component = screen.queryByTestId("image-container-root");
    expect(component).toBeTruthy();

    /* spy on -> Component Loader*/
    const child = screen.queryByTestId("image-container-mock-loader");
    expect(child).toBeTruthy();
  });

  //   test("should render itself without error, and loader not shown", () => {
  //     const { debug } = render(
  //       <ImageContainer>
  //         <img src="image-example.jpg" />
  //       </ImageContainer>
  //     );

  //     // debug();
  //     const component = screen.queryByTestId("image-container-root");
  //     expect(component).toBeTruthy();

  //     const child = screen.queryByTestId("image-container-loader");
  //     expect(child).toBeFalsy();
  //   });
});
