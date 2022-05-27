import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
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

  const addAddress = async (address) => {
    try {
      const { data, status } = await axios.post(
        "/api/user/address",
        {
          address,
        },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      if (status === 201) {
        setUserAddress(data.address);
        toast.success("Address added successfully");
      } else throw new Error("Unhandled request code in add address");
    } catch (e) {
      console.error("Error in Adding item in cart", e);
      toast.error("Something Went wrong", { autoClose: false });
    }
  };

  return (
    <AddressContext.Provider
      value={{
        userAddress,
        addressModal,
        openFromEdit,
        openModal,
        closeModal,
        addAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
