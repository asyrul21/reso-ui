import React from "react";
import { render, screen } from "@testing-library/react";
import { Modal } from "@components/Modal";

const SampleComponent = () => {
  return (
    <div data-testid="modal-child-test">
      <p>This is a sample component</p>
    </div>
  );
};

describe("Modal Container Unit Tests", () => {
  test("should render itself and children when isOpen is true without error", () => {
    const { debug } = render(
      <Modal isOpen={true}>
        <SampleComponent />
      </Modal>
    );

    // debug();
    const component = screen.queryByTestId("modal-container-root");
    expect(component).toBeInTheDocument();

    const child = screen.queryByTestId("modal-child-test");
    expect(child).toBeInTheDocument();
  });

  test("should apply correct container rootClassName when provided as prop", () => {
    const { debug } = render(
      <Modal isOpen={true} rootClassName="sample_class">
        <SampleComponent />
      </Modal>
    );

    // debug();
    const component = screen.queryByTestId("modal-container-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should have default light theme when theme not provided as prop", () => {
    const { debug } = render(
      <Modal isOpen={true}>
        <SampleComponent />
      </Modal>
    );

    // debug();
    const component = screen.queryByTestId("modal-container-root");
    expect(component).toHaveClass("modal_container_theme_light");
  });

  test("should have dark theme when provided as prop", () => {
    const { debug } = render(
      <Modal isOpen={true} theme="dark">
        <SampleComponent />
      </Modal>
    );

    // debug();
    const component = screen.queryByTestId("modal-container-root");
    expect(component).toHaveClass("modal_container_theme_dark");
  });

  test("should have correct z-index layer style on backdrop when provided as prop", () => {
    const { debug } = render(
      <Modal isOpen={true} layer={2}>
        <SampleComponent />
      </Modal>
    );

    // debug();
    const component = screen.queryByTestId("modal-backdrop");
    expect(component).toHaveStyle("z-index: 12");
  });

  test("should have correct z-index layer style on modal-container when provided as prop", () => {
    const { debug } = render(
      <Modal isOpen={true} layer={2}>
        <SampleComponent />
      </Modal>
    );

    // debug();
    const component = screen.queryByTestId("modal-container-root");
    expect(component).toHaveStyle("z-index: 13");
  });
});
