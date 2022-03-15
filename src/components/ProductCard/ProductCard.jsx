import normalTees from "../../assets/normalTees.jpg";

export const ProductCard = () => {
  return (
    <>
      <div className="card card--badge">
        <button className="btn icon--btn icon--badge">
          <i className="fas fa-heart" aria-hidden="true"></i>
        </button>
        <div className="card--img--container">
          <img src={normalTees} alt="T-shirt" className="img--res" />
        </div>
        <div className="card--content">
          <div className="card--title">Stylish Black Tees</div>
          <div className="card--manufacturer">By Js fashion</div>
          <div className="card--review--container">
            <div className="card--review--star">
              4.2
              <i className="fas fa-star" aria-hidden="true"></i>
            </div>
            <div className="card--review--number">(256)</div>
          </div>
          <div className="card--price--container">
            <div className="actual--price">₹600</div>
            <div className="strike--price">₹1200</div>
            <div className="offer--percentage">(50%off)</div>
          </div>
        </div>
        <div className="card--btn">
          <button className="btn btn--primary w-100">Add to cart</button>
        </div>
      </div>
    </>
  );
};
