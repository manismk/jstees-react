export const getPriceData = (data, maxPrice) => {
  return data.filter(
    (item) => Number(item.discountedPrice) <= Number(maxPrice)
  );
};
