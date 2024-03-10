import { ACCEPT_STRING_REGEX } from "../forms";

export const hasValue = (val: any) => {
  return val !== null && val !== undefined;
};

export const stringHasValue = (val: any) => {
  return hasValue(val) && typeof val === "string" && val !== "";
};

export const objectHasValue = (val: any) => {
  return hasValue(val) && Object.keys(val).length > 0;
};

export const numberHasValue = (val: any) => {
  const num = Number(val);
  return hasValue(num) && typeof num === "number" && !isNaN(num);
};

export const numberHasPositiveValue = (val: any) => {
  return numberHasValue(val) && Number(val) >= 0;
};

export const methodHasValue = (method: any) => {
  return hasValue(method) && typeof method === "function";
};

export const booleanHasValue = (val: boolean) => {
  return hasValue(val) && typeof val === "boolean";
};

export const stringIsValidAccept = (val: string) => {
  return ACCEPT_STRING_REGEX.test(val);
};

export const valueIsAFile = (val: any) => {
  return hasValue(val) && val instanceof File;
};
