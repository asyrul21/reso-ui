import React from "react";

import { Image } from "../../Images/Image";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";

// styles
import "./styles/Hero.layout.scss";

// utils
import { createComponentStyles, createLayoutStyles } from "../../../utils/styles";

export interface IHeroProps extends IComponent, IMarginProps {
  src: string;
  alt?: string;
  fullWidth?: boolean;
  imgClassName?: string;
  imgStyles?: React.CSSProperties;
}

export const Hero = ({
  src,
  alt = "RESO Hero Image",
  fullWidth = false,
  rootClassName,
  imgClassName,
  rootStyles = {},
  imgStyles = {},
  ...spacingsProps
}: IHeroProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        hero_container: true,
        hero_container_fullWidth: fullWidth,
      },
      rootClassName,
      {
        position_relative: true,
        // width_full does not work here because both [Image] and [Hero] styles overrides the global [width] style
      }
    )
  );

  return (
    <Image
      rootClassName={containerStyles}
      rootStyles={rootStyles}
      src={src}
      alt={alt}
      imgClassName={imgClassName}
      imgStyles={imgStyles}
      mh={fullWidth ? 0 : "center"}
      {...spacingsProps}
    />
  );
};
