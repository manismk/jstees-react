import { Routes, Route, useLocation } from "react-router-dom";
import {
  ForgotPassword,
  Login,
  SignUp,
  Home,
  Products,
  Wishlist,
  Cart,
  Profile,
  SingleProduct,
  Checkout,
  Error404,
} from "./Pages";

import Mockman from "mockman-js";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./components/Navbar/Navbar";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App container-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/single/:productId" element={<SingleProduct />} />
        <Route element={<PrivateRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={800}
        newestOnTop={true}
        limit={2}
        style={{ top: "5rem" }}
      />
    </div>
  );
}

export default App;
