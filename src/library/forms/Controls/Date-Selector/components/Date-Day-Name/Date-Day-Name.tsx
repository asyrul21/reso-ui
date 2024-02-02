import React from "react";

// import base interface
import IComponent from "../../../../../interfaces/IComponent";
import IThemeProps from "../../../../../interfaces/Theme";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "../../../../../utils/styles";

// styles
import "./styles/Date-Day-Name.layout.scss";
import "./styles/Date-Day-Name.theme.scss";
import "../../styles/Date-Selector.shared.scss";

export interface IDateDayNameProps extends IComponent, IThemeProps {
  children: React.ReactNode;
}

export const DateDayName = ({
  children,
  rootClassName,
  rootStyles = {},
  theme = "light",
}: IDateDayNameProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        date_selector_grid_unit: true,
        date_day_name_container: true,
      },
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`date_day_name_theme_`, theme)
  );

  return (
    <div
      data-testid="date-day-name-root"
      className={containerStyles}
      style={rootStyles}
    >
      {children}
    </div>
  );
};
