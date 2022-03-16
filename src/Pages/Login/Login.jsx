import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import "../Login/auth.css";

const Login = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="login--container">
          <h1 className="heading--3 text--center">Login</h1>
          <div className="input--container input--standard m-t-2">
            <label htmlFor="email" className="input--label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="test@test.in"
            />
          </div>
          <div className="input--container input--standard m-t-2">
            <label htmlFor="password" className="input--label">
              password
            </label>
            <input
              type="password"
              id="password"
              className="input"
              placeholder="********"
            />
          </div>

          <div className="remember--container m-t-1 m-h-1">
            <span className="input--standard">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </span>

            <Link to="/forgotPassword" className="link link--information">
              Forgot Your password
            </Link>
          </div>
          <div className="m-t-1 m-h-1">
            <button className="btn btn--primary w-100">Login</button>
          </div>
          <p className="signup--text m-t-1 m-h-1">
            Don't have a account?
            <Link to="/signUp" className="link link--information">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export { Login };
