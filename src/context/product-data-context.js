import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

import { productDataReducer } from "../reducer/productDataReducer";

const ProductDataContext = createContext();

const ProductDataProvider = ({ children }) => {
  const [productDataState, productDataDispatch] = useReducer(
    productDataReducer,
    {
      data: [],
      sort: "default",
      category: {
        "normal-tees": false,
        "full-sleeve-tees": false,
        "pullover-hoodies": false,
        "crewneck-hoodies": false,
      },
      maxPrice: 1000,
      rating: "0",
      categories: [],
      searchData: [],
    }
  );
  const [productLoading, setProductLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setProductLoading(true);
        const { data } = await axios.get("/api/products");
        productDataDispatch({
          type: "LOAD_INITIAL_DATA",
          payload: data.products,
        });
        const res = await axios.get("/api/categories");
        productDataDispatch({
          type: "LOAD_INITIAL_CATEGORY",
          payload: res.data.categories,
        });
        setProductLoading(false);
      } catch (e) {
        console.log("Error in getting initial data", e);
      }
    })();
  }, []);

  return (
    <ProductDataContext.Provider
      value={{ productDataState, productDataDispatch, productLoading }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};

const useProductData = () => useContext(ProductDataContext);

export { useProductData, ProductDataProvider };
