import { useState } from "react";
import { ProfileContainer } from "./components";
import "./profile.css";

export const Profile = () => {
  const [showingTab, setShowingTab] = useState("profile");
  return (
    <>
      <main className="user--container">
        <div className="tab--container">
          <button
            className={`tab--button ${
              showingTab === "profile" ? "active" : ""
            }`}
            onClick={() => setShowingTab("profile")}
          >
            Profile
          </button>
          <button
            className={`tab--button ${
              showingTab === "address" ? "active" : ""
            }`}
            onClick={() => setShowingTab("address")}
          >
            Address
          </button>
          <button
            className={`tab--button ${showingTab === "order" ? "active" : ""}`}
            onClick={() => setShowingTab("order")}
          >
            Orders
          </button>
        </div>
        {showingTab === "profile" && <ProfileContainer />}
      </main>
    </>
  );
};
