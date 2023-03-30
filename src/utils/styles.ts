import { ISpacingsProps } from "@interfaces/ISpacingsProps";
import { DefaultTheme, Theme } from "@interfaces/Theme";
import classnames from "classnames";
import { booleanHasValue, hasValue } from "./validations";

interface IStyleClassnames {
  [key: string]: boolean;
}

interface ILayoutStyleOptions {
  disabled?: boolean;
  no_select?: boolean;
  width_full?: boolean;
  width_fit_content?: boolean;
  position_relative?: boolean;
}

export const withSpacingsProps = (
  containerStyles: IStyleClassnames,
  props: ISpacingsProps
) => {
  const { ma, mv, mh, mt, mb, mr, ml, pa, pv, ph, pt, pr, pl, pb } = props;

  let spacingClasses: IStyleClassnames = {};
  // margins
  if (hasValue(ma)) {
    spacingClasses = { ...spacingClasses, [`spacing-ma-${ma}`]: true };
  }
  if (hasValue(mv)) {
    spacingClasses = { ...spacingClasses, [`spacing-mv-${mv}`]: true };
  }
  if (hasValue(mh)) {
    spacingClasses = { ...spacingClasses, [`spacing-mh-${mh}`]: true };
  }
  if (hasValue(mt)) {
    spacingClasses = { ...spacingClasses, [`spacing-mt-${mt}`]: true };
  }
  if (hasValue(mb)) {
    spacingClasses = { ...spacingClasses, [`spacing-mb-${mb}`]: true };
  }
  if (hasValue(mr)) {
    spacingClasses = { ...spacingClasses, [`spacing-mr-${mr}`]: true };
  }
  if (hasValue(ml)) {
    spacingClasses = { ...spacingClasses, [`spacing-ml-${ml}`]: true };
  }
  // paddings
  if (hasValue(pa)) {
    spacingClasses = { ...spacingClasses, [`spacing-pa-${pa}`]: true };
  }
  if (hasValue(pv)) {
    spacingClasses = { ...spacingClasses, [`spacing-pv-${pv}`]: true };
  }
  if (hasValue(ph)) {
    spacingClasses = { ...spacingClasses, [`spacing-ph-${ph}`]: true };
  }
  if (hasValue(pt)) {
    spacingClasses = { ...spacingClasses, [`spacing-pt-${pt}`]: true };
  }
  if (hasValue(pb)) {
    spacingClasses = { ...spacingClasses, [`spacing-pb-${pb}`]: true };
  }
  if (hasValue(pr)) {
    spacingClasses = { ...spacingClasses, [`spacing-pr-${pr}`]: true };
  }
  if (hasValue(pl)) {
    spacingClasses = { ...spacingClasses, [`spacing-pl-${pl}`]: true };
  }

  return {
    ...containerStyles,
    ...spacingClasses,
  };
};

export const createLayoutStyles = (
  containerStyles: IStyleClassnames,
  className?: string,
  options?: ILayoutStyleOptions
) => {
  const {
    disabled,
    no_select,
    width_full,
    width_fit_content,
    position_relative,
  } = options
    ? options
    : {
        disabled: false,
        no_select: false,
        width_full: false,
        width_fit_content: false,
        position_relative: false,
      };
  return classnames({
    component_layout_default: true,
    component_disabled: disabled && disabled === true,
    no_select: no_select && no_select === true,
    width_full: width_full && width_full === true,
    width_fit_content: width_fit_content && width_fit_content === true,
    position_relative: position_relative && position_relative === true,
    ...containerStyles,
    [className]: className && className !== "" ? true : false,
  });
};

export const createThemeStyles = (
  componentStylePrefix?: string,
  theme?: Theme
) => {
  return classnames({
    component_theme_base: true,
    [`${componentStylePrefix}${DefaultTheme}`]: true,
    [`${componentStylePrefix}${theme}`]:
      componentStylePrefix && theme ? true : false,
  });
};

export const createComponentStyles = (
  layoutStyles: string,
  themeStyles?: string
) => {
  const themeClasses = themeStyles ? themeStyles : createThemeStyles();
  return classnames(layoutStyles, themeClasses);
};
