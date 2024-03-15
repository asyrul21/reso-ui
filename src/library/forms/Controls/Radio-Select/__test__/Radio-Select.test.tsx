import React from "react";
import { act, render, screen } from "@testing-library/react";
import { RadioSelect } from "../";

describe("Radio Select Component Unit Tests", () => {
  const TestName = "test_radioselect";
  const TestOptions = [
    {
      key: "1",
      value: "Apple",
    },
    {
      key: "2",
      value: "Banana",
    },
  ];

  test("should render itself without error, with correct labels and values", () => {
    const { debug } = render(
      <RadioSelect name={TestName} options={TestOptions} />
    );

    // debug();
    const component = screen.queryByTestId("radioselect-root");
    expect(component).toBeInTheDocument();

    const radioComponent1 = screen.queryByTestId(
      `resoui_radioselect_${TestName}_input_1`
    );
    expect(radioComponent1).toBeInTheDocument();

    const radioLabel1 = screen.queryByTestId(`radioselect-label-1`);
    expect(radioLabel1).toBeInTheDocument();
    expect(radioLabel1).toHaveTextContent(TestOptions[0].value);

    const radioComponent2 = screen.queryByTestId(
      `resoui_radioselect_${TestName}_input_2`
    );
    expect(radioComponent2).toBeInTheDocument();

    const radioLabel2 = screen.queryByTestId(`radioselect-label-2`);
    expect(radioLabel2).toBeInTheDocument();
    expect(radioLabel2).toHaveTextContent(TestOptions[1].value);
  });

  test("should render checked radio correctly", () => {
    const { debug } = render(
      <RadioSelect
        name={TestName}
        options={TestOptions}
        value="Option A"
        selectedKey="2"
      />
    );

    // debug();
    const component = screen.queryByTestId("radioselect-root");
    expect(component).toBeInTheDocument();

    const radioComponent1 = screen.queryByTestId(
      `resoui_radioselect_${TestName}_input_1`
    );
    expect(radioComponent1).toBeInTheDocument();
    expect((radioComponent1 as HTMLInputElement).checked).toEqual(false);

    const radioComponent2 = screen.queryByTestId(
      `resoui_radioselect_${TestName}_input_2`
    );
    expect(radioComponent2).toBeInTheDocument();
    expect((radioComponent2 as HTMLInputElement).checked).toEqual(true);
  });

  test("should execute onChange correctly correctly", () => {
    const onChangeMock = jest.fn();
    const { debug } = render(
      <RadioSelect
        name={TestName}
        options={TestOptions}
        onChange={onChangeMock}
      />
    );

    // debug();
    const component = screen.queryByTestId("radioselect-root");
    expect(component).toBeInTheDocument();

    const radioComponent1 = screen.queryByTestId(
      `resoui_radioselect_${TestName}_input_1`
    );
    act(() => {
      radioComponent1.click();
    });

    expect(onChangeMock).toHaveBeenCalledWith("1");
  });

  test("should show error if provided as prop", async () => {
    const { debug } = render(
      <RadioSelect name={TestName} options={TestOptions} error="Test Error" />
    );

    // debug();
    const component = screen.queryByTestId("radioselect-error");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("Test Error");
  });
});
