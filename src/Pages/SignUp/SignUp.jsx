import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

export const SignUp = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="login--container">
          <h1 className="heading--3 text--center">Sign Up</h1>
          <div className="input--container input--standard m-t-2">
            <label htmlFor="name" className="input--label">
              Full Name
            </label>
            <input type="name" id="name" className="input" placeholder="John" />
          </div>
          <div className="input--container input--standard m-t-2">
            <label htmlFor="email" className="input--label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="john@example.com"
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
              <label htmlFor="remember">Accept to terms & conditions</label>
            </span>
          </div>
          <div className="m-t-1 m-h-1">
            <button className="btn btn--primary w-100">Sign Up</button>
          </div>
          <p className="signup--text m-t-1 m-h-1">
            Already Have a account?
            <Link to="/login" className="link link--information">
              Login
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};
