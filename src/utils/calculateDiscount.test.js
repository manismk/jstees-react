import { calculateDiscount } from "./calculateDiscount";

test("Should get the discounted value", () => {
  const discount = calculateDiscount(7000, 5000);
  expect(discount).toBe(29);
});
