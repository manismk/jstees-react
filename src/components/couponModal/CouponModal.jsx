import { useState, useEffect } from "react";
import { useCart } from "../../context";
import { InputRadioButton } from "../Input/InputRadioButton";
import "./couponModal.css";

const couponData = [
  {
    id: 1,
    coupon: "SAVE10",
    description: "Get 10% OFF on orders above ",
    value: 1000,
    percent: 10,
  },
  {
    id: 2,
    coupon: "SAVE20",
    description: "Get 20% OFF on orders above ",
    value: 2500,
    percent: 20,
  },
  {
    id: 3,
    coupon: "FLAT30",
    description: "Get 30% OFF on orders above ",
    value: 10000,
    percent: 30,
  },
];

const couponHandler = (
  couponValue,
  cartData,
  setCartData,
  setError,
  closeModal
) => {
  couponValue === undefined
    ? setError("Select Any One Coupon")
    : (setCartData((prev) => ({
        ...prev,
        couponAmount:
          (couponData.find((cou) => cou.coupon === couponValue).percent / 100) *
          cartData.cartAmount,
        couponPercent:
          couponData.find((cou) => cou.coupon === couponValue).percent / 100,
        couponValue: couponData.find((cou) => cou.coupon === couponValue).value,
      })),
      closeModal());
};

export const CouponModal = ({ closeModal }) => {
  const { cartData, setCartData } = useCart();
  const [couponValue, setCouponValue] = useState();
  const [error, setError] = useState("");

  const availableCoupons = couponData.filter(
    ({ value }) => cartData.cartAmount >= value
  );
  const unAvailableCoupons = couponData.filter(
    ({ value }) => cartData.cartAmount < value
  );

  return (
    <>
      <div className="modal modal--alert modal--coupon z-5">
        {availableCoupons.length > 0 && (
          <>
            <h5 className="modal--heading heading--4 text--center">
              Available Coupons
            </h5>
            {availableCoupons.map(({ coupon, description, id, value }) => (
              <div key={id}>
                <InputRadioButton
                  id={coupon}
                  labelName={coupon + " " + description + value}
                  name="coupon"
                  value={coupon}
                  checkedState={couponValue === coupon}
                  changeHandler={(e) => {
                    setCouponValue(e.target.value);
                    setError("");
                  }}
                />
              </div>
            ))}
            {error.length > 0 && (
              <p className="text--center error--text text--bold">{error}</p>
            )}
            <button
              className="btn btn--primary w-100 m-v-1"
              onClick={() =>
                couponHandler(
                  couponValue,
                  cartData,
                  setCartData,
                  setError,
                  closeModal
                )
              }
            >
              Apply coupon
            </button>
          </>
        )}
        {unAvailableCoupons.length > 0 && (
          <>
            <h5 className="modal--heading heading--4 text--center">
              Purchase More To Unlock These coupon
            </h5>
            {unAvailableCoupons.map(({ coupon, description, id, value }) => (
              <div key={id}>
                <p>{coupon + "-" + description + value}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="overlay" onClick={closeModal}></div>
    </>
  );
};
