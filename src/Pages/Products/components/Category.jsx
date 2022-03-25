import { InputCheckbox } from "../../../components/Input/InputCheckbox";
import { useProductData } from "../../../context/product-data-context";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const Category = () => {
  const { productDataState, productDataDispatch, productLoading } =
    useProductData();
  const [searchParam] = useSearchParams();

  useEffect(() => {
    productDataDispatch({
      type: "CLEAR_ALL",
    });

    if (searchParam.get("category") !== null && productDataState.data.length) {
      Object.keys(productDataState.category).map((category) => {
        if (category === searchParam.get("category")) {
          productDataDispatch({
            type: "CATEGORY_CHANGE",
            payload: category,
          });
        }
      });
    }
  }, [searchParam, productLoading]);

  const changeHandler = (e) => {
    productDataDispatch({
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
        checkedState={productDataState.category["normal-tees"]}
        labelName="Normal Tees"
      />
      <InputCheckbox
        changeHandler={changeHandler}
        id="fullSleeveTees"
        value="full-sleeve-tees"
        checkedState={productDataState.category["full-sleeve-tees"]}
        labelName="Full Sleeve Tees"
      />
      <InputCheckbox
        changeHandler={changeHandler}
        id="pullOverHoodies"
        value="pullover-hoodies"
        checkedState={productDataState.category["pullover-hoodies"]}
        labelName="Pullover Hoodies"
      />
      <InputCheckbox
        changeHandler={changeHandler}
        id="crewneckHoodies"
        value="crewneck-hoodies"
        checkedState={productDataState.category["crewneck-hoodies"]}
        labelName="Crewneck Hoodies"
      />
    </div>
  );
};
