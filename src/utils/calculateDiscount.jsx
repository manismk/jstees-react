export const calculateDiscount = (actualPrice, discountedPrice) => {
  return Math.round((1 - discountedPrice / actualPrice) * 100);
};
