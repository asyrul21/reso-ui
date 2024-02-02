import React from "react";
import { render, screen } from "@testing-library/react";
import { Flex } from "../Flex";

const SampleComponent = () => {
  return (
    <div data-testid="flex-container-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Flex Container Component Unit Tests", () => {
  const defaultProps = {};

  test("should render itself and children without error", () => {
    const { debug } = render(
      <Flex>
        <SampleComponent />
      </Flex>
    );

    // debug();
    const component = screen.queryByTestId("flex-container-root");
    expect(component).toBeTruthy();

    const child = screen.queryByTestId("flex-container-child-test");
    expect(child).toBeTruthy();
  });

  test("should have class default classes when no props are passed", () => {
    render(
      <Flex>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex_container");
    expect(component).toHaveClass("flex_row");
    expect(component).toHaveClass("flex_justify_space-between");
    expect(component).toHaveClass("flex_align_center");
    expect(component).toHaveClass("flex_shrink");
    expect(component).not.toHaveClass("flex_wrap");
    expect(component).not.toHaveClass("flex_grow");
  });

  test("should set class [flex_column] when passed as prop", () => {
    render(
      <Flex direction="column">
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex_column");
  });

  test("should set class [flex_justify_start] when passed as prop", () => {
    render(
      <Flex justify="start">
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex_justify_start");
  });

  test("should set class [flex_align_end] when passed as prop", () => {
    render(
      <Flex align="end">
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex_align_end");
  });

  test("should have class [flex_wrap] when passed as prop", () => {
    render(
      <Flex wrap>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex_wrap");
  });

  test("should set class [flex_no_shrink] when passed as prop", () => {
    render(
      <Flex shrink={false}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex_no_shrink");
  });

  test("should set class [flex_grow] when passed as prop", () => {
    render(
      <Flex grow={true}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex_grow");
  });

  test("should have class [width_full] when passed as prop", () => {
    render(
      <Flex fullWidth>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("width_full");
  });

  test("should have class [width_fit_content] when passed as prop", () => {
    render(
      <Flex widthFitContent>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("width_fit_content");
  });

  test("should have custom className when passed as prop", () => {
    render(
      <Flex rootClassName="test_custom_className">
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("test_custom_className");
  });

  test("should set styles [flex-basis] when passed auto as prop", () => {
    render(
      <Flex basis={"auto"}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveStyle("flex-basis: auto");
  });

  test("should set styles [flex-basis] when passed string value as prop", () => {
    render(
      <Flex basis={"200px"}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveStyle("flex-basis: 200px");
  });

  test("should set styles [flex-basis] when passed falsy value as prop", () => {
    render(
      <Flex basis={false}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveStyle("flex-basis: 0");
  });
});

describe("Flex Container Margins Unit Tests", () => {
  test("should have class [spacing-ma-0] when passed as prop", () => {
    render(
      <Flex ma={0}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-ma-0");
  });

  test("should have class [spacing-ma-5] when passed as prop", () => {
    render(
      <Flex ma={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-ma-5");
  });

  test("should have class [spacing-mv-5] when passed as prop", () => {
    render(
      <Flex mv={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-mv-5");
  });

  test("should have class [spacing-mh-5] when passed as prop", () => {
    render(
      <Flex mh={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-mh-5");
  });

  test("should have class [spacing-mt-5] when passed as prop", () => {
    render(
      <Flex mt={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-mt-5");
  });

  test("should have class [spacing-mb-5] when passed as prop", () => {
    render(
      <Flex mb={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-mb-5");
  });

  test("should have class [spacing-mr-5] when passed as prop", () => {
    render(
      <Flex mr={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-mr-5");
  });

  test("should have class [spacing-ml-5] when passed as prop", () => {
    render(
      <Flex ml={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-ml-5");
  });
});

describe("Flex Container Paddings Unit Tests", () => {
  test("should have class [spacing-pa-0] when passed as prop", () => {
    render(
      <Flex pa={0}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pa-0");
  });

  test("should have class [spacing-pa-5] when passed as prop", () => {
    render(
      <Flex pa={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pa-5");
  });

  test("should have class [spacing-pv-5] when passed as prop", () => {
    render(
      <Flex pv={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pv-5");
  });

  test("should have class [spacing-ph-5] when passed as prop", () => {
    render(
      <Flex ph={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-ph-5");
  });

  test("should have class [spacing-pt-5] when passed as prop", () => {
    render(
      <Flex pt={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pt-5");
  });

  test("should have class [spacing-pb-5] when passed as prop", () => {
    render(
      <Flex pb={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pb-5");
  });

  test("should have class [spacing-pr-5] when passed as prop", () => {
    render(
      <Flex pr={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pr-5");
  });

  test("should have class [spacing-pl-5] when passed as prop", () => {
    render(
      <Flex pl={5}>
        <SampleComponent />
      </Flex>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pl-5");
  });
});
