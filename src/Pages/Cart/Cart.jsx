import { Navbar } from "../../components/Navbar/Navbar";
import "./cart.css";
import { CartCard } from "./CartCard";

export const Cart = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1 className="heading--2 text--center m-t-2">My Cart</h1>
        <div className="grid grid--2--cols m-v-2">
          <div className="cart--container">
            <CartCard />
            <CartCard />
          </div>
          <div className="price--container">
            <h2 className="heading--3 m-b-1 text--center">Price details</h2>
            <div className="price--sub--container">
              <p className="price--label">Price(2 items)</p>
              <p className="price--amount">₹2400</p>
            </div>
            <div className="price--sub--container">
              <p className="price--label">Discount</p>
              <p className="price--amount">-₹1200</p>
            </div>
            <div className="price--sub--container">
              <p className="price--label">Shipping</p>
              <p className="price--amount">₹100</p>
            </div>
            <div className="price--sub--container price--total">
              <p className="price--label">Total Amount</p>
              <p className="price--amount">₹1300</p>
            </div>
            <button className="btn btn--primary w-100 m-t-1">
              Place Order
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
