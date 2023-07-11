import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import ISpacingsProps from "@interfaces/ISpacingsProps";
import "./styles/Card-Container.layout.scss";
import "./styles/Card-Container.theme.scss";
export interface ICardContainerProps extends IComponent, IThemeProps, ISpacingsProps {
    children: React.ReactNode;
}
export declare const Card: ({ children, rootClassName, rootStyles, theme, ...spacingsProps }: ICardContainerProps) => React.JSX.Element;
//# sourceMappingURL=Card-Container.d.ts.map