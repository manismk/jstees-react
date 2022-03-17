import {
  getCategoryData,
  getPriceData,
  getRatingData,
  getSortedData,
  getNewCategoryObj,
} from "../utils/index";

export const handleFilterChange = (allProducts, state, action) => {
  let newData = [];
  let { category, rating, maxPrice, sort } = state;
  if (action.type === "RATING_CHANGE") rating = action.payload;
  if (action.type === "CATEGORY_CHANGE")
    category = getNewCategoryObj(state, action);
  if (action.type === "PRICE_CHANGE") maxPrice = action.payload;

  newData = getCategoryData(allProducts, category);
  newData = getRatingData(newData, rating);
  newData = getPriceData(newData, maxPrice);
  return getSortedData(newData, sort);
};
