export const handleSearch = (allProducts, action) => {
  return allProducts.filter((item) =>
    item.title.toLowerCase().includes(action.payload.toLowerCase())
  );
};
