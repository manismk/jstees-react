import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/auth-context";
import { handleSignUpValidation } from "../../utils";

export const SignUp = () => {
  const [userData, setUserData] = useState({
    userName: "",
    userMail: "",
    password: "",
    nameError: "",
    mailError: "",
    passwordError: "",
  });
  const { message, handleSignUp } = useAuth();

  const signUpHandler = () => {
    const { nameError, mailError, passwordError } = handleSignUpValidation(
      userData.userName,
      userData.userMail,
      userData.password
    );

    if (mailError.length || passwordError.length || nameError.length) {
      setUserData((prevData) => ({
        ...prevData,
        mailError: mailError,
        passwordError: passwordError,
        nameError: nameError,
      }));
    }
    if (
      mailError.length === 0 &&
      passwordError.length === 0 &&
      nameError.length === 0
    ) {
      handleSignUp(userData.userName, userData.userMail, userData.password);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="login--container">
          <h1 className="heading--3 text--center">Sign Up</h1>
          <div
            className={`input--container input--${
              userData.nameError.length ? "error" : "standard"
            } m-t-2`}
          >
            <label htmlFor="name" className="input--label">
              Full Name
            </label>
            <input
              type="name"
              id="name"
              className="input"
              placeholder="John"
              value={userData.userName}
              onChange={(e) => {
                setUserData((prevData) => ({
                  ...prevData,
                  userName: e.target.value,
                  nameError: "",
                }));
              }}
            />
            <span className="input--error--message">{userData.nameError}</span>
          </div>
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
              placeholder="john@example.com"
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
              onChange={(e) => {
                setUserData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                  passwordError: "",
                }));
              }}
            />
            <span className="input--error--message">
              {userData.passwordError}
            </span>
          </div>

          <div className="remember--container m-t-1 m-h-1">
            <span className="input--standard">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Accept to terms & conditions</label>
            </span>
          </div>
          <p className="text--center m-v-1">{message.signupMessage}</p>
          <div className="m-t-1 m-h-1">
            <button
              className="btn btn--primary w-100"
              onClick={() => {
                signUpHandler();
              }}
            >
              Sign Up
            </button>
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
