import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";

// !! IMPORT OTHER COMPONENTS FIRST BEFORE IMPORTING STYLE FILES

// styles
import "./styles/Icon.layout.scss";
// import "./styles/Example.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";

export interface IIconProps extends IComponent, IThemeProps, IMarginProps {
  SvgIcon: (props: React.SVGProps<SVGElement>) => React.ReactElement;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export const Icon = ({
  SvgIcon,
  width = 32,
  height = 32,
  fill = "#434B59",
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...spacingsProps
}: IIconProps) => {
  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          icon_container: true,
        },
        spacingsProps
      ),
      rootClassName
    )
  );

  return (
    <div
      data-testid="icon-root"
      className={containerClasses}
      style={rootStyles}
    >
      <SvgIcon
        data-testid="icon-svg-icon"
        width={width}
        height={height}
        fill={fill}
      />
    </div>
  );
};
