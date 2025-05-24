import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import UserOptions from "../components/User/UserOptions";
import MainContent from "../components/User/MainContent";
import "../Stylesheets/base.css";

function UserProfile() {
  return (
    <div>
      <div className="bodydiv">
        <Navbar />
        <UserOptions />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
