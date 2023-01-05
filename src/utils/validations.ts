export const booleanHasValue = (val?: boolean) => {
  return val !== null && val !== undefined && typeof val === "boolean";
};
