import Theme from "@interfaces/Theme";
import classnames from "classnames";

interface IStyleClassnames {
  [key: string]: boolean;
}

interface ILayoutStyleOptions {
  className: string;
  disabled?: boolean;
  no_select?: boolean;
}

export const createLayoutStyles = (
  containerStyles: IStyleClassnames,
  className?: string,
  options?: ILayoutStyleOptions
) => {
  const { disabled, no_select } = options
    ? options
    : { disabled: false, no_select: false };
  return classnames({
    component_layout_default: true,
    component_disabled: disabled && disabled === true,
    no_select: no_select && no_select === true,
    ...containerStyles,
    [className]: className && className !== "" ? true : false,
  });
};

export const createThemeStyles = (
  componentStylePrefix: string,
  theme?: Theme
) => {
  return classnames({
    component_theme_default: true,
    [`${componentStylePrefix}${theme}`]: theme ? true : false,
  });
};

export const createComponentStyles = (
  layoutStyles: string,
  themeStyles: string
) => {
  return classnames(layoutStyles, themeStyles);
};
