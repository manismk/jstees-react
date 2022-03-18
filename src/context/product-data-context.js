import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";

import { productDataReducer } from "../reducer/productDataReducer";

const ProductDataContext = createContext();

const ProductDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productDataReducer, {
    data: [],
    sort: "default",
    category: {
      "normal-tees": false,
      "full-sleeve-tees": false,
      "pullover-hoodies": false,
      "stencil-hoodies": false,
    },
    maxPrice: 1000,
    rating: "0",
  });

  useEffect(async () => {
    try {
      const { data } = await axios.get("/api/products");
      dispatch({ type: "LOAD_INITIAL_DATA", payload: data.products });
    } catch (e) {
      console.log("Error in getting initial data", e);
    }
  }, []);

  return (
    <ProductDataContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductDataContext.Provider>
  );
};

const useProductData = () => useContext(ProductDataContext);

export { useProductData, ProductDataProvider };
