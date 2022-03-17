import { useProductData } from "../../../context/product-data-context";

export const Ratings = () => {
  const { state, dispatch } = useProductData();

  const changeHandler = (e) => {
    dispatch({ type: "RATING_CHANGE", payload: e.target.value });
  };
  return (
    <div className="filter--rating m-v-1">
      <h4 className="heading--4">Rating</h4>
      <div className="input--primary">
        <input
          type="radio"
          name="starRating"
          id="4star"
          value="4"
          checked={state.rating === "4" ? true : false}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <label htmlFor="4star">4 star & above</label>
      </div>
      <div className="input--primary">
        <input
          type="radio"
          name="starRating"
          id="3star"
          value="3"
          checked={state.rating === "3" ? true : false}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <label htmlFor="3star">3 star & above</label>
      </div>
      <div className="input--primary">
        <input
          type="radio"
          name="starRating"
          id="2star"
          value="2"
          checked={state.rating === "2" ? true : false}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <label htmlFor="2star">2 star & above</label>
      </div>
      <div className="input--primary">
        <input
          type="radio"
          name="starRating"
          id="1star"
          value="1"
          checked={state.rating === "1" ? true : false}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <label htmlFor="1star">1 star & above</label>
      </div>
    </div>
  );
};
