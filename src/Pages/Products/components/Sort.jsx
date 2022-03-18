import { useProductData } from "../../../context/product-data-context";
import { InputRadioButton } from "../../../components/Input/InputRadioButton";

export const Sort = () => {
  const { state, dispatch } = useProductData();
  return (
    <div className="filter--sort m-v-1">
      <h4 className="heading--4">Sort by</h4>
      <InputRadioButton
        changeHandler={(e) =>
          dispatch({
            type: "LOW_TO_HIGH",
            payload: e.target.value,
          })
        }
        id="lowtohigh"
        value="lowtohigh"
        labelName="Price: low to high"
        name="sortBy"
        checkedState={state.sort === "lowtohigh" ? true : false}
      />
      <InputRadioButton
        changeHandler={(e) =>
          dispatch({
            type: "HIGH_TO_LOW",
            payload: e.target.value,
          })
        }
        id="hightolow"
        value="hightolow"
        labelName="Price: high to low"
        name="sortBy"
        checkedState={state.sort === "hightolow" ? true : false}
      />
    </div>
  );
};
