import React, { useEffect, useState } from "react";

// import base interface
import IComponent from "@interfaces/IComponent";

import { Button } from "@components/Buttons/Button";

// styles
import "./styles/Banner.layout.scss";

// utils
import { createComponentStyles, createLayoutStyles } from "@utils/styles";

export interface IBannerProps extends IComponent {
  type: "info" | "warning" | "error" | "success";
  text: string;
}

export const Banner = ({
  type,
  text,
  rootClassName,
  rootStyles = {},
}: IBannerProps) => {
  const [show, setShow] = useState<boolean>(true);

  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        banner_container: true,
        [`banner_container_${type}`]: true,
      },
      rootClassName,
      {
        position_relative: true,
      }
    )
  );

  return (
    show && (
      <div
        className={containerStyles}
        style={{
          ...rootStyles,
        }}
        data-testid="banner-root"
      >
        <span>{text}</span>
        <Button
          text="X"
          rootClassName="banner_close_button"
          onClick={() => {
            setShow(false);
          }}
        />
      </div>
    )
  );
};
