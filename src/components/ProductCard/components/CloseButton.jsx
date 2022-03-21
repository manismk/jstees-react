import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import { useWishlist } from "../../../context/wishlist-context";

export const CloseButton = ({ product }) => {
  const { authData } = useAuth();
  const [isDisabled, setDisabled] = useState(false);
  const { handleDeleteWishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <button
      className="btn icon--btn icon--badge"
      disabled={isDisabled}
      onClick={(e) => {
        e.stopPropagation();
        authData.isLoggedIn
          ? (setDisabled((prev) => !prev), handleDeleteWishlist(product))
          : navigate("/login");
      }}
    >
      <i className="fas fa-close" aria-hidden="true"></i>
    </button>
  );
};
