import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "../Login/auth.css";
import { useAuth } from "../../context/auth-context";
import { handleLoginValidation } from "../../utils";

const Login = () => {
  const [userData, setUserData] = useState({
    userMail: "",
    password: "",
    mailError: "",
    passwordError: "",
  });

  const { handleLogin } = useAuth();

  const loginHandler = () => {
    const { mailError, passwordError } = handleLoginValidation(
      userData.userMail,
      userData.password
    );

    if (mailError.length || passwordError.length) {
      setUserData((prevData) => ({
        ...prevData,
        mailError: mailError,
        passwordError: passwordError,
      }));
    }
    if (mailError.length === 0 && passwordError.length === 0) {
      handleLogin(userData.userMail, userData.password);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="login--container">
          <h1 className="heading--3 text--center">Login</h1>
          <div
            className={`input--container input--${
              userData.mailError.length ? "error" : "standard"
            } m-t-2`}
          >
            <label htmlFor="email" className="input--label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="test@test.in"
              value={userData.userMail}
              onChange={(e) => {
                setUserData((prevData) => ({
                  ...prevData,
                  userMail: e.target.value,
                  mailError: "",
                }));
              }}
            />
            <span className="input--error--message">{userData.mailError}</span>
          </div>
          <div
            className={`input--container input--${
              userData.passwordError.length ? "error" : "standard"
            } m-t-2`}
          >
            <label htmlFor="password" className="input--label">
              password
            </label>
            <input
              type="password"
              id="password"
              className="input"
              placeholder="********"
              value={userData.password}
              onChange={(e) =>
                setUserData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                  passwordError: "",
                }))
              }
            />
            <span className="input--error--message">
              {userData.passwordError}
            </span>
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
            <button
              className="btn btn--primary w-100"
              onClick={() => {
                loginHandler();
              }}
            >
              Login
            </button>
          </div>
          <div className="m-t-1 m-h-1">
            <button
              className="btn btn--primary w-100"
              onClick={() => {
                setUserData((prevData) => ({
                  ...prevData,
                  password: "test1234",
                  userMail: "testuser@gmail.com",
                  mailError: "",
                  passwordError: "",
                }));
              }}
            >
              Login with Guest credentials
            </button>
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
