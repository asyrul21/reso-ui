import React from "react";
import { render, screen } from "@testing-library/react";
import { ExternalLinks } from "../External-Links";

const sampleLinks = [
  {
    link: "#",
    text: "Test Link 1",
  },
  {
    link: "#",
    text: "Test Link 2",
  },
];

describe("External Links Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<ExternalLinks links={sampleLinks} />);

    // debug();
    const component = screen.queryByTestId("external-links-root");
    expect(component).toBeInTheDocument();
  });

  test("should render link items correctly", () => {
    const { debug } = render(<ExternalLinks links={sampleLinks} />);

    // debug();
    const component = screen.queryByTestId("external-links-root");
    const links = component.childNodes;
    expect(links.length).toEqual(2);
    expect(links[0]).toHaveTextContent(sampleLinks[0].text);
    expect(links[1]).toHaveTextContent(sampleLinks[1].text);
  });

  test("should apply custom className when provided as prop", () => {
    render(<ExternalLinks links={sampleLinks} rootClassName="sample_class" />);

    const component = screen.queryByTestId("external-links-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply custom styles when provided as prop", () => {
    render(
      <ExternalLinks
        links={sampleLinks}
        rootStyles={{ border: "2px solid red" }}
      />
    );

    const component = screen.queryByTestId("external-links-root");
    expect(component).toHaveStyle("border: 2px solid red");
  });

  test("should apply custom link className when provided as prop", () => {
    render(
      <ExternalLinks links={sampleLinks} linkClassName="sample_class123" />
    );

    const component = screen.queryByTestId("external-links-root");
    const links = component.childNodes;

    expect(links[0].firstChild).toHaveClass("sample_class123");
    expect(links[1].firstChild).toHaveClass("sample_class123");
  });

  test("should apply custom link styles when provided as prop", () => {
    render(
      <ExternalLinks
        links={sampleLinks}
        linkStyles={{ border: "2px solid red" }}
      />
    );

    const component = screen.queryByTestId("external-links-root");
    const links = component.childNodes;

    expect(links[0].firstChild).toHaveStyle("border: 2px solid red");
    expect(links[1].firstChild).toHaveStyle("border: 2px solid red");
  });
});
