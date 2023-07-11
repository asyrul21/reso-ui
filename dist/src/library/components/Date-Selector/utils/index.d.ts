import { DateComponent, DayNamesMap, DateDayNameIndex, DateMonthIndex, MonthsNamesMap } from "@components/Date-Selector/types";
export declare const DAY_NAMES_DEFAULT: DayNamesMap;
export declare const MONTHS_NAMES_DEFAULT: MonthsNamesMap;
declare const getDayDisplayNamesDefault: () => string[];
declare const getMonthDisplayNameDefault: (id: DateMonthIndex) => string;
declare const getRemappedDayIndex: (id: DateDayNameIndex) => DateDayNameIndex;
declare const destructureDateComponents: (date: Date) => DateComponent;
export { getMonthDisplayNameDefault, getDayDisplayNamesDefault, getRemappedDayIndex, destructureDateComponents, };
