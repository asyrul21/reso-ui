import React from "react";
import { render, screen } from "@testing-library/react";
import { ModalBody } from "../Modal-Body";

const SampleComponent = () => {
  return (
    <div data-testid="modal-body-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Modal Body Component Unit Tests", () => {
  test("should render itself and children without error", () => {
    const { debug } = render(
      <ModalBody>
        <SampleComponent />
      </ModalBody>
    );

    // debug();
    const component = screen.queryByTestId("modal-body-root");
    expect(component).toBeInTheDocument();

    const child = screen.queryByTestId("modal-body-child-test");
    expect(child).toBeInTheDocument();
  });

  test("should apply custom className when provided as prop", () => {
    render(
      <ModalBody rootClassName="sample_class">
        <SampleComponent />
      </ModalBody>
    );

    const component = screen.queryByTestId("modal-body-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <ModalBody rootStyles={{ border: "2px solid red" }}>
        <SampleComponent />
      </ModalBody>
    );

    const component = screen.queryByTestId("modal-body-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply paddings classes when provided as prop", () => {
    render(
      <ModalBody pa={5}>
        <SampleComponent />
      </ModalBody>
    );

    const component = screen.queryByTestId("modal-body-root");
    expect(component).toHaveClass("spacing-pa-5");
  });
});
