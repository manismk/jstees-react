import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth, useCart } from "../../../context";

export const CartButton = ({ product }) => {
  const { authData } = useAuth();
  const { cartList, handleCartAddition } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonText, setButtonText] = useState("Add to cart");

  useEffect(() => {
    if (cartList.find((item) => item._id === product._id)) {
      location.pathname === "/wishlist"
        ? setButtonText("Already in cart")
        : setButtonText("Go to Cart");
    } else {
      setButtonText("Add to cart");
    }
  }, [cartList]);

  return (
    <button
      className={`btn btn--primary w-100 ${
        buttonText === "Adding" || buttonText === "Already in cart"
          ? "btn--disabled"
          : ""
      }`}
      onClick={(e) => {
        e.stopPropagation();
        if (authData.isLoggedIn) {
          buttonText === "Add to cart"
            ? (setButtonText("Adding"), handleCartAddition(product))
            : navigate("/cart");
        } else {
          navigate("/login", { replace: true });
        }
      }}
    >
      {buttonText}
    </button>
  );
};
