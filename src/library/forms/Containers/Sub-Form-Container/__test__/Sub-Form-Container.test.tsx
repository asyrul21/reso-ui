import React from "react";
import { render, screen } from "@testing-library/react";
import { SubFormContainer } from "@forms/Containers";

const SampleSubFormChildComponent = () => {
  return <input data-testid="sub-form-input" />;
};

describe("Sub Form Container Unit Tests", () => {
  test("should render itself and children without error", () => {
    const { debug } = render(
      <SubFormContainer title="Test Title">
        <SampleSubFormChildComponent />
      </SubFormContainer>
    );

    // debug();
    const component = screen.queryByTestId("subForm-root");
    expect(component).toBeInTheDocument();

    const inputComponent = screen.queryByTestId("sub-form-input");
    expect(inputComponent).toBeInTheDocument();
  });

  test("should apply custom container className when provided as prop", () => {
    const { debug } = render(
      <SubFormContainer title="Test Title" rootClassName="sample_class">
        <SampleSubFormChildComponent />
      </SubFormContainer>
    );

    // debug();
    const component = screen.queryByTestId("subForm-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom container styles when provided as prop", () => {
    render(
      <SubFormContainer
        title="Test Title"
        rootStyles={{ border: "2px solid red" }}
      >
        <SampleSubFormChildComponent />
      </SubFormContainer>
    );

    const component = screen.queryByTestId("subForm-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should render title correctly when provided as prop", () => {
    const { debug } = render(
      <SubFormContainer title="Test Title">
        <SampleSubFormChildComponent />
      </SubFormContainer>
    );

    // debug();
    const header = screen.queryByTestId("subForm-header");
    expect(header).toHaveTextContent("Test Title");
  });

  test("should apply custom header className when provided as prop", () => {
    const { debug } = render(
      <SubFormContainer title="Test Title" headerClassName="sample_class">
        <SampleSubFormChildComponent />
      </SubFormContainer>
    );

    // debug();
    const component = screen.queryByTestId("subForm-header");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom header styles when provided as prop", () => {
    render(
      <SubFormContainer
        title="Test Title"
        headerStyles={{ border: "2px solid red" }}
      >
        <SampleSubFormChildComponent />
      </SubFormContainer>
    );

    const component = screen.queryByTestId("subForm-header");
    expect(component).toHaveStyle("border: 2px solid red");
  });
});
