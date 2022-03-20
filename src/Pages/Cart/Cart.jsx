import { Navbar } from "../../components/Navbar/Navbar";
import { useCart } from "../../context";
import { calculateCartValue } from "../../utils";
import "./cart.css";
import { CartCard } from "./components/CartCard";

export const Cart = () => {
  const { cartList } = useCart();
  const { actualAmount, discountAmount } = calculateCartValue();
  return (
    <>
      <Navbar />
      <main className="container">
        <h1 className="heading--2 text--center m-t-2">My Cart</h1>
        {cartList.length ? (
          <div className="grid grid--2--cols m-v-2 m-r-1">
            <div className="cart--container">
              {cartList.map((product) => {
                return <CartCard product={product} key={product._id} />;
              })}
            </div>
            <div className="price--container">
              <h2 className="heading--3 m-b-1 text--center">Price details</h2>
              <div className="price--sub--container">
                <p className="price--label">Price({cartList.length} item)</p>
                <p className="price--amount">₹{actualAmount}</p>
              </div>
              <div className="price--sub--container">
                <p className="price--label">Discount</p>
                <p className="price--amount">-₹{discountAmount}</p>
              </div>
              <div className="price--sub--container">
                <p className="price--label">Shipping</p>
                <p className="price--amount">₹100</p>
              </div>
              <div className="price--sub--container price--total">
                <p className="price--label">Total Amount</p>
                <p className="price--amount">
                  ₹{actualAmount - discountAmount + 100}
                </p>
              </div>
              <button className="btn btn--primary w-100 m-t-1">
                Place Order
              </button>
            </div>
          </div>
        ) : (
          "No items in cart"
        )}
      </main>
    </>
  );
};
