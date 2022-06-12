import { useState } from "react";
import { AddressModal } from "../../components";
import { useAddress } from "../../context";
import { AddressContainer, ProfileContainer } from "./components";
import "./profile.css";

export const Profile = () => {
  const [showingTab, setShowingTab] = useState("profile");
  const { addressModal } = useAddress();
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
        </div>
        {showingTab === "profile" && <ProfileContainer />}
        {showingTab === "address" && <AddressContainer />}
      </main>
      {addressModal.isOpen && <AddressModal />}
    </>
  );
};
