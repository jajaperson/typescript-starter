import { sum } from "./main";

describe("sum", () => {
  it("returns the sum of two numbers", () => {
    const x = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 20);

    expect(sum(x, y)).toBe(x + y);
  });
});
