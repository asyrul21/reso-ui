import React from "react";
import { render, screen } from "@testing-library/react";
import { ImageContainer } from "@components/Containers/Image-Container";

// import from index does not work for jest.spyOn
import * as ComponentLoaderModule from "@components/Loaders/Component-Loader/Component-Loader";

describe("Image Container Unit Tests", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const defaultProps = {};

  test("should show loader when image is not yet loaded", () => {
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

    // debug();
    const component = screen.queryByTestId("image-container-root");
    expect(component).toBeTruthy();

    /* spy on -> Component Loader*/
    const child = screen.queryByTestId("image-container-mock-loader");
    expect(child).toBeTruthy();
  });

  test("should render itself without error, and loader not shown", () => {
    jest
      .spyOn(ComponentLoaderModule, "ComponentLoader")
      .mockImplementation(() => {
        return <div data-testid="image-container-mock-loader">Mock Loader</div>;
      });

    const { debug } = render(
      <ImageContainer>
        <img src="image-example.jpg" />
      </ImageContainer>
    );

    // debug();
    const component = screen.queryByTestId("image-container-root");
    expect(component).toBeTruthy();

    const child = screen.queryByTestId("image-container-loader");
    expect(child).toBeFalsy();
  });

  test("should run onClick when provided as prop", () => {
    jest
      .spyOn(ComponentLoaderModule, "ComponentLoader")
      .mockImplementation(() => {
        return <div data-testid="image-container-mock-loader">Mock Loader</div>;
      });

    const onClickMock = jest.fn();

    render(
      <ImageContainer onClick={onClickMock}>
        <img src="image-example.jpg" />
      </ImageContainer>
    );

    const component = screen.queryByTestId("image-container-root");
    component.click();

    expect(onClickMock).toHaveBeenCalled();
  });

  test("should support Margin props", () => {
    jest
      .spyOn(ComponentLoaderModule, "ComponentLoader")
      .mockImplementation(() => {
        return <div data-testid="image-container-mock-loader">Mock Loader</div>;
      });

    render(
      <ImageContainer ma={5}>
        <img src="image-example.jpg" />
      </ImageContainer>
    );

    const component = screen.queryByTestId("image-container-root");
    expect(component).toHaveClass("spacing-ma-5");
  });
});
