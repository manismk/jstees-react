import { Routes, Route } from "react-router-dom";
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
} from "./Pages";

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
        <Route path="/products" element={<Products />}>
          <Route path=":categoryName" element={<Products />} />
        </Route>
        <Route path="/products/single/:productId" element={<SingleProduct />} />
        <Route element={<PrivateRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
