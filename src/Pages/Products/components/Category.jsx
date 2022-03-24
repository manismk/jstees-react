import { InputCheckbox } from "../../../components/Input/InputCheckbox";
import { useProductData } from "../../../context/product-data-context";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const Category = () => {
  const { state, dispatch, productLoading } = useProductData();
  const [searchParam] = useSearchParams();

  useEffect(() => {
    dispatch({
      type: "CLEAR_ALL",
    });

    if (searchParam.get("category") !== null && state.data.length) {
      Object.keys(state.category).map((category) => {
        if (category === searchParam.get("category")) {
          dispatch({
            type: "CATEGORY_CHANGE",
            payload: category,
          });
        }
      });
    }
  }, [searchParam, productLoading]);

  const changeHandler = (e) => {
    dispatch({
      type: "CATEGORY_CHANGE",
      payload: e.target.value,
    });
  };

  return (
    <div className="filter--category m-v-1">
      <h4 className="heading--4">Category</h4>

      <InputCheckbox
        changeHandler={changeHandler}
        id="normalTees"
        value="normal-tees"
        checkedState={state.category["normal-tees"]}
        labelName="Normal Tees"
      />
      <InputCheckbox
        changeHandler={changeHandler}
        id="fullSleeveTees"
        value="full-sleeve-tees"
        checkedState={state.category["full-sleeve-tees"]}
        labelName="Full Sleeve Tees"
      />
      <InputCheckbox
        changeHandler={changeHandler}
        id="pullOverHoodies"
        value="pullover-hoodies"
        checkedState={state.category["pullover-hoodies"]}
        labelName="Pullover Hoodies"
      />
      <InputCheckbox
        changeHandler={changeHandler}
        id="crewneckHoodies"
        value="crewneck-hoodies"
        checkedState={state.category["crewneck-hoodies"]}
        labelName="Crewneck Hoodies"
      />
    </div>
  );
};
