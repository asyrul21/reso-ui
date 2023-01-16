import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";

// styles
import "./styles/Panel-Row.layout.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

export interface IPanelRowProps extends IComponent {
  keyStr: string;
  value: string | number;
  keyClassName?: string;
  keyStyles?: React.CSSProperties;
  valueClassName?: string;
  valueStyles?: React.CSSProperties;
}

export const PanelRow = ({
  keyStr,
  value,
  rootClassName,
  rootStyles = {},
  keyClassName,
  keyStyles = {},
  valueClassName,
  valueStyles = {},
}: IPanelRowProps) => {
  const rowClasses = createComponentStyles(
    createLayoutStyles(
      {
        panel_row_container: true,
      },
      rootClassName
    )
  );

  const keyClasses = createComponentStyles(
    createLayoutStyles(
      {
        panel_row_key: true,
      },
      keyClassName
    )
  );

  const valueClasses = createComponentStyles(
    createLayoutStyles(
      {
        panel_row_value: true,
      },
      valueClassName
    )
  );

  console.log(keyStr);

  return (
    <div
      className={rowClasses}
      style={rootStyles}
      data-teestid="panel-row-root"
    >
      <span
        className={keyClasses}
        style={keyStyles}
        data-testid="panel-row-key"
      >
        {keyStr}
      </span>
      <span
        className={valueClasses}
        style={valueStyles}
        data-testid="panel-row-value"
      >
        {value}
      </span>
    </div>
  );
};
