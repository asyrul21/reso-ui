import React, { FunctionComponent, SVGAttributes } from "react";
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";
import { IMarginProps } from "../../interfaces/ISpacingsProps";
import "./styles/Icon.layout.scss";
export interface IIconProps extends IComponent, IThemeProps, IMarginProps {
    SvgIcon: FunctionComponent<SVGAttributes<SVGElement>>;
    width?: number | string;
    height?: number | string;
    fill?: string;
    stroke?: string;
    inline?: boolean;
}
export declare const Icon: ({ SvgIcon, width, height, inline, fill, stroke, rootClassName, rootStyles, theme, ...spacingsProps }: IIconProps) => React.JSX.Element;
