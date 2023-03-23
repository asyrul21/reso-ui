import React, { useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: React.MutableRefObject<T>,
  cb: () => void
): void => {
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        // outside click
        cb();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
