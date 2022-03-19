import { Routes, Route } from "react-router-dom";
import { ForgotPassword } from "./Pages/ForgetPassword/ForgotPassword";
import { Login } from "./Pages/Login/Login";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Home } from "./Pages/Home/Home";
import { Products } from "./Pages/Products/Products";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { Cart } from "./Pages/Cart/Cart";
import { Profile } from "./Pages/Profile/Profile";
import { SingleProduct } from "./Pages/SingleProduct/SingleProduct";
import Mockman from "mockman-js";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/products" element={<Products />} />
        <Route element={<PrivateRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
