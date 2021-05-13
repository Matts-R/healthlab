import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

export default function Navbar() {
  return (
    <nabar className="navbar background-color">
      <Link className="logo" to="/home">
        <img className="logo-img" src="/Assets/logo.svg" alt="" />
      </Link>
    </nabar>
  );
}
