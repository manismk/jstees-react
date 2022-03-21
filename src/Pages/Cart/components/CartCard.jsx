import { useCart, useWishlist } from "../../../context";
import { calculateDiscount } from "../../../utils";

export const CartCard = ({ product }) => {
  const { handleCartDeletion, handleCartQuantityChange } = useCart();
  const { wishlist, handleAddWishlist } = useWishlist();
  let wishListed = false;

  if (wishlist.find((item) => item._id === product._id)) {
    wishListed = true;
  }

  return (
    <>
      <div className="card card--horizontal">
        <div className="card--img--container">
          <img
            src={process.env.PUBLIC_URL + product.imgSrc}
            alt="T-shirt"
            className="img--res"
          />
        </div>
        <div className="card--content--btn--container">
          <div className="card--content">
            <div className="card--title">{product.title}</div>
            <div className="card--manufacturer">By {product.make}</div>
            <div className="card--review--container">
              <div className="card--review--star">
                {product.rating}
                <i className="fas fa-star" aria-hidden="true"></i>
              </div>
              <div className="card--review--number">(256)</div>
            </div>
            <div className="card--price--container">
              <div className="actual--price">₹{product.discountedPrice}</div>
              <div className="strike--price">₹{product.actualPrice}</div>
              <div className="offer--percentage">
                (
                {calculateDiscount(
                  product.actualPrice,
                  product.discountedPrice
                )}
                %off)
              </div>
            </div>
          </div>
          <div className="cart--quantity">
            <label htmlFor="quantity">Quantity</label>
            <button
              className={`btn btn--quantity ${
                product.qty <= 1 ? "btn--disabled" : ""
              }`}
              onClick={() => {
                handleCartQuantityChange(product, "decrement");
              }}
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              className="input--quantity"
              min="1"
              value={product.qty}
              disabled
            />
            <button
              className="btn btn--quantity"
              onClick={() => {
                handleCartQuantityChange(product, "increment");
              }}
            >
              +
            </button>
          </div>
          <div className="card--btn">
            <button
              className={`btn btn--secondary w-100 m-b-1 ${
                wishListed ? "btn--disabled" : ""
              }`}
              onClick={() => {
                handleAddWishlist(product);
                handleCartDeletion(product);
              }}
            >
              {wishListed ? "Already in wishlist" : "Move to wishlist"}
            </button>
            <button
              className="btn btn--secondary w-100"
              onClick={() => {
                handleCartDeletion(product);
              }}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
