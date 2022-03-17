import { useProductData } from "../../../context/product-data-context";

export const Category = () => {
  const { state, dispatch } = useProductData();

  const changeHandler = (e) => {
    dispatch({
      type: "CATEGORY_CHANGE",
      payload: e.target.value,
    });
  };

  return (
    <div className="filter--category m-v-1">
      <h4 className="heading--4">Category</h4>
      <div className="input--primary">
        <input
          type="checkbox"
          id="normalTees"
          name="normalTees"
          value="normal-tees"
          checked={state.category["normal-tees"]}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <label htmlFor="normalTees">Normal tees</label>
      </div>
      <div className="input--primary">
        <input
          type="checkbox"
          id="fullSleeveTees"
          name="fullSleeveTees"
          value="full-sleeve-tees"
          checked={state.category["full-sleeve-tees"]}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <label htmlFor="fullSleeveTees">Full sleeve tees</label>
      </div>
      <div className="input--primary">
        <input
          type="checkbox"
          id="pulloverHoodie"
          name="pulloverHoodie"
          value="pullover-hoodies"
          checked={state.category["pullover-hoodies"]}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <label htmlFor="pulloverHoodie">Pullover hoodies</label>
      </div>
      <div className="input--primary">
        <input
          type="checkbox"
          id="stencilHoodie"
          name="stencilHoodie"
          value="stencil-hoodies"
          checked={state.category["stencil-hoodies"]}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <label htmlFor="stencilHoodie">Stencil hoodies</label>
      </div>
    </div>
  );
};
