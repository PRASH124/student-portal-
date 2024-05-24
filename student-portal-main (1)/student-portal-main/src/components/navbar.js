// Navbar.js
import React from "react";
import "../css/navbar.css";

function Navbar({ toggleSidebar }) {
  const user = {
    name: "Renish",
    profileImg: "",
  };

  return (
    <nav className="navbar">
      <span className="navbar-toggle">
        <button className="hamburger-menu" onClick={toggleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </span>
      <span className="navbar-title">
        <h1>Student Portal</h1>
      </span>
      <span className="navbar-user">
        <span className="username">{user.name}</span>
        <img src={user.profileImg} alt="Profile" className="profile-img" />
      </span>
    </nav>
  );
}

export default Navbar;
