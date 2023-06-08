import {
  DateComponent,
  DayNamesMap,
  DaysMappingMap,
  DateDayNameIndex,
  DateMonthIndex,
  MonthsNamesMap,
} from "@components/Date-Selector/types";

/*    this variable is needed because by default javascript date gives value of 0-6
 *    from sunday (0) to saturday (6).
 *    However, we remap it to be from mon [0] to sun [6]
 */
const REMAPPED_DAYS: DaysMappingMap = {
  0: 6, // sunday to last day
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
};

export const DAY_NAMES_DEFAULT: DayNamesMap = {
  0: "Mon",
  1: "Tue",
  2: "Wed",
  3: "Thu",
  4: "Fri",
  5: "Sat",
  6: "Sun",
};

export const MONTHS_NAMES_DEFAULT: MonthsNamesMap = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const getDayDisplayNamesDefault = (): string[] => {
  return Object.keys(DAY_NAMES_DEFAULT).map(
    (idKey) => DAY_NAMES_DEFAULT[idKey]
  );
};

const getMonthDisplayNameDefault = (id: DateMonthIndex): string => {
  return MONTHS_NAMES_DEFAULT[`${id}`];
};

const getRemappedDayIndex = (id: DateDayNameIndex): DateDayNameIndex => {
  return REMAPPED_DAYS[`${id}`];
};

const destructureDateComponents = (date: Date): DateComponent => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
  };
};

export {
  getMonthDisplayNameDefault,
  getDayDisplayNamesDefault,
  getRemappedDayIndex,
  destructureDateComponents,
};
