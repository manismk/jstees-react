import { useProductData } from "../../../context/product-data-context";

export const PriceSlider = () => {
  const { state, dispatch } = useProductData();

  const updateSlider = (e) => {
    dispatch({ type: "PRICE_CHANGE", payload: e.target.value });
  };

  return (
    <>
      <input
        className="slider m-b-1"
        type="range"
        min="0"
        max="1000"
        step="10"
        value={state.maxPrice}
        onChange={(e) => updateSlider(e)}
      />
    </>
  );
};
