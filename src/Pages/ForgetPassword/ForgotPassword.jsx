import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <>
      <main>
        <div className="login--container">
          <h1 className="heading--3 text--center">Forgot password</h1>
          <div className="input--container input--standard m-t-2">
            <label htmlFor="email" className="input--label">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="test@test.in"
            />
          </div>

          <div className="m-t-1 m-h-1">
            <button className="btn btn--primary w-100">Reset Password</button>
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
