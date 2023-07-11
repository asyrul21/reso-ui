import React from "react";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import "./styles/Modal-Header.layout.scss";
import "./styles/Modal-Header.theme.scss";
export interface IModalHeaderProps extends IComponent, IThemeProps {
    title: string;
    onClose: () => void;
}
export declare const ModalHeader: ({ onClose, title, rootClassName, rootStyles, theme, }: IModalHeaderProps) => React.JSX.Element;
//# sourceMappingURL=Modal-Header.d.ts.map