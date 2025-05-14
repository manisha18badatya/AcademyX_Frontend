import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "../Stylesheets/Navbar.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  let [courseText, setCourseText] = useState("");
  const handlelogOut = async (e) => {
    await axios.get("http://localhost:8080/api/v1/users/logout", {
      withCredentials: true,
    });

    // remove data from local storage
    logout();
    //redirtect to login page
    navigate("/login");
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <NavLink to="/" className="left-container">
            <div className="left-container__logo">
              <img
                src="/public/Image/background_removed_image_ryQNP8BvSu6YbNDZBfKXiA.png"
                alt=""
              />
            </div>
            <div className="left-container__acad"> AcademyX</div>
          </NavLink>
        </div>
        <div className="navbar__center">
          <ul className="ullist">
            <li>
              {" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
                to="/"
              >
                Home
                <div className="underline"></div>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
                to="/courses"
              >
                Courses
                <div className="underline"></div>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
                to="/user/mylibrary"
              >
                My Library
                <div className="underline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
                id="indevelopment"
                to="/community"
              >
                Community
                <div className="underline"></div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar__right">
          <div className="search-bar">
            <svg
              viewBox="0 0 18 18"
              fill="#222222"
              className="search-bar__icon"
            >
              <path
                d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                fill="#1D1B20"
              />
            </svg>
            <input
              type="text"
              value={courseText}
              onChange={(e) => {
                setCourseText(e.target.value);
              }}
              placeholder="   Search for courses"
            />
            <button onClick={""} className="search-bar__button">
              {" "}
              Search
            </button>
          </div>
          {!isLoggedIn && (
            <div className="user-buttons">
              <NavLink className="user-buttons__login" to="/login">
                Log in
              </NavLink>
              <NavLink className="user-buttons__signup" to="/signup">
                Sign up
              </NavLink>
            </div>
          )}
          {isLoggedIn && (
            <NavLink
              to="/user"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <img className="pfp-icon" src="/public/Image/pfp1.png" />
              {isOpen && (
                <div className="pfpdrop-container">
                  <div className="pfpdrop">
                    <NavLink to="/user" className="pfpdrop__content">
                      My Profile
                    </NavLink>
                    <NavLink to="/courses" className="pfpdrop__content">
                      My library
                    </NavLink>
                    <NavLink to="/courses/data" className="pfpdrop__content">
                      Creator mode
                    </NavLink>
                    <NavLink to="/courses/design" className="pfpdrop__content">
                      Settings
                    </NavLink>
                    <button onClick={handlelogOut} className="logout">
                      {" "}
                      Log out{" "}
                    </button>
                  </div>
                </div>
              )}
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
