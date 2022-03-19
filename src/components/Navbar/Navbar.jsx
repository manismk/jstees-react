import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const { authData } = useAuth();

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
              <i className="fas fa-heart"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="badge--container">
                <i className="fas fa-shopping-cart"></i>
                <span className="badge badge--top--right badge--secondary">
                  9
                </span>
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
