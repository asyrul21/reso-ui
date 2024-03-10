import React from "react";
import { fileIsRequired, fileMatchesAccept } from "../File";

describe("Form Validator >> Files >> Unit Tests", () => {
  describe("fileIsRequired", () => {
    test("should be true if file is provided", () => {
      const MockFile = new File(["test"], "test.png", { type: "image/png" });

      const { validationFn } = fileIsRequired;

      const result = validationFn(MockFile);

      expect(result).toBe(true);
    });

    test("should be false if undefined is provided", () => {
      const { validationFn } = fileIsRequired;

      const result = validationFn(undefined);

      expect(result).toBe(false);
    });
  });

  describe("fileMatchesAccept", () => {
    test("should be true if accept is .png extension", () => {
      const MockFile = new File(["test"], "test.png", { type: "image/png" });
      const testAccept = ".png";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result = validationFn(MockFile);
      expect(result).toBe(true);
    });

    test("should be true if accept is image/png mimetype", () => {
      const MockFile = new File(["test"], "test.png", { type: "image/png" });
      const testAccept = "image/png";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result = validationFn(MockFile);
      expect(result).toBe(true);
    });

    test("should be false if accept is .png extension but provided svg", () => {
      const MockFile = new File(["test"], "test.svg", { type: "image/svg" });
      const testAccept = ".png";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result = validationFn(MockFile);
      expect(result).toBe(false);
    });

    test("should be false if accept is image/png mimetype but provided svg", () => {
      const MockFile = new File(["test"], "test.svg", { type: "image/svg" });
      const testAccept = "image/png";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result = validationFn(MockFile);
      expect(result).toBe(false);
    });

    test("should be true if accept is mix mimetype and extension and provided correctly", () => {
      const MockFile1 = new File(["test"], "test.svg", { type: "image/svg" });
      const MockFile2 = new File(["test2"], "test.png", { type: "image/png" });

      const testAccept = ".svg, image/png";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result1 = validationFn(MockFile1);
      expect(result1).toBe(true);

      const result2 = validationFn(MockFile2);
      expect(result2).toBe(true);
    });

    test("should be false if accept is mix mimetype and extension and provided wrongly", () => {
      const MockFile1 = new File(["test"], "test.jpg", { type: "image/jpg" });

      const testAccept = ".svg, image/png";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result1 = validationFn(MockFile1);
      expect(result1).toBe(false);
    });

    test("should be true if accept is all mimetype", () => {
      const MockFile1 = new File(["test"], "test.svg", { type: "image/svg" });
      const MockFile2 = new File(["test2"], "test.png", { type: "image/png" });
      const MockFile3 = new File(["test3"], "test.pdf", {
        type: "application/pdf",
      });

      const testAccept = "*/*";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result1 = validationFn(MockFile1);
      expect(result1).toBe(true);

      const result2 = validationFn(MockFile2);
      expect(result2).toBe(true);

      const result3 = validationFn(MockFile3);
      expect(result3).toBe(true);
    });

    test("should validate correctly if accept has asterisk for type only", () => {
      const MockFile1 = new File(["test"], "test.svg", { type: "image/svg" });
      const MockFile2 = new File(["test2"], "test.png", { type: "image/png" });
      const MockFile3 = new File(["test3"], "test.pdf", {
        type: "application/pdf",
      });

      const testAccept = "image/*";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result1 = validationFn(MockFile1);
      expect(result1).toBe(true);

      const result2 = validationFn(MockFile2);
      expect(result2).toBe(true);

      const result3 = validationFn(MockFile3);
      expect(result3).toBe(false);
    });

    test("should validate jpg extension variations correctly", () => {
      const MockFile1 = new File(["test"], "test.jpeg", { type: "image/jpeg" });

      const testAccept = ".svg, .jpg";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result1 = validationFn(MockFile1);
      expect(result1).toBe(true);
    });

    test("should validate jpg extension variations correctly 2", () => {
      const MockFile1 = new File(["test"], "test.jpg", { type: "image/jpg" });

      const testAccept = ".svg, .jpeg";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result1 = validationFn(MockFile1);
      expect(result1).toBe(true);
    });

    test("should validate jpg mimetype variations correctly", () => {
      const MockFile1 = new File(["test"], "test.jpg", { type: "image/jpeg" });

      const testAccept = "image/jpg";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result1 = validationFn(MockFile1);
      expect(result1).toBe(true);
    });

    test("should validate jpg mimetype variations correctly 2", () => {
      const MockFile1 = new File(["test"], "test.jpg", { type: "image/jpg" });

      const testAccept = "image/jpeg";

      const { validationFn } = fileMatchesAccept(testAccept);

      const result1 = validationFn(MockFile1);
      expect(result1).toBe(true);
    });

    test("should throw error when invalid accept string is passed", () => {
      let error = undefined;
      try {
        const { validationFn } = fileMatchesAccept("my name is bob");
      } catch (e) {
        // console.log("error caught:", e.message);
        error = e;
      }

      expect(error).not.toBeUndefined();
    });
  });
});
