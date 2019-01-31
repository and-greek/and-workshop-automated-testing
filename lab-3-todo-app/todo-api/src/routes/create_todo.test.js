const errorFormatter = require("../validators/error_formatter");
const Todo = require("../models/todo");
const { validationResult } = require("express-validator/check");

jest.mock("express-validation/check/validation-result");

describe("create Todos", () => {
  const mockNext = jest.fn();
  const mockJson = jest.fn();
  const req = {};
  const res = { json: mockJson };

  beforeEach(() => {
    mockNext.mockClear();
    mockJson.mockClear();
  });

  describe(
    "Given the error object is empty" +
      "When the create todo method runs" +
      "Then the status should be 400",
    () => {
      jest.spyOn(validationResult, "find").mockReturnValue(Promise.resolve());
    }
  );
});
