// define theme literals here
export type Theme = "light" | "dark";

export interface IThemeProps {
  theme?: Theme;
}

export const DefaultTheme: Theme = "light";

export default IThemeProps;
