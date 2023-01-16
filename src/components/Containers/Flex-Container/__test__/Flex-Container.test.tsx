import React from "react";
import { render, screen } from "@testing-library/react";
import { FlexContainer } from "@components/Containers/Flex-Container";

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
      <FlexContainer>
        <SampleComponent />
      </FlexContainer>
    );

    // debug();
    const component = screen.queryByTestId("flex-container-root");
    expect(component).toBeTruthy();

    const child = screen.queryByTestId("flex-container-child-test");
    expect(child).toBeTruthy();
  });

  test("should have class default classes when no props are passed", () => {
    render(
      <FlexContainer>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex-row");
    expect(component).toHaveClass("flex-justify-space-between");
    expect(component).toHaveClass("flex-align-center");
    expect(component).not.toHaveClass("flex-wrap");
  });

  test("should set class [flex-column] when passed as prop", () => {
    render(
      <FlexContainer direction="column">
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex-column");
  });

  test("should set class [flex-justify-start] when passed as prop", () => {
    render(
      <FlexContainer justify="start">
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex-justify-start");
  });

  test("should set class [flex-align-end] when passed as prop", () => {
    render(
      <FlexContainer align="end">
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex-align-end");
  });

  test("should have class [flex-wrap] when passed as prop", () => {
    render(
      <FlexContainer wrap>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("flex-wrap");
  });

  test("should have class [width_full] when passed as prop", () => {
    render(
      <FlexContainer fullWidth>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("width_full");
  });

  test("should have class [width_fit_content] when passed as prop", () => {
    render(
      <FlexContainer widthFitContent>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("width_fit_content");
  });

  test("should have custom className when passed as prop", () => {
    render(
      <FlexContainer rootClassName="test_custom_className">
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("test_custom_className");
  });
});

describe("Flex Container Margins Unit Tests", () => {
  test("should have class [spacing-ma-0] when passed as prop", () => {
    render(
      <FlexContainer ma={0}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-ma-0");
  });

  test("should have class [spacing-ma-5] when passed as prop", () => {
    render(
      <FlexContainer ma={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-ma-5");
  });

  test("should have class [spacing-mv-5] when passed as prop", () => {
    render(
      <FlexContainer mv={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-mv-5");
  });

  test("should have class [spacing-mh-5] when passed as prop", () => {
    render(
      <FlexContainer mh={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-mh-5");
  });

  test("should have class [spacing-mt-5] when passed as prop", () => {
    render(
      <FlexContainer mt={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-mt-5");
  });

  test("should have class [spacing-mb-5] when passed as prop", () => {
    render(
      <FlexContainer mb={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-mb-5");
  });

  test("should have class [spacing-mr-5] when passed as prop", () => {
    render(
      <FlexContainer mr={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-mr-5");
  });

  test("should have class [spacing-ml-5] when passed as prop", () => {
    render(
      <FlexContainer ml={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-ml-5");
  });
});

describe("Flex Container Paddings Unit Tests", () => {
  test("should have class [spacing-pa-0] when passed as prop", () => {
    render(
      <FlexContainer pa={0}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pa-0");
  });

  test("should have class [spacing-pa-5] when passed as prop", () => {
    render(
      <FlexContainer pa={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pa-5");
  });

  test("should have class [spacing-pv-5] when passed as prop", () => {
    render(
      <FlexContainer pv={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pv-5");
  });

  test("should have class [spacing-ph-5] when passed as prop", () => {
    render(
      <FlexContainer ph={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-ph-5");
  });

  test("should have class [spacing-pt-5] when passed as prop", () => {
    render(
      <FlexContainer pt={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pt-5");
  });

  test("should have class [spacing-pb-5] when passed as prop", () => {
    render(
      <FlexContainer pb={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pb-5");
  });

  test("should have class [spacing-pr-5] when passed as prop", () => {
    render(
      <FlexContainer pr={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pr-5");
  });

  test("should have class [spacing-pl-5] when passed as prop", () => {
    render(
      <FlexContainer pl={5}>
        <SampleComponent />
      </FlexContainer>
    );

    const component = screen.queryByTestId("flex-container-root");
    expect(component).toHaveClass("spacing-pl-5");
  });
});
