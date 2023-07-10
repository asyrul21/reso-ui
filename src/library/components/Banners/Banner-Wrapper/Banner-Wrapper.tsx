import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";

// styles
import "./styles/Banner-Wrapper.layout.scss";

// utils
import { createComponentStyles, createLayoutStyles } from "@utils/styles";

export interface IBannerWrapperProps extends IComponent {
  children: React.ReactNode;
  positionAbsolute?: boolean;
  hasMaxHeight?: boolean;
}

export const BannerWrapper = ({
  children,
  positionAbsolute = false,
  hasMaxHeight = false,
  rootClassName,
  rootStyles = {},
}: IBannerWrapperProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        banner_wrapper_container: true,
        banner_wrapper_container_positionAbsolute: positionAbsolute,
        banner_wrapper_container_scroll: hasMaxHeight,
      },
      rootClassName
    )
  );

  return (
    <div
      className={containerStyles}
      style={rootStyles}
      data-testid="banner-wrapper-root"
    >
      {children}
    </div>
  );
};
