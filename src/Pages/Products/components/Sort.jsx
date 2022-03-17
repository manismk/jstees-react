import { useProductData } from "../../../context/product-data-context";

export const Sort = () => {
  const { state, dispatch } = useProductData();
  return (
    <div className="filter--sort m-v-1">
      <h4 className="heading--4">Sort by</h4>
      <div className="input--primary">
        <input
          type="radio"
          name="sortBy"
          value="lowtohigh"
          id="lowHigh"
          checked={state.sort === "lowtohigh" ? true : false}
          onChange={(e) => {
            dispatch({ type: "LOW_TO_HIGH", payload: e.target.value });
          }}
        />
        <label htmlFor="lowHigh">Price: low to high</label>
      </div>
      <div className="input--primary">
        <input
          type="radio"
          name="sortBy"
          id="highLow"
          value="hightolow"
          checked={state.sort === "hightolow" ? true : false}
          onChange={(e) => {
            dispatch({ type: "HIGH_TO_LOW", payload: e.target.value });
          }}
        />
        <label htmlFor="highLow">Price: high to low</label>
      </div>
    </div>
  );
};
