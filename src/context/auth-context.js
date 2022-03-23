import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const getInitialData = () => {
  const userLocalData = JSON.parse(localStorage.getItem("jsUser"));
  if (userLocalData !== null) {
    return { isLoggedIn: true, userData: userLocalData };
  } else {
    return { isLoggedIn: false, userData: {} };
  }
};
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  let navigate = useNavigate();
  const [authData, setAuthData] = useState(getInitialData());

  const handleLogin = (userMail, password) => {
    (async () => {
      try {
        const { status, data } = await axios.post("/api/auth/login", {
          email: userMail,
          password: password,
        });
        if (status === 200) {
          localStorage.setItem("token", data.encodedToken);
          localStorage.setItem("jsUser", JSON.stringify(data.foundUser));
          setAuthData((prev) => ({
            ...prev,
            isLoggedIn: true,
            userData: data.foundUser,
          }));
          toast.success("Login Successful");
          navigate("/products");
        }
        if (status === 201) {
          setAuthData((prev) => ({ ...prev, isLoggedIn: false }));
          toast.error("Wrong password.Try again");
        }
      } catch (e) {
        setAuthData((prev) => ({ ...prev, isLoggedIn: false }));
        console.log("Error in Login", e);
        toast.error("Something Went wrong", { autoClose: false });
      }
    })();
  };
  const handleSignUp = (userName, userMail, password) => {
    (async () => {
      try {
        const { status, data } = await axios.post("/api/auth/signup", {
          firstName: userName,
          email: userMail,
          password: password,
        });
        if (status === 201) {
          localStorage.setItem("token", data.encodedToken);
          localStorage.setItem("jsUser", JSON.stringify(data.createdUser));

          setAuthData((prev) => ({
            ...prev,
            isLoggedIn: true,
            userData: data.createdUser,
          }));
          navigate("/products");
          toast.success("User created successfully");
        }
      } catch (e) {
        setAuthData((prev) => ({ ...prev, isLoggedIn: false }));
        console.log("Error in signup", e);
        toast.error("Something Went wrong", { autoClose: false });
      }
    })();
  };
  const handleLogout = () => {
    setAuthData((prev) => ({
      ...prev,
      isLoggedIn: false,
      userData: {},
    }));
    localStorage.removeItem("token");
    localStorage.removeItem("jsUser");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authData, handleLogin, handleSignUp, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
