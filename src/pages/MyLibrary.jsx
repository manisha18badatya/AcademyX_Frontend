import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../Stylesheets/base.css";
import { OptionProvider } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import EnrolledCourses from "../components/User/EnrolledCourses";
import NoLibrary from "../components/User/NoLibrary";

function UserProfile() {
  const { isLoggedin } = useAuth();
  return (
    <div>
      <div className="bodydiv">
        <OptionProvider>
          <Navbar />
          {isLoggedin ? <EnrolledCourses /> : <NoLibrary />}
        </OptionProvider>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
