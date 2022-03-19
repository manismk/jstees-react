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
      onClick={() => {
        if (!authData.isLoggedIn) {
          navigate("/login");
        }
        if (authData.isLoggedIn) {
          setDisabled((prev) => !prev);
          handleDeleteWishlist(product);
        }
      }}
    >
      <i className="fas fa-close" aria-hidden="true"></i>
    </button>
  );
};
