import { useWishlist } from "../../context";
import { calculateDiscount } from "../../utils";

import { WishListButton, CloseButton, CartButton } from "./components";

export const ProductCard = ({ product, wishListed }) => {
  const { wishlist } = useWishlist();

  if (
    wishListed === undefined &&
    wishlist.find((item) => item._id === product._id)
  ) {
    wishListed = true;
  }

  return (
    <>
      <div className="card card--badge">
        {wishListed ? (
          <CloseButton product={product} />
        ) : (
          <WishListButton product={product} />
        )}
        <div className="card--img--container">
          <img
            src={process.env.PUBLIC_URL + product.imgSrc}
            alt="T-shirt"
            className="img--res"
          />
        </div>
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
              ({calculateDiscount(product.actualPrice, product.discountedPrice)}
              %off)
            </div>
          </div>
        </div>
        <div className="card--btn">
          <CartButton product={product} />
        </div>
      </div>
    </>
  );
};
