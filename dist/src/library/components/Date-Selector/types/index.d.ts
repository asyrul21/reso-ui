export type DateDayNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
export type DateMonthIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type DateDayNameIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type DateComponent = {
    year: number;
    month: number;
    date: number;
};
/**
 * {
 *      0: 1
 * }
 */
export type DaysMappingMap = {
    [id in DateDayNameIndex]: DateDayNameIndex;
};
/**
 * {
 *      0: 'Mon'
 * }
 */
export type DayNamesMap = {
    [id in DateDayNameIndex]: string;
};
/**
 * {
 *      0: 'January'
 * }
 */
export type MonthsNamesMap = {
    [id in DateMonthIndex]: string;
};
/**
 * {
 *      2020: '2020'
 * }
 */
export type YearNamesMap = {
    [id: number]: string;
};
