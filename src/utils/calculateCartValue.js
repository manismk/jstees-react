export const calculateCartValue = (cartList) => {
  return cartList.reduce(
    (acc, curr) => {
      return {
        ...acc,
        actualAmount: acc.actualAmount + Number(curr.actualPrice) * curr.qty,
        discountAmount:
          acc.discountAmount +
          (Number(curr.actualPrice) - Number(curr.discountedPrice)) * curr.qty,
      };
    },
    { actualAmount: 0, discountAmount: 0 }
  );
};
