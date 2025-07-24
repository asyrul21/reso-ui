import React from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";

// styles
import "../sharedStyles.scss";
import "./styles/Label.layout.scss";
import "./styles/Label.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";

type LabelDescriptionObject = {
  [key: string]: string;
};

export interface ILabelProps extends IComponent, IThemeProps, IMarginProps {
  htmlFor: string;
  label: string;
  description?: string | LabelDescriptionObject;
  descriptionSelectedKey?: string;
  required?: boolean;
  labelClassName?: string;
  labelStyles?: React.CSSProperties;
}

export const Label = ({
  htmlFor,
  label,
  description,
  descriptionSelectedKey,
  required = false,
  labelClassName,
  labelStyles = {},
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...spacingsProps
}: ILabelProps) => {
  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          label_container: true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`label_container_theme_`, theme)
  );

  const labelTopClasses = createLayoutStyles({
    label_top: true,
    label_top_marginBottom: description ? true : false,
  });

  const labelClasses = createComponentStyles(
    createLayoutStyles(
      {
        label_label: true,
        label_label_margin_right: required,
      },
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`label_theme_`, theme)
  );

  return (
    <div
      data-testid={`label_${htmlFor}`}
      className={containerClasses}
      style={rootStyles}
    >
      <div className={labelTopClasses}>
        <label htmlFor={htmlFor} className={labelClasses} style={labelStyles}>
          {label}
        </label>
        {required && <span className="label_required">{`*`}</span>}
      </div>
      {description &&
        (typeof description === "string" ? (
          description && <p className="label_description">{description}</p>
        ) : description && description[`${descriptionSelectedKey}`] ? (
          <p className="label_description">
            {description[`${descriptionSelectedKey}`]}
          </p>
        ) : null)}
    </div>
  );
};
