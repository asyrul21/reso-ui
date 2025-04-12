import React, { useMemo } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { ResponsiveContext } from "../context/ResponsiveContext";

export const ResponsiveProvider = ({ children }) => {
  const [width, height] = useWindowSize();

  const { isMobile, isTablet, isMdDesktop, isLgDesktop, isXLgDesktop } =
    useMemo(
      () => ({
        isMobile: width < 640, // phones
        isTablet: width >= 640, // tablets
        isMdDesktop: width >= 768, // small laptops
        isLgDesktop: width >= 1024, // desktops
        isXLgDesktop: width >= 1280, // large desktops / 2K+
      }),
      [width]
    );

  return (
    <ResponsiveContext.Provider
      value={{
        isMobile,
        isTablet,
        isMdDesktop,
        isLgDesktop,
        isXLgDesktop,
        windowWidth: width,
        windowHeight: height,
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};
