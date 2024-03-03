import React, { useEffect } from "react";

// import base interface
import IComponent from "../../../interfaces/IComponent";
import IThemeProps from "../../../interfaces/Theme";
import { IMarginProps } from "../../../interfaces/ISpacingsProps";

// styles
import "./styles/Radio-Select.layout.scss";
import "./styles/Radio-Select.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
  withSpacingsProps,
} from "../../../utils/styles";

import { methodHasValue } from "../../../utils/validations";
import { ISelectableOption } from "../../../interfaces";
import useInputValidatorsMemo from "../../Hooks/useInputValidatorsMemo";
import { validate } from "../../Validators";

export interface IRadioSelectProps
  extends IComponent,
    IThemeProps,
    IMarginProps {
  id?: string;
  name: string;
  selectedKey?: string;
  value?: string;
  options: ISelectableOption[];
  onChange?: (key: string) => void;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
  disabled?: boolean;
  optionsContainerClassName?: string;
  optionsContianerStyles?: React.CSSProperties;
  labelClassName?: string;
  labelStyles?: React.CSSProperties;
  radioClassName?: string;
  radioStyles?: React.CSSProperties;
}

export const RadioSelect = ({
  id,
  name,
  selectedKey,
  value /* default is undefined, must be valid string like 'banana' */,
  options,
  onChange,
  error,
  setError,
  required = false,
  disabled = false,
  optionsContainerClassName,
  optionsContianerStyles = {},
  labelClassName,
  labelStyles = {},
  radioClassName,
  radioStyles = {},
  rootClassName,
  rootStyles = {},
  theme = "light",
  ...spacingsProps
}: IRadioSelectProps) => {
  const inputValidators = useInputValidatorsMemo("string", {
    required,
  });

  useEffect(() => {
    validate(value, inputValidators, setError);
  }, [value]);

  const containerClasses = createComponentStyles(
    createLayoutStyles(
      withSpacingsProps(
        {
          radioselect_container: true,
        },
        spacingsProps
      ),
      rootClassName,
      {
        disabled,
        no_select: true,
      }
    )
  );

  const optionsContainerClasses = createComponentStyles(
    createLayoutStyles(
      {
        radioselect_options_container: true,
      },
      optionsContainerClassName,
      {
        no_select: true,
      }
    )
  );

  const radioClasses = createComponentStyles(
    createLayoutStyles(
      {
        radioselect_radio: true,
      },
      radioClassName,
      {
        disabled,
        no_select: true,
      }
    )
  );

  const labelClasses = createComponentStyles(
    createLayoutStyles(
      {
        radioselect_label: true,
      },
      labelClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles(`radioselect_label_theme_`, theme)
  );

  return (
    <div
      data-testid="radioselect-root"
      id={id}
      className={containerClasses}
      style={rootStyles}
    >
      <div
        data-testid="radioselect-options-container"
        className={optionsContainerClasses}
        style={optionsContianerStyles}
      >
        {options.map((op: ISelectableOption, idx: number) => {
          const radioItemKey = `resoui_radioselect_${name}_${idx}`;
          const radioItemId = `resoui_radioselect_${name}_input_${op.key}`;
          return (
            <div
              key={radioItemKey}
              className={radioClasses}
              style={radioStyles}
            >
              <input
                data-testid={radioItemId}
                className="radioselect_input"
                type="radio"
                disabled={disabled}
                required={required}
                id={radioItemId}
                value={op.key}
                name={name}
                checked={selectedKey === op.key}
                onChange={() => {
                  if (methodHasValue(onChange)) {
                    onChange(op.key);
                  }
                }}
              />
              <label
                data-testid={`radioselect-label-${op.key}`}
                htmlFor={radioItemId}
                className={labelClasses}
                style={labelStyles}
              >
                {op.value}
              </label>
            </div>
          );
        })}
      </div>
      {error && (
        <p data-testid={`radioselect-error`} className="form_input_error">
          {error}
        </p>
      )}
    </div>
  );
};
