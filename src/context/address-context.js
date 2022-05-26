import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth-context";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState([]);
  const { authData } = useAuth();

  useEffect(() => {
    if (authData.isLoggedIn) {
      (async () => {
        try {
          const { data, status } = await axios.get(`/api/user/address`, {
            headers: { authorization: localStorage.getItem("token") },
          });
          if (status === 200) {
            setUserAddress(data.address);
          }
        } catch (e) {
          setUserAddress([]);
          console.error(
            "Error in Getting address data while the user changes",
            e
          );
          toast.error("User not found.Try logging in again", {
            autoClose: false,
          });
        }
      })();
    } else {
      setUserAddress([]);
    }
  }, [authData.isLoggedIn]);
  return (
    <AddressContext.Provider value={{ userAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
