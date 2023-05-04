import React from "react";
import { render, screen } from "@testing-library/react";
import { Dialog } from "@components/Dialog";

// import from index does not work for jest.spyOn
import * as ModalModule from "@components/Modal/Modal-Container/Modal-Container";
import * as ModalHeaderModule from "@components/Modal/Modal-Header/Modal-Header";
import * as ModalBodyModule from "@components/Modal/Modal-Body/Modal-Body";
import * as ButtonModule from "@components/Buttons/Button/Button";

describe("Dialog Modal Component Unit Tests", () => {
  beforeEach(() => {
    jest.spyOn(ModalModule, "Modal").mockImplementation((props) => {
      const { rootClassName, rootStyles, children } = props;
      return (
        <div
          data-testid="dialog-modal-container-mock"
          className={rootClassName}
          style={rootStyles}
        >
          {children}
        </div>
      );
    });

    jest.spyOn(ModalHeaderModule, "ModalHeader").mockImplementation((props) => {
      const { rootClassName, rootStyles, title } = props;
      return (
        <div
          data-testid="dialog-modal-header-mock"
          className={rootClassName}
          style={rootStyles}
        >
          {title}
        </div>
      );
    });

    jest.spyOn(ModalBodyModule, "ModalBody").mockImplementation((props) => {
      const { rootClassName, rootStyles, children } = props;
      return (
        <div
          data-testid="dialog-modal-body-mock"
          className={rootClassName}
          style={rootStyles}
        >
          {children}
        </div>
      );
    });

    jest.spyOn(ButtonModule, "Button").mockImplementation((props) => {
      const { rootClassName, rootStyles, onClick, text } = props;
      return (
        <button
          data-testid="dialog-button-mock"
          className={rootClassName}
          style={rootStyles}
          onClick={onClick}
        >
          {text}
        </button>
      );
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should render itself without error", () => {
    const { debug } = render(<Dialog isOpen={true} />);

    // debug();
    const component = screen.queryByTestId("dialog-modal-container-mock");
    expect(component).toBeInTheDocument();
  });

  test("should render title correctly when provided as prop", () => {
    const { debug } = render(<Dialog isOpen={true} title="testTitle" />);

    // debug();
    const component = screen.queryByTestId("dialog-modal-header-mock");
    expect(component).toHaveTextContent("testTitle");
  });

  test("should render header correctly when provided as prop", () => {
    const { debug } = render(
      <Dialog isOpen={true} header="this is a test header" />
    );

    // debug();
    const component = screen.queryByTestId("dialog-header-text");
    expect(component).toHaveTextContent("this is a test header");
  });

  test("should render description correctly when provided as prop", () => {
    const { debug } = render(
      <Dialog isOpen={true} description="this is a test description" />
    );

    // debug();
    const component = screen.queryByTestId("dialog-description-text");
    expect(component).toHaveTextContent("this is a test description");
  });

  test("should apply custom className when provided as prop", () => {
    const { debug } = render(
      <Dialog isOpen={true} rootClassName="sampleClassName" />
    );

    // debug();
    const component = screen.queryByTestId("dialog-modal-container-mock");
    expect(component).toHaveClass("sampleClassName");
  });

  test("should apply custom styles when provided as prop", () => {
    const { debug } = render(
      <Dialog isOpen={true} rootStyles={{ border: `2px solid red` }} />
    );

    const component = screen.queryByTestId("dialog-modal-container-mock");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  describe("Yes/No Dialog", () => {
    test("should render yes/no dialog type by default", () => {
      const { debug } = render(<Dialog isOpen={true} />);

      //   debug();
      const buttons = screen.queryAllByTestId("dialog-button-mock");
      expect(buttons.length).toEqual(2);
    });

    test("should render yes/no buttons with custom texts", () => {
      const { debug } = render(
        <Dialog isOpen={true} yesText="yesTest" noText="noTest" />
      );

      //   debug();
      const buttons = screen.queryAllByTestId("dialog-button-mock");
      const noButton = buttons[0];
      const yesButton = buttons[1];

      expect(noButton).toHaveTextContent("noTest");
      expect(yesButton).toHaveTextContent("yesTest");
    });

    test("should execute onClickNo when No is clicked", () => {
      const onClickMock = jest.fn();

      const { debug } = render(
        <Dialog isOpen={true} onClickNo={onClickMock} />
      );

      //   debug();
      const buttons = screen.queryAllByTestId("dialog-button-mock");
      const noButton = buttons[0];
      noButton.click();

      expect(onClickMock).toHaveBeenCalled();
    });

    test("should execute onClickYes when Yes is clicked", () => {
      const onClickMock = jest.fn();

      const { debug } = render(
        <Dialog isOpen={true} onClickYes={onClickMock} />
      );

      //   debug();
      const buttons = screen.queryAllByTestId("dialog-button-mock");
      const yesButton = buttons[1];
      yesButton.click();

      expect(onClickMock).toHaveBeenCalled();
    });
  });

  describe("OK Dialog", () => {
    test("should render ok dialog type when provided as prop", () => {
      const { debug } = render(<Dialog isOpen={true} type="ok" />);

      //   debug();
      const buttons = screen.queryAllByTestId("dialog-button-mock");
      expect(buttons.length).toEqual(1);
    });

    test("should render OK button with custom texts", () => {
      const { debug } = render(
        <Dialog isOpen={true} type="ok" okText="testOK" />
      );

      //   debug();
      const buttons = screen.queryAllByTestId("dialog-button-mock");
      const button = buttons[0];

      expect(button).toHaveTextContent("testOK");
    });

    test("should execute onClickOk when OK is clicked", () => {
      const onClickMock = jest.fn();

      const { debug } = render(
        <Dialog isOpen={true} onClickOk={onClickMock} type="ok" />
      );

      //   debug();
      const buttons = screen.queryAllByTestId("dialog-button-mock");
      const button = buttons[0];
      button.click();

      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
