import React from "react";
import { ResponsiveProvider } from "./ResponsiveProvider";

export const ResoUiProvider = ({ children }) => {
  /**
   * All Providers Here
   */
  return <ResponsiveProvider>{children}</ResponsiveProvider>;
};
