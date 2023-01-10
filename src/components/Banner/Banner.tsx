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
  fullWidth?: boolean;
  imgClassName?: string;
  imgStyles?: React.CSSProperties;
}

export const Banner = ({
  src,
  alt = "RESO Banner",
  fullWidth,
  className,
  imgClassName,
  styles = {},
  imgStyles = {},
}: IBannerProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        banner_container: true,
        banner_container_fullWidth: fullWidth,
      },
      className,
      {
        position_relative: true,
        // width_full does not work here because both [Image] and [Banner] styles overrides the global [width] style
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
      mv={fullWidth ? 0 : "center"}
    />
  );
};
