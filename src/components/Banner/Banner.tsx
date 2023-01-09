import React, { useState } from "react";

import { Image } from "@components/Image";

// import base interface
import IComponent from "@interfaces/IComponent";

// styles
import "./styles/Banner.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

export interface IBannerProps extends IComponent {
  src: string;
  alt?: string;
  imgClassName?: string;
  imgStyles?: React.CSSProperties;
}

export const Banner = ({
  src,
  alt = "RESO Banner",
  className,
  imgClassName,
  styles = {},
  imgStyles = {},
}: IBannerProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        banner_container: true,
      },
      className,
      {
        position_relative: true,
      }
    ),
    createThemeStyles("")
  );

  return (
    <Image
      className={containerStyles}
      styles={styles}
      src={src}
      alt={alt}
      imgClassName={imgClassName}
      imgStyles={imgStyles}
      mv="center"
    />
  );
};
