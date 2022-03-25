import { Link, useLocation } from "react-router-dom";
import { useCart, useAuth, useWishlist } from "../../context";
import "../Navbar/Navbar.css";
import { Search } from "./components/Search";

const Navbar = () => {
  const { authData } = useAuth();
  const { wishlist } = useWishlist();
  const { cartList } = useCart();
  const location = useLocation();
  const authPages =
    location.pathname === "/login" ||
    location.pathname === "/signUp" ||
    location.pathname === "/forgotPassword";

  return (
    <header className="nav--container">
      <div className="logo">
        <Link to="/">Js Tees</Link>
      </div>
      {!authPages ? <Search /> : <p></p>}
      <nav className="nav--items">
        <ul className="list list--space">
          <li>
            <Link className="nav--item--container" to="/products">
              <i className="fas fa-store"></i>
              <span>Store</span>
            </Link>
          </li>
          <li>
            <Link className="nav--item--container" to="/wishlist">
              <div className="badge--container">
                <i className="fas fa-heart"></i>
                {authData.isLoggedIn && wishlist.length > 0 && (
                  <span className="badge badge--top--right badge--secondary">
                    {wishlist.length <= 9 ? wishlist.length : "9+"}
                  </span>
                )}
              </div>
              <span>Wishlist</span>
            </Link>
          </li>
          <li>
            <Link className="nav--item--container" to="/cart">
              <div className="badge--container">
                <i className="fas fa-shopping-cart"></i>
                {authData.isLoggedIn && cartList.length > 0 && (
                  <span className="badge badge--top--right badge--secondary">
                    {cartList.length <= 9 ? cartList.length : "9+"}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </li>

          {authData.isLoggedIn ? (
            <li>
              <Link className="nav--item--container" to="/profile">
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </Link>
            </li>
          ) : (
            <li>
              <Link className="nav--item--container" to="/login">
                <i className="fas fa-sign-in"></i>
                <span>Login</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
