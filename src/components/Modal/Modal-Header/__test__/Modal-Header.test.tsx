import React from "react";
import { render, screen } from "@testing-library/react";
import { ModalHeader } from "@components/Modal/Modal-Header";
import * as ButtonModule from "@components/Buttons/Button/Button";

describe("Modal Header Component Unit Tests", () => {
  beforeEach(() => {
    jest.spyOn(ButtonModule, "Button").mockImplementation((props) => {
      const { text, onClick } = props;

      return (
        <button onClick={onClick} data-testid="modal-header-button-mock">
          {text}
        </button>
      );
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should render itself without error", () => {
    const { debug } = render(
      // tslint:disable-next-line: no-empty
      <ModalHeader onClose={() => {}} title="sample title" />
    );

    // debug();
    const component = screen.queryByTestId("modal-header-root");
    expect(component).toBeInTheDocument();

    const title = screen.queryByTestId("modal-header-title");
    expect(title).toHaveTextContent("sample title");
  });

  test("should apply custom className when provided as prop", () => {
    render(
      <ModalHeader
        // tslint:disable-next-line: no-empty
        onClose={() => {}}
        title="sample title"
        rootClassName="sample_class"
      />
    );

    const component = screen.queryByTestId("modal-header-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <ModalHeader
        // tslint:disable-next-line: no-empty
        onClose={() => {}}
        title="sample title"
        rootStyles={{ border: "2px solid red" }}
      />
    );

    const component = screen.queryByTestId("modal-header-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should execute onClose when provided as prop and Close button clicked", () => {
    const onCloseMock = jest.fn();
    render(<ModalHeader onClose={onCloseMock} title="sample title" />);

    const closeButton = screen.queryByTestId("modal-header-button-mock");
    closeButton.click();

    expect(onCloseMock).toHaveBeenCalled();
  });
});
