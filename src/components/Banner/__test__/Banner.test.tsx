import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Banner } from "@components/Banner";

// import from index does not work for jest.spyOn
import * as ImageModule from "@components/Image/Image";

describe("Banner Component Unit Tests", () => {
  beforeEach(() => {
    jest.spyOn(ImageModule, "Image").mockImplementation((props) => {
      const { src, alt, rootClassName, imgClassName, rootStyles, imgStyles } =
        props;
      return (
        <div
          data-testid="banner-component-container-mock"
          className={rootClassName}
          style={rootStyles}
        >
          <img
            data-testid="banner-component-img-mock"
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
    const { debug } = render(<Banner {...defaultProps} />);
    // debug();
    const component = screen.queryByTestId("banner-component-container-mock");
    expect(component).toBeTruthy();
  });

  test("should apply container class when provided as prop", () => {
    const testProps = {
      ...defaultProps,
      rootClassName: "banner_sample_className",
    };
    const { debug } = render(<Banner {...testProps} />);
    // debug();
    const component = screen.queryByTestId("banner-component-container-mock");
    expect(component).toHaveClass("banner_sample_className");
  });

  test("should apply container styles when provided as prop", () => {
    const testProps = {
      ...defaultProps,
      rootStyles: { border: "2px solid red" },
    };
    const { debug } = render(<Banner {...testProps} />);
    // debug();
    const component = screen.queryByTestId("banner-component-container-mock");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply fullWidth class when provided as prop", () => {
    const testProps = {
      ...defaultProps,
      fullWidth: true,
    };
    const { debug } = render(<Banner {...testProps} />);
    // debug();
    const component = screen.queryByTestId("banner-component-container-mock");
    expect(component).toHaveClass("banner_container_fullWidth");
  });

  test("should apply img class when provided as prop", () => {
    const testProps = {
      ...defaultProps,
      imgClassName: "banner_img_sample_className",
    };
    const { debug } = render(<Banner {...testProps} />);

    // debug();
    const component = screen.queryByTestId("banner-component-img-mock");
    expect(component).toHaveClass("banner_img_sample_className");
  });

  test("should apply img styles when provided as prop", () => {
    const testProps = {
      ...defaultProps,
      imgStyles: { border: "2px solid red" },
    };
    const { debug } = render(<Banner {...testProps} />);
    // debug();
    const component = screen.queryByTestId("banner-component-img-mock");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
