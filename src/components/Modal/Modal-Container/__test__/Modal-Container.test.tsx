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
    const component = screen.queryByTestId("modal-container");
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
    const component = screen.queryByTestId("modal-container");
    expect(component).toHaveClass("sample_class");
  });

  test("should have default light theme when theme not provided as prop", () => {
    const { debug } = render(
      <Modal isOpen={true}>
        <SampleComponent />
      </Modal>
    );

    // debug();
    const component = screen.queryByTestId("modal-container");
    expect(component).toHaveClass("modal_container_theme_light");
  });

  test("should have dark theme when provided as prop", () => {
    const { debug } = render(
      <Modal isOpen={true} theme="dark">
        <SampleComponent />
      </Modal>
    );

    // debug();
    const component = screen.queryByTestId("modal-container");
    expect(component).toHaveClass("modal_container_theme_dark");
  });

  // test("should render correct title when provided as prop", () => {
  //   const sampleTitle = "test modal title";

  //   const { debug } = render(
  //     <Modal title={sampleTitle} isOpen={true}>
  //       <SampleComponent />
  //     </Modal>
  //   );

  //   // debug();
  //   const title = screen.queryByTestId("modal-title");
  //   expect(title).toHaveTextContent(sampleTitle);
  // });

  // test("should execute onClose when provided as prop", () => {
  //   const onCloseSpy = jest.fn();

  //   const { debug } = render(
  //     <Modal onClose={onCloseSpy} isOpen={true}>
  //       <SampleComponent />
  //     </Modal>
  //   );

  //   // debug();
  //   const closeButton = screen.queryByTestId("modal-close-button");
  //   closeButton.click();

  //   expect(onCloseSpy).toHaveBeenCalled();
  // });

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
    const component = screen.queryByTestId("modal-container");
    expect(component).toHaveStyle("z-index: 13");
  });
});
