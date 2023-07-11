import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import "./styles/Full-Screen-Error.layout.scss";
import "./styles/Full-Screen-Error.theme.scss";
export interface IFullScreenErrorProps extends IComponent, IThemeProps {
    text?: string;
    textClassName?: string;
    textStyles?: React.CSSProperties;
    iconClassName?: string;
    iconStyles?: React.CSSProperties;
}
export declare const FullScreenError: ({ text, rootClassName, rootStyles, textClassName, textStyles, iconClassName, iconStyles, theme, }: IFullScreenErrorProps) => React.JSX.Element;
//# sourceMappingURL=Full-Screen-Error.d.ts.map