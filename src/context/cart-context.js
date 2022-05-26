import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "./auth-context";

const { createContext, useContext, useState, useEffect } = require("react");

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { authData } = useAuth();
  const [cartList, setCartList] = useState([]);
  const [cartData, setCartData] = useState({
    cartAmount: 0,
    discountAmount: 0,
    couponAmount: 0,
    couponPercent: 0,
    couponValue: 0,
  });

  useEffect(() => {
    if (authData.isLoggedIn) {
      (async () => {
        try {
          const { data, status } = await axios.get(`/api/user/cart`, {
            headers: { authorization: localStorage.getItem("token") },
          });
          if (status === 200) {
            setCartList(data.cart);
          }
        } catch (e) {
          setCartList([]);
          console.error("Error in Getting Cart data while the user changes", e);
          toast.error("User not found.Try logging in again", {
            autoClose: false,
          });
        }
      })();
    } else {
      setCartList([]);
    }
  }, [authData.isLoggedIn]);

  const handleCartAddition = (product) => {
    (async () => {
      try {
        if (!cartList.find((item) => item._id === product._id)) {
          const { status, data } = await axios.post(
            "/api/user/cart",
            {
              product,
            },
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          if (status === 201) {
            setCartList(data.cart);
            toast.success("Added to cart");
          }
        }
      } catch (e) {
        console.error("Error in Adding item in cart", e);
        toast.error("Something Went wrong", { autoClose: false });
      }
    })();
  };

  const handleCartDeletion = (product, notShowToast) => {
    (async () => {
      try {
        const { status, data } = await axios.delete(
          `/api/user/cart/${product._id}`,
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        );

        if (status === 200) {
          setCartList(data.cart);
          !notShowToast && toast.error("Removed from cart");
        }
      } catch (e) {
        console.error("Error in Deleting cart Item", e);
        toast.error("Something Went wrong", { autoClose: false });
      }
    })();
  };

  const handleCartQuantityChange = (product, changeType) => {
    (async () => {
      try {
        const { status, data } = await axios.post(
          `/api/user/cart/${product._id}`,
          {
            action: { type: changeType },
          },
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        );
        if (status === 200) {
          setCartList(data.cart);
        }
      } catch (e) {
        console.error("Error in Quantity change in cart ", e);
      }
    })();
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        handleCartAddition,
        handleCartDeletion,
        handleCartQuantityChange,
        cartData,
        setCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
