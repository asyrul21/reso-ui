/// <reference types="react" />
export interface IResponsiveContext {
    isMobile: boolean;
    isTablet: boolean;
    isMdDesktop: boolean;
    isLgDesktop: boolean;
    isXLgDesktop: boolean;
    windowWidth: number;
    windowHeight: number;
}
export declare const ResponsiveContext: import("react").Context<IResponsiveContext>;
