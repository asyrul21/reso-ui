import React, { useMemo } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { ResponsiveContext } from "../context/ResponsiveContext";

export const ResponsiveProvider = ({ children }) => {
  const [width, _height] = useWindowSize();
  console.log("width:", width);

  const isMobile = useMemo(() => width < 640, [width]); // phones
  const isTablet = useMemo(() => width >= 640 && width < 768, [width]); // tablets
  const isMdDesktop = useMemo(() => width >= 768 && width < 1024, [width]); // small laptops
  const isLgDesktop = useMemo(() => width >= 1024 && width < 1280, [width]); // desktops
  const isXLgDesktop = useMemo(() => width >= 1280, [width]); // large desktops / 2K+

  return (
    <ResponsiveContext.Provider
      value={{
        isMobile,
        isTablet,
        isMdDesktop,
        isLgDesktop,
        isXLgDesktop,
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};
