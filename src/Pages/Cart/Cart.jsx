import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CouponModal } from "../../components/couponModal/CouponModal";
import { useCart } from "../../context";
import { calculateCartValue } from "../../utils";
import "./cart.css";
import { CartCard } from "./components/CartCard";

export const Cart = () => {
  const { cartList, setCartData, cartData } = useCart();
  const { actualAmount, discountAmount } = calculateCartValue();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCartData((prev) => ({
      ...prev,
      cartAmount: actualAmount - discountAmount,
      discountAmount,
    }));
    if (actualAmount - discountAmount > cartData.couponValue) {
      setCartData((prev) => ({
        ...prev,
        couponAmount: cartData.couponPercent * (actualAmount - discountAmount),
      }));
    } else {
      setCartData((prev) => ({
        ...prev,
        couponAmount: 0,
        couponValue: 0,
        couponPercent: 0,
      }));
    }
  }, [actualAmount, discountAmount]);
  return (
    <>
      <main className="container">
        <h1 className="heading--2 text--center m-t-2">My Cart</h1>
        {cartList.length ? (
          <div className="grid grid--2--cols m-v-2 ">
            <div className="cart--container">
              {cartList.map((product) => {
                return <CartCard product={product} key={product._id} />;
              })}
            </div>
            <div className="price--container">
              {cartData.couponAmount > 0 ? (
                ""
              ) : (
                <div className="coupon--container">
                  <p className="para--md">
                    <i className="fa fa-tag"></i> Apply coupon
                  </p>
                  <button
                    className="btn btn--primary"
                    onClick={() => setShowModal(true)}
                  >
                    Apply coupon
                  </button>
                </div>
              )}
              <div className="price--data">
                <h2 className="heading--3 m-b-1 text--center">Price details</h2>
                <div className="price--sub--container">
                  <p className="price--label">Price({cartList.length} item)</p>
                  <p className="price--amount">₹{actualAmount}</p>
                </div>
                <div className="price--sub--container">
                  <p className="price--label">Discount</p>
                  <p className="price--amount">-₹{discountAmount}</p>
                </div>
                {cartData.couponAmount > 0 && (
                  <div className="price--sub--container">
                    <p className="price--label ">
                      Coupon Discount
                      <button
                        className="btn icon--btn m-l-1 error--text text--bold"
                        onClick={() =>
                          setCartData((prev) => ({
                            ...prev,
                            couponAmount: 0,
                            couponPercent: 0,
                            couponValue: 0,
                          }))
                        }
                      >
                        <i className="fa fa-times " aria-hidden="true"></i>
                      </button>
                    </p>
                    <p className="price--amount">-₹{cartData.couponAmount}</p>
                  </div>
                )}
                <div className="price--sub--container">
                  <p className="price--label">Shipping</p>
                  <p className="price--amount">₹100</p>
                </div>
                <div className="price--sub--container price--total">
                  <p className="price--label">Total Amount</p>
                  <p className="price--amount">
                    ₹
                    {actualAmount -
                      discountAmount -
                      cartData.couponAmount +
                      100}
                  </p>
                </div>
                <button
                  className="btn btn--primary w-100 m-t-1"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="result--text text--center m-v-2">No Items in Cart</p>
        )}
        {showModal && <CouponModal closeModal={() => setShowModal(false)} />}
      </main>
    </>
  );
};
