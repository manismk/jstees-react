import { Navbar } from "../../components/Navbar/Navbar";
import "./singleProduct.css";
import normalTees from "../../assets/normalTees.jpg";

export const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="container grid grid--2--cols">
          <div className="product--image--container card--badge">
            <img className="img--res" src={normalTees} alt="Normal Tees" />
            <button className="btn icon--btn icon--badge">
              <i className="fas fa-heart" aria-hidden="true"></i>
            </button>
          </div>
          <div className="product--content">
            <div className="product--header">
              <h1 className="heading--3">Stylish Black Tees</h1>
              <div className="card--manufacturer">By LP fashion</div>
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
            <div className="product--description">
              <h3 className="heading--5 text--grey">Product Details</h3>
              <p>
                Classic fit, 100% combed cotton (heathers 15% viscose), shoulder
                to shoulder tape, double needle hems, preshrunk to minimize
                shrinkage
              </p>
              <h3 className="heading--5 text--grey">Material Details</h3>
              <p>100% Cotton - Heathers 85% Cotton, 15% Viscose</p>
              <h3 className="heading--5 text--grey">Delivery Details</h3>

              <ul className="list">
                <li>Shipping cost calculated at checkout</li>
                <li>Delivered within 7 days</li>
                <li>Shipping throughout India</li>
              </ul>

              <h3 className="heading--5 text--grey">Return Details</h3>
              <p>7 day return policy</p>
            </div>
            <button className="btn btn--primary w-100 m-t-1">
              Add to Cart
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
