import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";

// styles
import "./styles/Card-Summary-Value.layout.scss";

// utils
import { createComponentStyles, createLayoutStyles } from "@utils/styles";

export interface ICardSummaryValueProps extends IComponent {
  value: string | number;
}

export const CardSummaryValue = ({
  value,
  rootClassName,
  rootStyles = {},
}: ICardSummaryValueProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        card_summary_value: true,
      },
      rootClassName
    )
  );

  return (
    <span
      className={containerStyles}
      style={rootStyles}
      data-testid="card-summary-value"
    >
      {value}
    </span>
  );
};
