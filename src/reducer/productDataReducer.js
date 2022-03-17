import {
  getNewCategoryObj,
  getSortedData,
  handleFilterChange,
} from "../utils/index";

let allProductData = [];

export const productDataReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_INITIAL_DATA":
      allProductData = action.payload;
      return { ...state, data: action.payload };

    case "HIGH_TO_LOW":
      return {
        ...state,
        sort: action.payload,
        data: getSortedData(state.data, action.payload),
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        sort: action.payload,
        data: getSortedData(state.data, action.payload),
      };

    case "RATING_CHANGE":
      return {
        ...state,
        rating: action.payload,
        data: handleFilterChange(allProductData, state, action),
      };
    case "CATEGORY_CHANGE":
      return {
        ...state,
        category: getNewCategoryObj(state, action),
        data: handleFilterChange(allProductData, state, action),
      };

    case "PRICE_CHANGE":
      return {
        ...state,
        maxPrice: action.payload,
        data: handleFilterChange(allProductData, state, action),
      };
    case "CLEAR_ALL":
      return {
        ...state,
        data: allProductData,
        sort: "default",
        category: {
          "normal-tees": false,
          "full-sleeve-tees": false,
          "pullover-hoodies": false,
          "stencil-hoodies": false,
        },
        maxPrice: 1000,
        rating: "0",
      };
    default:
      return state;
  }
};
