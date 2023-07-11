import React from "react";
import { IModalChildrenProps } from "@components/Modal";
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import "./styles/Dialog.layout.scss";
import "./styles/Dialog.theme.scss";
export type DialogType = "ok" | "yesNo";
export interface IDialog extends IModalChildrenProps, IComponent, IThemeProps {
    title?: string;
    header?: string;
    description?: string;
    type?: DialogType;
    yesText?: string;
    noText?: string;
    okText?: string;
    onClose?: () => void;
    onClickYes?: () => void;
    onClickNo?: () => void;
    onClickOk?: () => void;
    yesButtonClassName?: string;
    yesButtonStyles?: React.CSSProperties;
    noButtonClassName?: string;
    noButtonStyles?: React.CSSProperties;
    okButtonClassName?: string;
    okButtonStyles?: React.CSSProperties;
}
export declare const Dialog: ({ isOpen, type, layer, title, header, description, yesText, noText, okText, onClose, onClickYes, onClickNo, onClickOk, rootClassName, rootStyles, yesButtonClassName, yesButtonStyles, noButtonClassName, noButtonStyles, okButtonClassName, okButtonStyles, theme, }: IDialog) => React.JSX.Element;
