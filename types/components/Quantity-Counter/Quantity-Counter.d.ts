import React from "react";
import IComponent from "../../interfaces/IComponent";
import IThemeProps from "../../interfaces/Theme";
import "./styles/Quantity-Counter.layout.scss";
import "./styles/Quantity-Counter.theme.scss";
export interface IQuantityCounter extends IComponent, IThemeProps {
    value: number;
    onChange?: (val: number) => void;
    onAdd?: () => void;
    onSubtract?: () => void;
    min?: number;
    max?: number;
}
export declare const QuantityCounter: ({ value, onAdd, onSubtract, onChange, min, max, rootClassName, rootStyles, theme, }: IQuantityCounter) => React.JSX.Element;
export default QuantityCounter;
