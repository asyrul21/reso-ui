export const hasValue = (val?: any) => {
  return val !== null && val !== undefined;
};

export const booleanHasValue = (val?: boolean) => {
  return hasValue(val) && typeof val === "boolean";
};
