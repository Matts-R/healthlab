import React from "react";
import "../Styles/userProfile.css";

export default function UserProfile() {
  return (
    <div>
      <div className="navbar-test"></div>

      <div className="profile-container">
        <div className="user-description">
          <div className="user-photo">
            <img alt="ahhhhh" src="/Assets/add.svg" className="photo" />
          </div>
          <div className="name-container">
            <h2 className="user-name">Matheus Henrique Ribeiro da Silva</h2>
          </div>
        </div>
        <div className="user-bio">
          <div className="bio"></div>
        </div>
        <div className="user-info"></div>
        <div className="user-config"></div>
        <div className="user-posts"></div>
      </div>
    </div>
  );
}
