import { useState } from "react";
import { useProductData } from "../../../context";
import { SearchItem } from "./SearchItem";

export const Search = () => {
  const [search, setSearch] = useState({ text: "", isFormShown: false });
  const { productDataState, productDataDispatch } = useProductData();

  const closeSearch = () => {
    setSearch({ text: "", isFormShown: false });
  };

  const changeHandler = (e) => {
    if (e.target.value.length >= 1) {
      setSearch({ isFormShown: true, text: e.target.value });
      productDataDispatch({ type: "SEARCH_PRODUCTS", payload: e.target.value });
    } else {
      closeSearch();
    }
  };

  return (
    <div className="header--input--container">
      <div
        className={`overlay ${search.isFormShown ? "" : "hide"}`}
        onClick={closeSearch}
      ></div>
      <input
        className="header--input"
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        autoComplete="off"
        value={search.text}
        onChange={(e) => changeHandler(e)}
      />
      <div className={`search--container ${search.isFormShown ? "" : "hide"}`}>
        {productDataState.searchData.length
          ? productDataState.searchData.map((item) => (
              <SearchItem
                item={item}
                closeSearch={closeSearch}
                key={item._id}
              />
            ))
          : "No products found"}
      </div>
    </div>
  );
};
