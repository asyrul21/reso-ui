import React from "react";

// import base interface
// import IComponent from "../../../interfaces/IComponent";
// import IThemeProps from "../../../interfaces/Theme";
import { Button, IButtonProps } from "../../../components/Buttons/Button";

// styles
import "./styles/Submit-Button.layout.scss";
import "./styles/Submit-Button.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "../../../utils/styles";

export interface ISubmitButtonProps extends Omit<IButtonProps, "text"> {
  text?: string;
}

export const SubmitButton = ({
  id = null,
  disabled = false,
  inheritWidth = false,
  inline = false,
  text = "Submit",
  rootClassName,
  rootStyles = {},
  theme = "dark",
  ...spacingsProps
}: ISubmitButtonProps) => {
  const containerClasses = createComponentStyles(
    createLayoutStyles(
      {
        submit_button: true,
      },
      rootClassName,
      {
        disabled,
        no_select: true,
      }
    ),
    createThemeStyles(`submit_button_theme_`, theme)
  );

  return (
    <Button
      id={id}
      role="submit"
      text={text}
      inheritWidth={inheritWidth}
      inline={inline}
      rootClassName={containerClasses}
      rootStyles={rootStyles}
      disabled={disabled}
      {...spacingsProps}
    />
  );
};
