import React from "react";
import { render, screen } from "@testing-library/react";
import { BannerWrapper } from "@components/Banners/Banner-Wrapper";

const SampleComponent = () => {
  return (
    <div data-testid="banner-wrapper-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Panel Wrapper Unit Tests", () => {
  test("should render itself and children without error", () => {
    const { debug } = render(
      <BannerWrapper>
        <SampleComponent />
      </BannerWrapper>
    );

    // debug();
    const component = screen.queryByTestId("banner-wrapper-root");
    expect(component).toBeTruthy();

    const child = screen.queryByTestId("banner-wrapper-child-test");
    expect(child).toBeTruthy();
  });

  test("should apply positionAbsolute className when provided as prop", () => {
    render(
      <BannerWrapper positionAbsolute>
        <SampleComponent />
      </BannerWrapper>
    );

    const component = screen.queryByTestId("banner-wrapper-root");
    expect(component).toHaveClass("banner_wrapper_container_positionAbsolute");
  });

  test("should apply scroll className when hasMaxheight is true", () => {
    render(
      <BannerWrapper hasMaxHeight>
        <SampleComponent />
      </BannerWrapper>
    );

    const component = screen.queryByTestId("banner-wrapper-root");
    expect(component).toHaveClass("banner_wrapper_container_scroll");
  });

  test("should apply custom className when provided as prop", () => {
    render(
      <BannerWrapper rootClassName="sample_class">
        <SampleComponent />
      </BannerWrapper>
    );

    const component = screen.queryByTestId("banner-wrapper-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <BannerWrapper rootStyles={{ border: "2px solid red" }}>
        <SampleComponent />
      </BannerWrapper>
    );

    const component = screen.queryByTestId("banner-wrapper-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
