import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MultiImageViewer } from "@components/Multi-Image-Viewer";

// import from index does not work for jest.spyOn
import * as ImageModule from "@components/Image/Image";
import * as HSC from "@components/Containers/Horizontal-Scroll-Container/Horizontal-Scroll-Container";

const sampleImageObjects = [
  {
    path: "image-example.jpg",
  },
  {
    path: "image-example-2.jpg",
  },
  {
    path: "image-example-3.jpg",
  },
  {
    path: "image-example.jpg",
  },
];

describe("Image Component Unit Tests", () => {
  beforeEach(() => {
    jest
      .spyOn(ImageModule, "Image")
      .mockImplementation(({ rootClassName, rootStyles, onClick, src }) => {
        return (
          <div className={rootClassName} style={rootStyles} onClick={onClick}>
            <img src={src} />
          </div>
        );
      });

    jest
      .spyOn(HSC, "HorizontalScrollContainer")
      .mockImplementation(({ rootClassName, rootStyles, children }) => {
        return (
          <div
            className={rootClassName}
            style={rootStyles}
            data-testid="multi-image-viewer-scrollbox"
          >
            {children}
          </div>
        );
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const defaultProps = {
    src: "image-example.jpg",
  };

  test("should render container and scrollbox without crashing", () => {
    const { debug } = render(
      <MultiImageViewer imageObjects={sampleImageObjects} />
    );

    // debug();
    const component = screen.queryByTestId("multi-image-viewer-root");
    expect(component).toBeInTheDocument();

    const scrollbox = screen.queryByTestId("multi-image-viewer-scrollbox");
    expect(scrollbox).toBeInTheDocument();
  });

  test("should render correct number of mini images", () => {
    const { debug } = render(
      <MultiImageViewer imageObjects={sampleImageObjects} />
    );

    const scrollbox = screen.queryByTestId("multi-image-viewer-scrollbox");
    const scrollBoxChildren = scrollbox.childNodes;
    // console.log(scrollBoxChildren);
    expect(scrollBoxChildren.length).toEqual(sampleImageObjects.length);
  });

  test("should apply selected styles on the correct mini image", () => {
    const { debug } = render(
      <MultiImageViewer imageObjects={sampleImageObjects} />
    );

    const scrollbox = screen.queryByTestId("multi-image-viewer-scrollbox");
    const scrollBoxChildren = scrollbox.childNodes;

    fireEvent.click(scrollBoxChildren[2]);

    const scrollboxUpdated = screen.queryByTestId(
      "multi-image-viewer-scrollbox"
    );
    const scrollBoxUpdatedChildren = scrollboxUpdated.childNodes;

    // debug();
    scrollBoxUpdatedChildren.forEach((e, idx) => {
      if (idx === 2) {
        expect(e).toHaveClass("multiImageViewer_miniImage_selected");
        expect(e).toHaveClass(
          "multiImageViewer_miniImage_selected_theme_light"
        );
      } else {
        expect(e).not.toHaveClass("multiImageViewer_miniImage_selected");
        expect(e).not.toHaveClass(
          "multiImageViewer_miniImage_selected_theme_light"
        );
      }
    });
  });

  test("should show correct image when the mini version is clicked", () => {
    const { debug } = render(
      <MultiImageViewer imageObjects={sampleImageObjects} />
    );

    const scrollbox = screen.queryByTestId("multi-image-viewer-scrollbox");
    const scrollBoxChildren = scrollbox.childNodes;

    fireEvent.click(scrollBoxChildren[2]);

    const container = screen.queryByTestId("multi-image-viewer-root");
    const mainImageDiv = container.firstChild;
    const mainImageImg = mainImageDiv.firstChild;

    expect(mainImageImg).toHaveAttribute("src", sampleImageObjects[2].path);
  });

  test("should call onClickImage when main image is clicked and provided as prop", () => {
    const onClickSpy = jest.fn();

    const { debug } = render(
      <MultiImageViewer
        imageObjects={sampleImageObjects}
        onClickImage={onClickSpy}
      />
    );

    const container = screen.queryByTestId("multi-image-viewer-root");
    const mainImageDiv = container.firstChild;

    fireEvent.click(mainImageDiv);

    expect(onClickSpy).toHaveBeenCalled();
  });

  test("should call getMiniImagePath when mini images are rendered and provided as prop", () => {
    const getMiniPathSpy = jest.fn().mockImplementation(() => "");

    const { debug } = render(
      <MultiImageViewer
        imageObjects={sampleImageObjects}
        getMiniImagePath={getMiniPathSpy}
      />
    );

    expect(getMiniPathSpy).toHaveBeenCalledTimes(sampleImageObjects.length);
  });

  test("should call setIndexOverride when the mini version is clicked and provided as prop", () => {
    const setIndexOverrideSpy = jest.fn();

    const { debug } = render(
      <MultiImageViewer
        imageObjects={sampleImageObjects}
        setIndexOverride={setIndexOverrideSpy}
      />
    );

    const scrollbox = screen.queryByTestId("multi-image-viewer-scrollbox");
    const scrollBoxChildren = scrollbox.childNodes;

    fireEvent.click(scrollBoxChildren[2]);

    expect(setIndexOverrideSpy).toHaveBeenCalledWith(2);
  });

  test("should apply container class when provided as prop", () => {
    const { debug } = render(
      <MultiImageViewer
        imageObjects={sampleImageObjects}
        rootClassName={"sample_class"}
      />
    );

    const component = screen.queryByTestId("multi-image-viewer-root");
    expect(component).toHaveClass("sample_class");
  });

  test("should apply container styles when provided as prop", () => {
    const { debug } = render(
      <MultiImageViewer
        imageObjects={sampleImageObjects}
        rootStyles={{ border: "2px solid brown" }}
      />
    );

    const component = screen.queryByTestId("multi-image-viewer-root");
    expect(component).toHaveStyle("border: 2px solid brown");
  });

  test("should apply main Image class when provided as prop", () => {
    const { debug } = render(
      <MultiImageViewer
        imageObjects={sampleImageObjects}
        mainImageClassName={"sample_class"}
      />
    );

    const component = screen.queryByTestId("multi-image-viewer-root");
    const mainImageDiv = component.firstChild;
    expect(mainImageDiv).toHaveClass("sample_class");
  });

  test("should apply main Image styles when provided as prop", () => {
    const { debug } = render(
      <MultiImageViewer
        imageObjects={sampleImageObjects}
        mainImageStyles={{ border: "2px solid brown" }}
      />
    );

    const component = screen.queryByTestId("multi-image-viewer-root");
    const mainImageDiv = component.firstChild;
    expect(mainImageDiv).toHaveStyle("border: 2px solid brown");
  });

  test("should apply mini Image class when provided as prop", () => {
    const { debug } = render(
      <MultiImageViewer
        imageObjects={sampleImageObjects}
        miniImageClassname={"sample_mini_class"}
      />
    );

    const component = screen.queryByTestId("multi-image-viewer-scrollbox");
    const miniImages = component.childNodes;

    miniImages.forEach((mini) => {
      expect(mini).toHaveClass("sample_mini_class");
    });
  });

  test("should apply mini Image styles when provided as prop", () => {
    const { debug } = render(
      <MultiImageViewer
        imageObjects={sampleImageObjects}
        miniImageStyles={{ border: "2px solid brown" }}
      />
    );

    const component = screen.queryByTestId("multi-image-viewer-scrollbox");
    const miniImages = component.childNodes;

    miniImages.forEach((mini) => {
      expect(mini).toHaveStyle("border: 2px solid brown");
    });
  });

  test("should apply custom selected class on the correct mini image when provided as prop", () => {
    const { debug } = render(
      <MultiImageViewer
        imageObjects={sampleImageObjects}
        miniImageSelectedClassName="sample_selected_mini_image_className"
      />
    );

    const scrollbox = screen.queryByTestId("multi-image-viewer-scrollbox");
    const scrollBoxChildren = scrollbox.childNodes;

    fireEvent.click(scrollBoxChildren[2]);

    const scrollboxUpdated = screen.queryByTestId(
      "multi-image-viewer-scrollbox"
    );
    const scrollBoxUpdatedChildren = scrollboxUpdated.childNodes;

    // debug();
    scrollBoxUpdatedChildren.forEach((e, idx) => {
      if (idx === 2) {
        expect(e).toHaveClass("sample_selected_mini_image_className");
      } else {
        expect(e).not.toHaveClass("sample_selected_mini_image_className");
      }
    });
  });

  test("should apply custom selected styles on the correct mini image when provided as prop", () => {
    const { debug } = render(
      <MultiImageViewer
        imageObjects={sampleImageObjects}
        miniImageSelectedStyles={{ border: "2px solid green" }}
      />
    );

    const scrollbox = screen.queryByTestId("multi-image-viewer-scrollbox");
    const scrollBoxChildren = scrollbox.childNodes;

    fireEvent.click(scrollBoxChildren[2]);

    const scrollboxUpdated = screen.queryByTestId(
      "multi-image-viewer-scrollbox"
    );
    const scrollBoxUpdatedChildren = scrollboxUpdated.childNodes;

    // debug();
    scrollBoxUpdatedChildren.forEach((e, idx) => {
      if (idx === 2) {
        expect(e).toHaveStyle("border: 2px solid green");
      } else {
        expect(e).not.toHaveStyle("border: 2px solid green");
      }
    });
  });
});
