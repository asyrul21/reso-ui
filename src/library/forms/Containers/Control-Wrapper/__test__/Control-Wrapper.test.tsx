import React from "react";
import { render, screen } from "@testing-library/react";
import * as FlexModule from "../../../../components/Containers/Flex/Flex";
import { ControlWrapper } from "../Control-Wrapper";
import {
  createComponentStyles,
  withSpacingsProps,
} from "../../../../utils/styles";

const SampleChildComponent = () => {
  return (
    <>
      <label data-testid="form-input-container-input" />
      <input data-testid="form-input-container-label" />
    </>
  );
};

describe("Form Input Container Unit Tests", () => {
  beforeEach(() => {
    jest.spyOn(FlexModule, "Flex").mockImplementation((props) => {
      const { rootClassName, rootStyles, children, mb, direction } = props;
      const flexMockClasses = createComponentStyles(
        withSpacingsProps(
          {
            [rootClassName]: true,
            [`test-flex-direction-${direction}`]: true,
          },
          { mb }
        )
      );

      return (
        <div
          data-testid="form-input-container-root"
          className={flexMockClasses}
          style={rootStyles}
        >
          {children}
        </div>
      );
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should render itself and children without error", () => {
    const { debug } = render(
      <ControlWrapper>
        <SampleChildComponent />
      </ControlWrapper>
    );

    // debug();
    const component = screen.queryByTestId("form-input-container-root");
    expect(component).toBeInTheDocument();

    const inputComponent = screen.queryByTestId("form-input-container-input");
    expect(inputComponent).toBeInTheDocument();

    const labelComponent = screen.queryByTestId("form-input-container-label");
    expect(labelComponent).toBeInTheDocument();
  });

  test("should apply custom className when provided as prop", () => {
    const { debug } = render(
      <ControlWrapper rootClassName="sample_class">
        <SampleChildComponent />
      </ControlWrapper>
    );

    // debug();
    const component = screen.queryByTestId("form-input-container-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <ControlWrapper rootStyles={{ border: "2px solid red" }}>
        <SampleChildComponent />
      </ControlWrapper>
    );

    const component = screen.queryByTestId("form-input-container-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply margin bottom spacings prop by default", () => {
    const { debug } = render(
      <ControlWrapper>
        <SampleChildComponent />
      </ControlWrapper>
    );

    // debug();
    const component = screen.queryByTestId("form-input-container-root");
    expect(component).toHaveClass("spacing-mb-4");
  });

  test("should apply Flex direction prop when layout is column", () => {
    const { debug } = render(
      <ControlWrapper layout="column">
        <SampleChildComponent />
      </ControlWrapper>
    );

    // debug();
    const component = screen.queryByTestId("form-input-container-root");
    expect(component).toHaveClass("test-flex-direction-column");
  });
});
