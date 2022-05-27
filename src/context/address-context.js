import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth-context";

const AddressContext = createContext();

const initialModalState = { isOpen: false, isFromEdit: false, editData: {} };

const AddressProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState([]);
  const [addressModal, setAddressModal] = useState(initialModalState);
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

  const openModal = () => {
    setAddressModal((prev) => ({ ...prev, isOpen: true }));
  };

  const openFromEdit = (data) => {
    setAddressModal((prev) => ({
      ...prev,
      isOpen: true,
      isFromEdit: true,
      editData: data,
    }));
  };

  const closeModal = () => {
    setAddressModal(initialModalState);
  };

  return (
    <AddressContext.Provider
      value={{ userAddress, addressModal, openFromEdit, openModal, closeModal }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
