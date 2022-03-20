import { Link } from "react-router-dom";
import { useCart, useAuth, useWishlist } from "../../context";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const { authData } = useAuth();
  const { wishlist } = useWishlist();
  const { cartList } = useCart();

  return (
    <header className="nav--container">
      <div className="logo">
        <Link to="/">JsTees</Link>
      </div>
      <div className="header--input--container">
        <input
          className="header--input"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
      </div>
      <nav className="nav--items">
        <ul className="list list--space">
          <li>
            <Link to="/wishlist">
              <div className="badge--container">
                <i className="fas fa-heart"></i>
                {authData.isLoggedIn && wishlist.length > 0 && (
                  <span className="badge badge--top--right badge--secondary">
                    {wishlist.length <= 9 ? wishlist.length : "9+"}
                  </span>
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="badge--container">
                <i className="fas fa-shopping-cart"></i>
                {authData.isLoggedIn && cartList.length > 0 && (
                  <span className="badge badge--top--right badge--secondary">
                    {cartList.length <= 9 ? cartList.length : "9+"}
                  </span>
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <i className="fas fa-sign-in"></i>
            </Link>
          </li>
          {authData.isLoggedIn && (
            <li>
              <Link to="/profile">
                <i className="fas fa-user"></i>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
