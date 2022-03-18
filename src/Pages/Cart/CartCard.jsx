export const CartCard = () => {
  return (
    <>
      <div className="card card--horizontal">
        <div className="card--img--container">
          <img
            src={process.env.PUBLIC_URL + "/assets/black-normal-tees.jpg"}
            alt="Man in Blue Suit"
            className="img--res"
          />
        </div>
        <div className="card--content--btn--container">
          <div className="card--content">
            <div className="card--title">Stylish Black Tess</div>
            <div className="card--manufacturer">By JS fashion</div>
            <div className="card--review--container">
              <div className="card--review--star">
                4.2
                <i className="far fa-star" aria-hidden="true"></i>
              </div>
              <div className="card--review--number">(256)</div>
            </div>
            <div className="card--price--container">
              <div className="actual--price">₹600</div>
              <div className="strike--price">₹1200</div>
              <div className="offer--percentage">(50%off)</div>
            </div>
          </div>
          <div className="cart--quantity">
            <label htmlFor="quantity">Quantity</label>
            <button className="btn btn--quantity">+</button>
            <input
              type="number"
              id="quantity"
              className="input--quantity"
              min="1"
              defaultValue="1"
            />

            <button className="btn btn--quantity">-</button>
          </div>
          <div className="card--btn">
            <button className="btn btn--secondary w-100 m-b-1">
              Move to wishlist
            </button>
            <button className="btn btn--secondary w-100">
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
