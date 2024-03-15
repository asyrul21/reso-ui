import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { DropdownSelect } from "../";
import * as DropdownOptionModule from "../../Dropdown-Option/Dropdown-Option";

describe("Dropdown Select Component Unit Tests", () => {
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

  beforeEach(() => {
    jest
      .spyOn(DropdownOptionModule, "DropdownOption")
      .mockImplementation(({ onClick, option, testKey }) => {
        return (
          <li
            data-testid={`dropdown-select-mock-dropdown-option-${testKey}`}
            onClick={() => {
              onClick();
            }}
          >
            {option}
          </li>
        );
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("as default", () => {
    test("should render itself without error, with correct value, and not show options container by default", () => {
      const { debug } = render(<DropdownSelect value="Option A" />);

      // debug();
      const component = screen.queryByTestId("dropdown-select-root");
      expect(component).toBeInTheDocument();
      expect(component).not.toHaveClass("dropdown_header_opened");

      const headerComponent = screen.queryByTestId("dropdown-select-header");
      expect(headerComponent).toHaveTextContent("Option A");

      const optionsContainer = screen.queryByTestId(
        "dropdown-select-options-container"
      );
      expect(optionsContainer).not.toHaveClass("dropdown_options_show");
    });

    test("should show options container when header is clicked", () => {
      const { debug } = render(<DropdownSelect />);

      // debug();
      const component = screen.queryByTestId("dropdown-select-header");
      expect(component).toBeInTheDocument();

      act(() => {
        component.click();
      });

      expect(component).toHaveClass("dropdown_header_opened");

      const optionsContainer = screen.queryByTestId(
        "dropdown-select-options-container"
      );
      expect(optionsContainer).toHaveClass("dropdown_options_show");
    });

    test("should NOT show options container when header is clicked if disabled", () => {
      const { debug } = render(<DropdownSelect disabled />);

      // debug();
      const component = screen.queryByTestId("dropdown-select-header");
      act(() => {
        component.click();
      });

      expect(component).not.toHaveClass("dropdown_header_opened");

      const optionsContainer = screen.queryByTestId(
        "dropdown-select-options-container"
      );
      expect(optionsContainer).not.toHaveClass("dropdown_options_show");
    });

    test("should render error if error is not null", () => {
      const { debug } = render(<DropdownSelect error={"Test error message"} />);

      // debug();
      const componentError = screen.queryByTestId("dropdown-select-error");
      expect(componentError).toBeInTheDocument();
      expect(componentError).toHaveTextContent("Test error message");
    });

    test("should render children component correctly", () => {
      const SampleComponent = () => {
        return (
          <div data-testid="dropdown-select-test-child">Test component</div>
        );
      };

      const { debug } = render(
        <DropdownSelect>
          <SampleComponent />
        </DropdownSelect>
      );

      // debug();
      const childComponent = screen.queryByTestId("dropdown-select-test-child");
      expect(childComponent).toBeInTheDocument();
    });

    test("should render options correctly", () => {
      const { debug } = render(<DropdownSelect options={TestOptions} />);

      // debug();
      const option1 = screen.queryByTestId(
        "dropdown-select-mock-dropdown-option-1"
      );
      expect(option1).toBeInTheDocument();
      expect(option1).toHaveTextContent(TestOptions[0].value);

      const option2 = screen.queryByTestId(
        "dropdown-select-mock-dropdown-option-2"
      );
      expect(option2).toBeInTheDocument();
      expect(option2).toHaveTextContent(TestOptions[1].value);
    });

    test("should execute onChange correctly option is clicked", () => {
      const onChangeMock = jest.fn();
      const { debug } = render(
        <DropdownSelect options={TestOptions} onChange={onChangeMock} />
      );

      const option2 = screen.queryByTestId(
        "dropdown-select-mock-dropdown-option-2"
      );
      expect(option2).toBeInTheDocument();
      act(() => {
        option2.click();
      });

      expect(onChangeMock).toHaveBeenCalledWith(TestOptions[1].key);
    });
  });

  describe("as NavItem", () => {
    test("should render itself as navItem without error", () => {
      const { debug } = render(<DropdownSelect asNavItem />);

      // debug();
      const headerComponent = screen.queryByTestId("dropdown-select-header");
      expect(headerComponent).toBeInTheDocument();
      expect(headerComponent).toHaveClass("dropdown_header_navItem");

      const optionsContainer = screen.queryByTestId(
        "dropdown-select-options-container"
      );
      expect(optionsContainer).toHaveClass(
        "dropdown_options_container_navItem"
      );
    });

    test("should show options container when header is hovered", () => {
      const { debug } = render(<DropdownSelect asNavItem expandOn="hover" />);

      // debug();
      const component = screen.queryByTestId("dropdown-select-header");
      expect(component).toBeInTheDocument();

      act(() => {
        fireEvent.mouseEnter(component);
      });

      // we dont want border changes
      expect(component).not.toHaveClass("dropdown_header_opened");

      const optionsContainer = screen.queryByTestId(
        "dropdown-select-options-container"
      );
      expect(optionsContainer).toHaveClass("dropdown_options_show");
    });
  });
});
