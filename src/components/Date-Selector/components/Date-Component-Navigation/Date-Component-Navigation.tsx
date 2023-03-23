import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// styles
import "./styles/Date-Component-Navigation.layout.scss";
import "./styles/Date-Component-Navigation.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";

import { methodHasValue } from "@utils/validations";

export interface IDateComponentNavigation extends IComponent, IThemeProps {
  value: string;
  disablePrevious?: boolean;
  disableNext?: boolean;
  onClickPrevious?: () => void;
  onClickNext?: () => void;
  customPreviousComponent?: () => React.ReactNode;
  customNextComponent?: () => React.ReactNode;
  textClassName?: string;
  textStyles?: React.CSSProperties;
  previousBtnClassName?: string;
  previousBtnStyles?: React.CSSProperties;
  nextBtnClassName?: string;
  nextBtnStyles?: React.CSSProperties;
}

export const DateComponentNavigation = ({
  value,
  disablePrevious = false,
  disableNext = false,
  onClickPrevious,
  onClickNext,
  customPreviousComponent,
  customNextComponent,
  textClassName,
  textStyles = {},
  previousBtnClassName,
  previousBtnStyles = {},
  nextBtnClassName,
  nextBtnStyles = {},
  rootClassName,
  rootStyles = {},
  theme = "light",
}: IDateComponentNavigation) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        date_component_navigation_container: true,
      },
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`date_component_navigation_container_theme_`, theme)
  );

  const previousContainerStyles = createComponentStyles(
    createLayoutStyles(
      {
        date_component_navigation_button: true,
      },
      previousBtnClassName,
      {
        no_select: true,
        disabled: disablePrevious,
      }
    ),
    createThemeStyles(`date_component_navigation_button_theme_`, theme)
  );

  const nextContainerStyles = createComponentStyles(
    createLayoutStyles(
      {
        date_component_navigation_button: true,
      },
      nextBtnClassName,
      {
        no_select: true,
        disabled: disableNext,
      }
    ),
    createThemeStyles(`date_component_navigation_button_theme_`, theme)
  );

  const valueClasses = createComponentStyles(
    createLayoutStyles(
      {
        date_component_navigation_text: true,
      },
      textClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`date_component_navigation_text_theme_`, theme)
  );

  const renderPreviousComponent: () => React.ReactNode = methodHasValue(
    customPreviousComponent
  )
    ? customPreviousComponent
    : () => "<<";
  const renderNextComponent: () => React.ReactNode = methodHasValue(
    customPreviousComponent
  )
    ? customNextComponent
    : () => ">>";
  return (
    <div className={containerStyles} style={rootStyles}>
      <button
        className={previousContainerStyles}
        onClick={() => {
          if (methodHasValue(onClickPrevious)) {
            onClickPrevious();
          }
        }}
        style={previousBtnStyles}
      >
        {renderPreviousComponent()}
      </button>
      <span className={valueClasses} style={textStyles}>
        {value}
      </span>
      <button
        className={nextContainerStyles}
        onClick={() => {
          if (methodHasValue(onClickNext)) {
            onClickNext();
          }
        }}
        style={nextBtnStyles}
      >
        {renderNextComponent()}
      </button>
    </div>
  );
};
