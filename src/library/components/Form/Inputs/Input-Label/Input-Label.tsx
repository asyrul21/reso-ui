import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IThemeProps from "@interfaces/Theme";
import { IMarginProps } from "@interfaces/ISpacingsProps";

// styles
import "../sharedStyles.scss";
import "./styles/Input-Label.layout.scss";
import "./styles/Input-Label.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "@utils/styles";

type LabelDescriptionObject = {
  [key: string]: string;
};

export interface IInputLabelProps
  extends IComponent,
    IThemeProps,
    IMarginProps {
  htmlFor: string;
  label: string;
  description?: string | LabelDescriptionObject;
  descriptionSelectedKey?: string;
  required?: boolean;
  labelClassName?: string;
  labelStyles?: React.CSSProperties;
}

export const InputLabel = ({
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
}: IInputLabelProps) => {
  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          inputLabel_container: true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`inputLabel_container_theme_`, theme)
  );

  const labelTopClasses = createLayoutStyles({
    inputLabel_top: true,
    inputlabel_top_marginBottom: description ? true : false,
  });

  const labelClasses = createComponentStyles(
    createLayoutStyles(
      {
        inputLabel_label: true,
        inputlabel_label_margin_right: required,
      },
      rootClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`inputLabel_theme_`, theme)
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
        {required && (
          <span className="inputLabel_required">{`(*required)`}</span>
        )}
      </div>
      {description &&
        (typeof description === "string" ? (
          description && <p className="inputLabel_description">{description}</p>
        ) : description && description[`${descriptionSelectedKey}`] ? (
          <p className="inputLabel_description">
            {description[`${descriptionSelectedKey}`]}
          </p>
        ) : null)}
    </div>
  );
};
