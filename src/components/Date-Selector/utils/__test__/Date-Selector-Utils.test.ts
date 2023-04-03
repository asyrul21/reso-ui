import {
  getMonthDisplayNameDefault,
  getDayDisplayNamesDefault,
  getRemappedDayIndex,
  destructureDateComponents,
  MONTHS_NAMES_DEFAULT,
} from "@components/Date-Selector/utils";
import {
  DateDayNameIndex,
  DateMonthIndex,
} from "@components/Date-Selector/types";

describe("Date Selector Utility Methods Unit Tests", () => {
  describe("getDayDisplayNamesDefault", () => {
    test("should retrieve default day display names array", () => {
      const expected = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const result = getDayDisplayNamesDefault();
      expect(result).toStrictEqual(expected);
    });
  });

  describe("getMonthDisplayNameDefault", () => {
    test.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])(
      "should retrieve default month display name",
      (idx) => {
        const result = getMonthDisplayNameDefault(idx as DateMonthIndex);
        expect(result).toEqual(MONTHS_NAMES_DEFAULT[idx]);
      }
    );
  });

  describe("destructureDateComponents", () => {
    test("should return DateComponent objects with Year, Month, and Date number properties", () => {
      const sampleDate = new Date();
      const result = destructureDateComponents(sampleDate);

      expect(result).toHaveProperty("year");
      expect(result.year).toBeTruthy();
      expect(typeof result.year).toEqual("number");

      expect(result).toHaveProperty("month");
      expect(result.month).toBeTruthy();
      expect(typeof result.month).toEqual("number");

      expect(result).toHaveProperty("year");
      expect(result.date).toBeTruthy();
      expect(typeof result.date).toEqual("number");
    });
  });

  describe("getRemappedDayIndex", () => {
    // javascript date gives value of 0-6 from sunday (0) to saturday (6).
    test.each([0, 1, 2, 3, 4, 5, 6])("should retrieve day index", (idx) => {
      //we remap it to be from mon [0] to sun [6]
      const expectedRemappedDays = [6, 0, 1, 2, 3, 4, 5];

      const result = getRemappedDayIndex(idx as DateDayNameIndex);
      expect(result).toEqual(expectedRemappedDays[idx]);
    });
  });
});
