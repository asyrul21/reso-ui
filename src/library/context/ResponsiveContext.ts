import { createContext } from "react";

export interface IResponsiveContext {
  isMobile: boolean;
  isTablet: boolean;
  isMdDesktop: boolean;
  isLgDesktop: boolean;
  isXLgDesktop: boolean;
  windowWidth: number;
  windowHeight: number;
}

export const ResponsiveContext = createContext<IResponsiveContext>({
  isMobile: false,
  isTablet: false,
  isMdDesktop: false,
  isLgDesktop: false,
  isXLgDesktop: false,
  windowWidth: 0,
  windowHeight: 0,
});
