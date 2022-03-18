import { useState } from "react";
import { useProductData } from "../../../context/product-data-context";
import { Category, Sort, PriceSlider, Ratings } from "./index";

const toggleFilter = () => {};

export const Filters = () => {
  const { dispatch } = useProductData();
  const [isFilterShown, setFilter] = useState(false);
  return (
    <>
      <button
        className="filter--button"
        onClick={() => setFilter((prev) => !prev)}
      >
        Filter <i className="fas fa-arrow-right"></i>
      </button>
      <div
        className={`overlay ${isFilterShown ? "" : "hide"}`}
        onClick={() => setFilter((prev) => !prev)}
      ></div>
      <section className={`filter--section ${isFilterShown ? "open" : ""}`}>
        <button
          className="filter--close "
          onClick={() => setFilter((prev) => !prev)}
        >
          &times;
        </button>
        <div className="filter--header m-v-1">
          <h3 className="heading--3">Filter</h3>
          <button
            className="btn btn--clear"
            onClick={() => {
              dispatch({ type: "CLEAR_ALL" });
            }}
          >
            Clear
          </button>
        </div>
        <PriceSlider />
        <Category />
        <Ratings />
        <Sort />
      </section>
    </>
  );
};
