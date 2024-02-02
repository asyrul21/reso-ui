import React from "react";
import { render, screen } from "@testing-library/react";
import { Icon } from "../Icon";
import { HomeIcon } from "../../../icons";

describe("Icon Container Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<Icon SvgIcon={HomeIcon} />);

    // debug();
    const componentContainer = screen.queryByTestId("icon-root");
    const componentSvg = screen.queryByTestId("icon-svg-icon");

    expect(componentContainer).toBeInTheDocument();
    expect(componentContainer).toContainElement(componentSvg);
  });

  test("should apply default className when provided as prop", () => {
    const { debug } = render(<Icon SvgIcon={HomeIcon} />);

    const component = screen.queryByTestId("icon-root");
    expect(component).toHaveClass("icon_container");
  });

  test("should apply custom className when provided as prop", () => {
    const { debug } = render(
      <Icon SvgIcon={HomeIcon} rootClassName="sample_class" />
    );

    const component = screen.queryByTestId("icon-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    const { debug } = render(
      <Icon SvgIcon={HomeIcon} rootStyles={{ border: "2px solid red" }} />
    );

    const component = screen.queryByTestId("icon-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply margin classes when provided as prop", () => {
    const { debug } = render(<Icon SvgIcon={HomeIcon} ma={5} />);

    const component = screen.queryByTestId("icon-root");
    expect(component).toHaveClass("spacing-ma-5");
  });

  test("should apply inline classes when provided as prop", () => {
    const { debug } = render(<Icon SvgIcon={HomeIcon} inline />);

    const component = screen.queryByTestId("icon-root");
    expect(component).toHaveClass("icon_container_inline");
  });
});
