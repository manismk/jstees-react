import { useProductData } from "../../../context/product-data-context";
import { Category, Sort, PriceSlider, Ratings } from "./index";

export const Filters = () => {
  const { dispatch } = useProductData();
  return (
    <>
      <button className="filter--button">
        Filter <i className="fas fa-arrow-right"></i>
      </button>
      <div className="overlay hide"></div>
      <section className="filter--section">
        <button className="filter--close">&times;</button>
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
