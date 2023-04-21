import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";

// !! IMPORT OTHER COMPONENTS FIRST BEFORE IMPORTING STYLE FILES
import { ChevronSingleLeft, ChevronSingleRight } from "@icons";
import { Icon } from "@components/Icon";

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

// #8B93A2

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

export const ICON_SIZE = 24;

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
    : () => (
        <Icon
          SvgIcon={ChevronSingleLeft}
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      );
  const renderNextComponent: () => React.ReactNode = methodHasValue(
    customNextComponent
  )
    ? customNextComponent
    : () => (
        <Icon
          SvgIcon={ChevronSingleRight}
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      );
  return (
    <div
      data-testid="date-selector-nav-root"
      className={containerStyles}
      style={rootStyles}
    >
      <button
        data-testid="date-selector-nav-btn-prev"
        className={previousContainerStyles}
        onClick={() => {
          if (!disablePrevious && methodHasValue(onClickPrevious)) {
            onClickPrevious();
          }
        }}
        style={previousBtnStyles}
      >
        {renderPreviousComponent()}
      </button>
      <span
        data-testid="date-selector-nav-text"
        className={valueClasses}
        style={textStyles}
      >
        {value}
      </span>
      <button
        data-testid="date-selector-nav-btn-next"
        className={nextContainerStyles}
        onClick={() => {
          if (!disableNext && methodHasValue(onClickNext)) {
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
