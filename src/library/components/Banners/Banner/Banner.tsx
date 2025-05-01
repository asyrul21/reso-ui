import React, { useState } from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";

import { Button } from "../../Buttons";

// styles
import "./styles/Banner.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
} from "../../../utils/styles";

export interface IBannerProps extends IComponent {
  type: "info" | "warning" | "error" | "success";
  text: string;
  onCloseOverride?: () => void;
}

export const Banner = ({
  type,
  text,
  onCloseOverride,
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
            if (typeof onCloseOverride === "function") {
              onCloseOverride();
            } else {
              setShow(false);
            }
          }}
        />
      </div>
    )
  );
};
