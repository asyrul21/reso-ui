import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Image } from "@components/Images/Image";

// import from index does not work for jest.spyOn
import * as ComponentLoaderModule from "@components/Loaders/Loader/Loader";

describe("Image Component Unit Tests", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const defaultProps = {
    src: "image-example.jpg",
  };

  test("should show loader when image is not yet loaded", () => {
    jest.spyOn(ComponentLoaderModule, "Loader").mockImplementation(() => {
      return <div data-testid="image-component-mock-loader">Mock Loader</div>;
    });

    const { debug } = render(<Image src="" />);

    // debug();
    const component = screen.queryByTestId("image-component-root");
    expect(component).toBeTruthy();

    const child = screen.queryByTestId("image-component-mock-loader");
    expect(child).toBeTruthy();
  });

  test("should render with img element without error, and loader not shown", () => {
    jest.spyOn(ComponentLoaderModule, "Loader").mockImplementation(() => {
      return <div data-testid="image-component-mock-loader">Mock Loader</div>;
    });

    const { debug } = render(<Image {...defaultProps} />);

    // debug();
    const component = screen.queryByTestId("image-component-root");
    expect(component).toBeTruthy();

    const imgElement = screen.queryByTestId("image-component-img");
    expect(imgElement).toBeTruthy();

    const child = screen.queryByTestId("image-component-loader");
    expect(child).toBeFalsy();
  });

  test("should run onClick when provided as prop", () => {
    jest.spyOn(ComponentLoaderModule, "Loader").mockImplementation(() => {
      return <div data-testid="image-component-mock-loader">Mock Loader</div>;
    });

    const onClickMock = jest.fn();

    render(<Image {...defaultProps} onClick={onClickMock} />);

    const component = screen.queryByTestId("image-component-root");
    component.click();

    expect(onClickMock).toHaveBeenCalled();
  });

  test("should support Margin props", () => {
    jest.spyOn(ComponentLoaderModule, "Loader").mockImplementation(() => {
      return <div data-testid="image-component-mock-loader">Mock Loader</div>;
    });

    render(<Image {...defaultProps} ma={5} />);

    const component = screen.queryByTestId("image-component-root");
    expect(component).toHaveClass("spacing-ma-5");
  });

  test("should apply custom container rootClassName when provided as prop", () => {
    jest.spyOn(ComponentLoaderModule, "Loader").mockImplementation(() => {
      return <div data-testid="image-component-mock-loader">Mock Loader</div>;
    });

    const testProps = {
      ...defaultProps,
      rootClassName: "image_test_sample_class",
    };

    render(<Image {...testProps} ma={5} />);

    const component = screen.queryByTestId("image-component-root");
    expect(component).toHaveClass("spacing-ma-5");
  });

  test("should apply custom img class when provided as prop", () => {
    jest.spyOn(ComponentLoaderModule, "Loader").mockImplementation(() => {
      return <div data-testid="image-component-mock-loader">Mock Loader</div>;
    });

    const testProps = {
      ...defaultProps,
      imgClassName: "image_test_sample_class",
    };

    render(<Image {...testProps} />);

    const component = screen.queryByTestId("image-component-img");
    expect(component).toHaveClass("image_test_sample_class");
  });

  test("should not render img element and show error message when image fails to load", () => {
    jest.spyOn(ComponentLoaderModule, "Loader").mockImplementation(() => {
      return <div data-testid="image-component-mock-loader">Mock Loader</div>;
    });

    const { debug } = render(<Image src="a-broken-link" />);

    const imgElement = screen.queryByTestId("image-component-img");
    // trigger img onError
    fireEvent.error(imgElement);

    const imgElementUpdated = screen.queryByTestId("image-component-img");
    expect(imgElementUpdated).toBeFalsy();

    const errorMessage = screen.queryByTestId("image-component-error");
    expect(errorMessage).toBeTruthy();
  });

  test("should render image correctly when image from main src fails to load but one of fallbacks works", () => {
    jest.spyOn(ComponentLoaderModule, "Loader").mockImplementation(() => {
      return <div data-testid="image-component-mock-loader">Mock Loader</div>;
    });

    const { debug } = render(
      <Image src="a-broken-link" fallbacks={["image-example.jpg"]} />
    );

    // debug();
    const imgElement = screen.queryByTestId("image-component-img");
    // trigger img onError
    fireEvent.error(imgElement);
    // trigger img onLoad
    fireEvent.load(imgElement);

    // debug();
    const errorMessage = screen.queryByTestId("image-component-error");
    expect(errorMessage).toBeFalsy();

    const imgElementUpdated = screen.queryByTestId("image-component-img");
    expect(imgElementUpdated).toBeTruthy();
  });
});
