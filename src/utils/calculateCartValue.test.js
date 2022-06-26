import { calculateCartValue } from "./calculateCartValue";

test("Should get the actual and discounted amount for cart list", () => {
  let cartList = [
    {
      _id: 1,
      actualPrice: "900",
      discountedPrice: "500",
      qty: "3",
    },
    {
      _id: 2,
      actualPrice: "1200",
      discountedPrice: "400",
      qty: "2",
    },
  ];
  const result = calculateCartValue(cartList);
  expect(result).toStrictEqual({ actualAmount: 5100, discountAmount: 2800 });
});
