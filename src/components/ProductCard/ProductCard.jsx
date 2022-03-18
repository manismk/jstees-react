const calculateDiscount = (actualPrice, discountedPrice) => {
  return Math.round((1 - discountedPrice / actualPrice) * 100);
};

export const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card card--badge">
        <button className="btn icon--btn icon--badge">
          <i className="fas fa-heart" aria-hidden="true"></i>
        </button>
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
          <button className="btn btn--primary w-100">Add to cart</button>
        </div>
      </div>
    </>
  );
};
