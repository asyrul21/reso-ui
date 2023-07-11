import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import "./styles/Date-Selector-Header.layout.scss";
import "./styles/Date-Selector-Header.theme.scss";
export interface IDateSelectorHeaderProps extends IComponent, IThemeProps {
    text: string;
    opened?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}
export declare const DateSelectorHeader: ({ text, opened, onClick, disabled, rootClassName, rootStyles, theme, }: IDateSelectorHeaderProps) => React.JSX.Element;
//# sourceMappingURL=Date-Selector-Header.d.ts.map