import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { authData } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (authData.isLoggedIn) {
      (async () => {
        try {
          const { data, status } = await axios.get(`/api/user/wishlist`, {
            headers: { authorization: localStorage.getItem("token") },
          });
          if (status === 200) {
            setWishlist(data.wishlist);
          }
        } catch (e) {
          setWishlist([]);
          console.error("Error in Getting Wishlist", e);
        }
      })();
    } else {
      setWishlist([]);
    }
  }, [authData.isLoggedIn]);

  const handleAddWishlist = (product) => {
    (async () => {
      try {
        if (!wishlist.find((item) => item._id === product._id)) {
          const { data, status } = await axios.post(
            "/api/user/wishlist",
            {
              product,
            },
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          if (status === 201) {
            setWishlist(data.wishlist);
          }
        }
      } catch (e) {
        console.error("Error in Adding wishlist", e);
      }
    })();
  };
  const handleDeleteWishlist = (product) => {
    (async () => {
      try {
        const { status, data } = await axios.delete(
          `/api/user/wishlist/${product._id}`,
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        );
        if (status === 200) {
          setWishlist(data.wishlist);
        }
      } catch (e) {
        console.error("Error in Deleting wishlist", e);
      }
    })();
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, handleAddWishlist, handleDeleteWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
