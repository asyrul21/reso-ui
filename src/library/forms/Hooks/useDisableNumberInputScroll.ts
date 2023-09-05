import { useEffect } from "react";

const useDisableNumberInputScroll = () => {
  useEffect(() => {
    const removeNumberInputScrollEventFn = (event) => {
      const numberInputElement = document.activeElement as HTMLInputElement;
      if (numberInputElement.type === "number") {
        numberInputElement.blur();
      }
    };
    document.addEventListener("wheel", removeNumberInputScrollEventFn);

    return () => {
      document.removeEventListener("wheel", removeNumberInputScrollEventFn);
    };
  }, []);
};

export { useDisableNumberInputScroll };
