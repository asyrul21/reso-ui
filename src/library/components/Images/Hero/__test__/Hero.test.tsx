import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

// import from index does not work for jest.spyOn
import * as ImageModule from "../../Image/Image";

describe("Hero Component Unit Tests", () => {
  beforeEach(() => {
    jest.spyOn(ImageModule, "Image").mockImplementation((props) => {
      const { src, alt, rootClassName, imgClassName, rootStyles, imgStyles } =
        props;

      return (
        <div
          data-testid="hero-component-container-mock"
          className={rootClassName}
          style={rootStyles}
        >
          <img
            data-testid="hero-component-img-mock"
            src={src}
            alt={alt}
            className={imgClassName}
            style={imgStyles}
          />
        </div>
      );
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const defaultProps = {
    src: "image-example.jpg",
  };

  test("should render without crashing", () => {
    const { debug } = render(<Hero {...defaultProps} />);
    // debug();
    const component = screen.queryByTestId("hero-component-container-mock");
    expect(component).toBeTruthy();
  });

  test("should apply container class when provided as prop", () => {
    const testProps = {
      ...defaultProps,
      rootClassName: "hero_sample_className",
    };
    const { debug } = render(<Hero {...testProps} />);
    // debug();
    const component = screen.queryByTestId("hero-component-container-mock");
    expect(component).toHaveClass("hero_sample_className");
  });

  test("should apply container styles when provided as prop", () => {
    const testProps = {
      ...defaultProps,
      rootStyles: { border: "2px solid red" },
    };
    const { debug } = render(<Hero {...testProps} />);
    // debug();
    const component = screen.queryByTestId("hero-component-container-mock");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply fullWidth class when provided as prop", () => {
    const testProps = {
      ...defaultProps,
      fullWidth: true,
    };
    const { debug } = render(<Hero {...testProps} />);
    // debug();
    const component = screen.queryByTestId("hero-component-container-mock");
    expect(component).toHaveClass("hero_container_fullWidth");
  });

  test("should apply img class when provided as prop", () => {
    const testProps = {
      ...defaultProps,
      imgClassName: "hero_img_sample_className",
    };
    const { debug } = render(<Hero {...testProps} />);

    // debug();
    const component = screen.queryByTestId("hero-component-img-mock");
    expect(component).toHaveClass("hero_img_sample_className");
  });

  test("should apply img styles when provided as prop", () => {
    const testProps = {
      ...defaultProps,
      imgStyles: { border: "2px solid red" },
    };
    const { debug } = render(<Hero {...testProps} />);
    // debug();
    const component = screen.queryByTestId("hero-component-img-mock");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
