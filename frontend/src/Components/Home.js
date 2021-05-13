import React from "react";
import "../Styles/home.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar></Navbar>
      <div className="user-card"></div>
      <div className="posts"></div>
      <div className="tags-card"></div>
    </div>
  );
}
