import { InputRadioButton } from "../../../components/Input/InputRadioButton";
import { useProductData } from "../../../context/product-data-context";

export const Ratings = () => {
  const { productDataState, productDataDispatch } = useProductData();

  const changeHandler = (e) => {
    productDataDispatch({ type: "RATING_CHANGE", payload: e.target.value });
  };
  return (
    <div className="filter--rating m-v-1">
      <h4 className="heading--4">Rating</h4>

      <InputRadioButton
        changeHandler={changeHandler}
        id="4star"
        value="4"
        labelName="4 star & above"
        name="starRating"
        checkedState={productDataState.rating === "4" ? true : false}
      />
      <InputRadioButton
        changeHandler={changeHandler}
        id="3star"
        value="3"
        labelName="3 star & above"
        name="starRating"
        checkedState={productDataState.rating === "3" ? true : false}
      />
      <InputRadioButton
        changeHandler={changeHandler}
        id="2star"
        value="2"
        labelName="2 star & above"
        name="starRating"
        checkedState={productDataState.rating === "2" ? true : false}
      />
      <InputRadioButton
        changeHandler={changeHandler}
        id="1star"
        value="1"
        labelName="1 star & above"
        name="starRating"
        checkedState={productDataState.rating === "1" ? true : false}
      />
    </div>
  );
};
