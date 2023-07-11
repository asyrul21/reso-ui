import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import "./styles/Date-Day-Name.layout.scss";
import "./styles/Date-Day-Name.theme.scss";
import "../../styles/Date-Selector.shared.scss";
export interface IDateDayNameProps extends IComponent, IThemeProps {
    children: React.ReactNode;
}
export declare const DateDayName: ({ children, rootClassName, rootStyles, theme, }: IDateDayNameProps) => React.JSX.Element;
//# sourceMappingURL=Date-Day-Name.d.ts.map