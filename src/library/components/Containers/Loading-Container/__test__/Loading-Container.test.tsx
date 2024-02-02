import React from "react";
import { render, screen } from "@testing-library/react";
import { LoadingContainer } from "../Loading-Container";
import * as ComponentLoaderModule from "../../../Loaders/Loader/Loader";
import * as ComponentErrorModule from "../../../Errors/Component-Error/Component-Error";

const SampleChildComponent = () => {
  return (
    <div data-testid="loading-container-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Loading Container Component Unit Tests", () => {
  beforeEach(() => {
    jest.spyOn(ComponentLoaderModule, "Loader").mockImplementation((props) => {
      const { rootClassName, rootStyles } = props;

      return (
        <div
          data-testid="loading-container-loader-mock"
          className={rootClassName}
          style={rootStyles}
        >
          Loader Mock
        </div>
      );
    });

    jest
      .spyOn(ComponentErrorModule, "ComponentError")
      .mockImplementation((props) => {
        const { rootClassName, rootStyles, text } = props;

        return (
          <div
            data-testid="loading-container-error-mock"
            className={rootClassName}
            style={rootStyles}
          >
            {text && text}
          </div>
        );
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("ClassName and Styles", () => {
    test("should render itself with correct className when passed as prop", () => {
      const { debug } = render(
        <LoadingContainer
          type="layer"
          loading={true}
          rootClassName="sample_class_name"
        >
          <SampleChildComponent />
        </LoadingContainer>
      );

      // debug();
      const component = screen.queryByTestId("loading-container-root");
      expect(component).toHaveClass("sample_class_name");
    });

    test("should render itself with styles when passed as prop", () => {
      const { debug } = render(
        <LoadingContainer
          type="layer"
          loading={true}
          rootStyles={{ border: "2px solid red" }}
        >
          <SampleChildComponent />
        </LoadingContainer>
      );

      // debug();
      const component = screen.queryByTestId("loading-container-root");
      expect(component).toHaveStyle("border: 2px solid red");
    });
  });

  describe("Layer Type", () => {
    test("should render correct component type based on className", () => {
      const { debug } = render(
        <LoadingContainer type="layer" loading={true}>
          <SampleChildComponent />
        </LoadingContainer>
      );

      // debug();
      const component = screen.queryByTestId("loading-container-root");
      expect(component).toHaveClass("loadingContainer_container_layer");
    });

    test("should render itself and children, and show loader without error", () => {
      const { debug } = render(
        <LoadingContainer type="layer" loading={true}>
          <SampleChildComponent />
        </LoadingContainer>
      );

      // debug();
      const component = screen.queryByTestId("loading-container-root");
      expect(component).toBeInTheDocument();

      const child = screen.queryByTestId("loading-container-child-test");
      expect(child).toBeInTheDocument();

      const loader = screen.queryByTestId("loading-container-loader-mock");
      expect(loader).toBeInTheDocument();

      const error = screen.queryByTestId("loading-container-error-mock");
      expect(error).not.toBeInTheDocument();
    });

    test("should render itself and children, and show error without loader", () => {
      const { debug } = render(
        <LoadingContainer type="layer" error={"Oops"}>
          <SampleChildComponent />
        </LoadingContainer>
      );

      // debug();
      const component = screen.queryByTestId("loading-container-root");
      expect(component).toBeInTheDocument();

      const child = screen.queryByTestId("loading-container-child-test");
      expect(child).toBeInTheDocument();

      const loader = screen.queryByTestId("loading-container-loader-mock");
      expect(loader).not.toBeInTheDocument();

      const error = screen.queryByTestId("loading-container-error-mock");
      expect(error).toBeInTheDocument();
    });
  });

  describe("Conditional Type", () => {
    test("should render correct component type based on className", () => {
      const { debug } = render(
        <LoadingContainer type="conditional" loading={true}>
          <SampleChildComponent />
        </LoadingContainer>
      );

      // debug();
      const component = screen.queryByTestId("loading-container-root");
      expect(component).toHaveClass("loadingContainer_container_conditional");
    });

    test("should render itself and show loader without error and without rendering children", () => {
      const { debug } = render(
        <LoadingContainer type="conditional" loading={true}>
          <SampleChildComponent />
        </LoadingContainer>
      );

      // debug();
      const component = screen.queryByTestId("loading-container-root");
      expect(component).toBeInTheDocument();

      const loader = screen.queryByTestId("loading-container-loader-mock");
      expect(loader).toBeInTheDocument();

      const child = screen.queryByTestId("loading-container-child-test");
      expect(child).not.toBeInTheDocument();

      const error = screen.queryByTestId("loading-container-error-mock");
      expect(error).not.toBeInTheDocument();
    });

    test("should render itself and show error without loader and without rendering children", () => {
      const { debug } = render(
        <LoadingContainer type="conditional" error={"Oops"}>
          <SampleChildComponent />
        </LoadingContainer>
      );

      // debug();
      const component = screen.queryByTestId("loading-container-root");
      expect(component).toBeInTheDocument();

      const error = screen.queryByTestId("loading-container-error-mock");
      expect(error).toBeInTheDocument();

      const child = screen.queryByTestId("loading-container-child-test");
      expect(child).not.toBeInTheDocument();

      const loader = screen.queryByTestId("loading-container-loader-mock");
      expect(loader).not.toBeInTheDocument();
    });
  });
});
