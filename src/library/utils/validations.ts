export const hasValue = (val: any) => {
  return val !== null && val !== undefined;
};

export const stringHasValue = (val: any) => {
  return hasValue(val) && typeof val === "string";
};

export const objectHasValue = (val: any) => {
  return hasValue(val) && Object.keys(val).length > 0;
};

export const numberHasValue = (val: any) => {
  return hasValue(val) && typeof val === "number";
};

export const methodHasValue = (method: any) => {
  return hasValue(method) && typeof method === "function";
};

export const booleanHasValue = (val: boolean) => {
  return hasValue(val) && typeof val === "boolean";
};
