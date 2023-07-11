import { ISpacingsProps } from "@interfaces/ISpacingsProps";
import { Theme } from "@interfaces/Theme";
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
export declare const withSpacingsProps: (containerStyles: IStyleClassnames, props: ISpacingsProps) => IStyleClassnames;
export declare const createLayoutStyles: (containerStyles: IStyleClassnames, className?: string, options?: ILayoutStyleOptions) => string;
export declare const createThemeStyles: (componentStylePrefix?: string, theme?: Theme) => string;
export declare const createComponentStyles: (layoutStyles: string | IStyleClassnames, themeStyles?: string) => string;
export {};
//# sourceMappingURL=styles.d.ts.map