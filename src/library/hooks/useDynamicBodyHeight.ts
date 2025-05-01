import { useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

export const useDynamicBodyHeight = () => {
  const [_windowWidth, windowHeight] = useWindowSize();
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.height = `${windowHeight}px`;
  }, [windowHeight]);
};
