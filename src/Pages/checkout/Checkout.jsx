import { useAuth, useCart } from "../../context";
import "./checkout.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const address = {
  userName: "John Doe's House",
  street: "59/1, 7th cross street",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "600028",
};

export const Checkout = () => {
  const { cartList, cartData, setCartData, handleCartDeletion } = useCart();
  const { authData } = useAuth();
  const navigate = useNavigate();

  async function loadRazorPay() {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function payViaRazorPay() {
    const response = await loadRazorPay();
    if (!response) return console.error("Error in loading razorpay sdk");
    var options = {
      key_id: "rzp_test_CJOl9s5EvJy4oC",
      key: "rzp_test_CJOl9s5EvJy4oC",
      key_secret: "o0cKBLTsSo1SY2MI1ihIs2Ta",
      amount: (cartData.cartAmount - cartData.couponAmount + 100) * 100,
      currency: "INR",
      name: "JS TEES",
      description: "Keep coding ! Happy Building !!",
      image: "https://jstees-react.netlify.app/favicon.ico",

      handler: function (response) {
        cartList.map((product) => handleCartDeletion(product, true));
        setCartData((prev) => ({ ...prev, couponPercent: 0 }));
        toast.success(
          `Payment has been Made successfully. Your payment Id is ${response.razorpay_payment_id}. Order will reach you in next 7 days. Thanks for purchasing with us`,
          { autoClose: 3000 }
        );
        navigate("/");
      },
      prefill: {
        name: `${authData?.userData?.firstName} ${authData?.userData?.lastName}`,
        email: authData?.userData?.email,
        contact: "9876543210",
      },
      theme: {
        color: "#fea620",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

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

            <button
              className="btn btn--primary w-100 m-t-1"
              onClick={() => payViaRazorPay()}
            >
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
