import { useState, useEffect } from "react";
import { useProductData } from "../../../context/product-data-context";

export const PriceSlider = () => {
  const { productDataState, productDataDispatch } = useProductData();
  const [sliderValue, setSliderValue] = useState({
    class: "hide",
    leftValue: productDataState.maxPrice / 10 - 2,
    bgValue: productDataState.maxPrice / 10,
  });

  useEffect(() => {
    updateSlider(productDataState.maxPrice);
  }, [productDataState.maxPrice]);

  const updateSlider = (value) => {
    setSliderValue((prev) => ({
      ...prev,
      class: "",
      leftValue: value / 10 - 2,
      bgValue: value / 10,
    }));
    productDataDispatch({ type: "PRICE_CHANGE", payload: value });
  };

  return (
    <div className="range">
      <h4 className="heading--4">Price</h4>
      <div className={`sliderValue ${sliderValue.class}`}>
        <span style={{ left: `${sliderValue.leftValue}%` }}>
          {productDataState.maxPrice}
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
        value={productDataState.maxPrice}
        onChange={(e) => updateSlider(e.target.value)}
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
