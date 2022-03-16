import { Navbar } from "../../components/Navbar/Navbar";
import "./profile.css";

export const Profile = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="user--container">
          <h1 className="heading--3 text--center">My Account</h1>
          <div className="avatar--container">
            <img
              src="https://randomuser.me/api/portraits/men/41.jpg"
              alt="Randomuser"
              className="avatar avatar--circle avatar--xl"
            />
          </div>
          <p className="username">Username</p>
          <div className="email--container">
            <p className="email--label">Email</p>
            <p className="email--content">test@test.in</p>
          </div>
          <div className="m-t-1 m-h-1">
            <button className="btn btn--primary">Logout</button>
          </div>
        </div>
      </main>
    </>
  );
};
