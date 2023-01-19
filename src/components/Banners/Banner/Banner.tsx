import React, { useEffect, useState } from "react";

// import base interface
import IComponent from "@interfaces/IComponent";

// styles
import "./styles/Banner.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  withSpacingsProps,
} from "@utils/styles";

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

  // const messageBannerClasses = classnames({
  //   alertMessage: true,
  //   component_collapseBanner_container: true,
  //   [`message_banner_${type}`]: true,
  //   message_banner_active: showBanner,
  // });

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
        <button
          className="banner_close_button"
          onClick={() => {
            setShow(false);
          }}
        >
          X
        </button>
      </div>
    )
  );
};
