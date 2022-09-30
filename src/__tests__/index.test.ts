import { run } from "../index";

describe("test", () => {
  test("do something", () => {
    const result = run();
    expect(result).toBe("it works");
  });
});
