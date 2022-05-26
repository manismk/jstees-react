import { useAuth } from "../../../context/auth-context";

export const ProfileContainer = () => {
  const { authData, handleLogout } = useAuth();

  return (
    <div className="profile--container">
      <h1 className="heading--3 text--center">My Account</h1>
      <div className="avatar--container">
        <img
          src="https://randomuser.me/api/portraits/men/41.jpg"
          alt="Randomuser"
          className="avatar avatar--circle avatar--xl"
        />
      </div>

      <div>
        <p className="username text--center">
          {`${authData.userData.firstName} ${authData.userData.lastName}`}
        </p>
        <div className="email--container">
          <p className="email--label">Email</p>
          <p className="email--content">{authData.userData.email}</p>
        </div>
        <div className="m-t-1 m-h-1 text--center">
          <button className="btn btn--primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
