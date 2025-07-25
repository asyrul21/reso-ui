import React from "react";
import { IThemeProps } from "../../../interfaces";
import IComponent from "../../../interfaces/IComponent";
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "../../../utils/styles";

// styles
import "./styles/Shimmer-Loader.layout.scss";

export interface IShimmerLoaderProps extends IComponent, IThemeProps {}

export const ShimmerLoader = ({
  rootClassName,
  rootStyles = {},
}: IShimmerLoaderProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        componentShimmerLoader_container: true,
      },
      rootClassName
    )
  );

  const shimmerClasses = createComponentStyles(
    createLayoutStyles({
      componentShimmerLoader_shimmer: true,
    })
  );
  return (
    <div
      data-testid="component-shimmer-loader-root"
      className={containerStyles}
      style={rootStyles}
    >
      <div
        data-testid="component-shimmer-loader-shimmer"
        className={shimmerClasses}
      />
    </div>
  );
};
