import multiples from "./multiples";

test("Sum of multiples of 3 or 5 below input number", () => {
  expect(multiples(10)).toBe(23);
  expect(multiples(-1)).toBe(0);
});
