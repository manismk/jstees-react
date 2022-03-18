export const getSortedData = (data, sortType) => {
  if (sortType === "lowtohigh")
    return [...data].sort(
      (a, b) => Number(a.discountedPrice) - Number(b.discountedPrice)
    );
  if (sortType === "hightolow")
    return [...data].sort(
      (a, b) => Number(b.discountedPrice) - Number(a.discountedPrice)
    );
  return data;
};
