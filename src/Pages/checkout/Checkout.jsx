import { useCart } from "../../context";
import "./checkout.css";

const address = {
  userName: "John Doe's House",
  street: "59/1, 7th cross street",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "600028",
};

export const Checkout = () => {
  const { cartList, cartData } = useCart();

  return (
    <main className="container">
      <h1 className="heading--2 text--center m-t-2">Checkout</h1>
      {cartList?.length ? (
        <div className="grid grid--2--cols checkout--container m-v-2 ">
          <div className="address--container">
            <label>
              <input type="radio" defaultChecked />
              <span className="text--bold m-l-1">{address.userName}</span>
              <p>{address.street}</p>
              <p>{`${address.city}, ${address.state} - ${address.pincode}`}</p>
            </label>
          </div>
          <div className="price--container">
            <div className="price--data">
              <h2 className="heading--3 m-b-1 text--center">
                Order details ({cartList.length})
              </h2>
              {cartList.map((cartItem) => (
                <div className="price--sub--container" key={cartItem.id}>
                  <p className="price--label">{`${cartItem.title} x ${cartItem.qty}`}</p>
                  <p className="price--amount">
                    ₹{cartItem.actualPrice * cartItem.qty}
                  </p>
                </div>
              ))}
              <div className="price--sub--container">
                <p className="price--label">Discount</p>
                <p className="price--amount">-₹{cartData.discountAmount}</p>
              </div>
              {cartData.couponAmount > 0 && (
                <div className="price--sub--container">
                  <p className="price--label ">Coupon Discount</p>
                  <p className="price--amount">{cartData.couponAmount}</p>
                </div>
              )}
              <div className="price--sub--container">
                <p className="price--label">Shipping</p>
                <p className="price--amount">₹100</p>
              </div>
              <div className="price--sub--container price--total">
                <p className="price--label">Total Payable Amount</p>
                <p className="price--amount">
                  ₹{cartData.cartAmount - cartData.couponAmount + 100}
                </p>
              </div>
            </div>
            <div className="price--data">
              <h2 className="heading--3 m-v-1 text--center">Delivering To</h2>
              <p className="text--bold ">{address.userName}</p>
              <p>{address.street}</p>
              <p>{`${address.city}, ${address.state} - ${address.pincode}`}</p>
            </div>

            <button className="btn btn--primary w-100 m-t-1">
              Proceed to payment
            </button>
          </div>
        </div>
      ) : (
        <p className="result--text text--center m-v-2">No Items in Cart</p>
      )}
    </main>
  );
};
