import React from "react";
import IComponent from "@interfaces/IComponent";
import { IMarginProps } from "@interfaces/ISpacingsProps";
import "./styles/Hero.layout.scss";
export interface IHeroProps extends IComponent, IMarginProps {
    src: string;
    alt?: string;
    fullWidth?: boolean;
    imgClassName?: string;
    imgStyles?: React.CSSProperties;
}
export declare const Hero: ({ src, alt, fullWidth, rootClassName, imgClassName, rootStyles, imgStyles, ...spacingsProps }: IHeroProps) => React.JSX.Element;
//# sourceMappingURL=Hero.d.ts.map