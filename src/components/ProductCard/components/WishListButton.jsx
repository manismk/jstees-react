import { useState } from "react";
import { useWishlist } from "../../../context/wishlist-context";
import { useAuth } from "../../../context/auth-context";
import { useNavigate } from "react-router-dom";

export const WishListButton = ({ product }) => {
  const { authData } = useAuth();
  const navigate = useNavigate();
  const [isDisabled, setDisabled] = useState(false);
  const { handleAddWishlist } = useWishlist();
  return (
    <button
      className="btn icon--btn icon--badge"
      disabled={isDisabled}
      onClick={() => {
        if (!authData.isLoggedIn) {
          navigate("/login");
        }
        if (authData.isLoggedIn) {
          setDisabled((prev) => !prev);
          handleAddWishlist(product);
        }
      }}
    >
      <i className="fas fa-heart" aria-hidden="true"></i>
    </button>
  );
};
