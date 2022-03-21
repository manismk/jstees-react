import { useState } from "react";
import { useProductData } from "../../../context/product-data-context";

export const PriceSlider = () => {
  const { state, dispatch } = useProductData();
  const [sliderValue, setSliderValue] = useState({
    class: "hide",
    leftValue: state.maxPrice / 10 - 2,
    bgValue: state.maxPrice / 10,
  });

  const updateSlider = (e) => {
    setSliderValue((prev) => ({
      ...prev,
      class: "",
      leftValue: e.target.value / 10 - 2,
      bgValue: e.target.value / 10,
    }));
    dispatch({ type: "PRICE_CHANGE", payload: e.target.value });
  };

  return (
    <div className="range">
      <div className={`sliderValue ${sliderValue.class}`}>
        <span style={{ left: `${sliderValue.leftValue}%` }}>
          {state.maxPrice}
        </span>
      </div>
      <input
        className="slider "
        type="range"
        min="0"
        max="1000"
        step="10"
        style={{
          background: `linear-gradient(
            to right,
            var(--info-dark) 0%,
            var(--info-dark) ${sliderValue.bgValue}%,
            var(--info-light) ${sliderValue.bgValue}%,
            var(--info-light) 100%`,
        }}
        value={state.maxPrice}
        onChange={(e) => updateSlider(e)}
        onBlur={() => setSliderValue((prev) => ({ ...prev, class: "hide" }))}
        onFocus={() => setSliderValue((prev) => ({ ...prev, class: "" }))}
      />
      <div className="sliderLabels">
        <span>0</span>
        <span>1000</span>
      </div>
    </div>
  );
};
