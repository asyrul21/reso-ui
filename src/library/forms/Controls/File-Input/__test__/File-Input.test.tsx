import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { FileInput } from "../";

describe("Text Input Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<FileInput id="test" onChange={jest.fn()} />);

    // debug();
    const component = screen.queryByTestId("file-input-test-root");
    expect(component).toBeInTheDocument();
  });

  test("should show value in text input if provided as prop", () => {
    const { debug } = render(
      <FileInput id="test" onChange={jest.fn()} value="test/value.png" />
    );

    // debug();
    const component = screen.queryByTestId("file-input-text-input");
    expect(component).toHaveValue("test/value.png");
  });

  test("should not show text input if hideTextInputField is true", () => {
    const { debug } = render(
      <FileInput
        id="test"
        onChange={jest.fn()}
        value="test/value.png"
        hideTextInputField
      />
    );

    // debug();
    const component = screen.queryByTestId("file-input-text-input");
    expect(component).not.toBeTruthy();
  });

  test("should execute onChange when a file has been selected", () => {
    const onChangeMock = jest.fn();
    const FileMock = new File(["test content"], "testfile.png", {
      type: "image/png",
    });

    const { debug } = render(
      <FileInput
        id="test"
        onChange={onChangeMock}
        value="test/value.png"
        _resoui_fileinput_input_styles={{ display: "block" }}
      />
    );

    // debug();
    const component = screen.queryByTestId("file-input-input");

    act(() => {
      fireEvent.change(component, {
        target: { files: [FileMock] },
      });
    });

    expect(onChangeMock).toHaveBeenCalledWith(FileMock);
  });

  test("should NOT execute onReset if clicked on reset button but it is disabled", () => {
    const onResetMock = jest.fn();
    const { debug } = render(
      <FileInput
        id="test"
        onChange={jest.fn()}
        error="test error"
        onReset={onResetMock}
      />
    );

    // debug();
    const component = screen.queryByTestId("file-input-reset-button");
    expect(component).toBeInTheDocument();
    act(() => {
      component.click();
    });

    expect(onResetMock).not.toHaveBeenCalled();
  });

  test("should execute onReset if clicked on reset button and not disabled", () => {
    const onResetMock = jest.fn();
    const { debug } = render(
      <FileInput
        id="test"
        onChange={jest.fn()}
        error="test error"
        onReset={onResetMock}
        value="/test/path"
      />
    );

    // debug();
    const component = screen.queryByTestId("file-input-reset-button");
    expect(component).toBeInTheDocument();
    act(() => {
      component.click();
    });

    expect(onResetMock).toHaveBeenCalled();
  });

  test("should show error if provided as prop", () => {
    const { debug } = render(
      <FileInput id="test" onChange={jest.fn()} error="test error" />
    );

    // debug();
    const component = screen.queryByTestId("file-input-test-error");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("test error");
  });
});
