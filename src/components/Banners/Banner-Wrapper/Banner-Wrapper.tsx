import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";

// styles
import "./styles/Banner-Wrapper.layout.scss";

// utils
import { createComponentStyles, createLayoutStyles } from "@utils/styles";

export interface IBannerWrapperProps extends IComponent {
  children: React.ReactNode;
}

export const BannerWrapper = ({
  children,
  rootClassName,
  rootStyles = {},
}: IBannerWrapperProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        banner_wrapper_container: true,
      },
      rootClassName
    )
  );

  return (
    children && (
      <div
        className={containerStyles}
        style={rootStyles}
        data-testid="banner-wrapper-root"
      >
        {children}
      </div>
    )
  );
};
