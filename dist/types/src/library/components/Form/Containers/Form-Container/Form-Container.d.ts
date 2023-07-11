import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import ISpacingsProps from "@interfaces/ISpacingsProps";
import "./styles/Form-Container.layout.scss";
import "./styles/Form-Container.theme.scss";
export interface IFormContainerProps extends IComponent, IThemeProps, ISpacingsProps {
    children: React.ReactNode;
    onSubmit: () => void;
}
export declare const Form: ({ rootClassName, rootStyles, onSubmit, children, theme, ...spacingsProps }: IFormContainerProps) => React.JSX.Element;
//# sourceMappingURL=Form-Container.d.ts.map