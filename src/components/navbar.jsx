import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "../Stylesheets/Navbar.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useOptions } from "../context/UserContext";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const { setSelectedOption, setOption } = useOptions();
  const [isOpen, setIsOpen] = useState(false);
  const [courseText, setCourseText] = useState("");

  const handleClick = (option, fromDropdown = false) => {
    setSelectedOption(option);

    if (option === "My Library" && fromDropdown) {
      navigate("/user?from=dropdown");
    } else {
      navigate("/user");
    }
    console.log(`navigate to ${option}`);
  };

  const handleLogOut = async () => {
    await axios.get("http://localhost:8080/api/v1/users/logout", {
      withCredentials: true,
    });
    logout();
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
                alt="logo"
              />
            </div>
            <div className="left-container__acad"> AcademyX</div>
          </NavLink>
        </div>

        <div className="navbar__center">
          <ul className="ullist">
            <li>
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
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
                to="/user"
                onClick={() => handleClick("My Library")}
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
              <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" />
            </svg>
            <input
              type="text"
              value={courseText}
              onChange={(e) => setCourseText(e.target.value)}
              placeholder="   Search for courses"
            />
            <button onClick={""} className="search-bar__button">
              Search
            </button>
          </div>

          {!isLoggedIn ? (
            <div className="user-buttons">
              <NavLink className="user-buttons__login" to="/login">
                Log in
              </NavLink>
              <NavLink className="user-buttons__signup" to="/signup">
                Sign up
              </NavLink>
            </div>
          ) : (
            <div
              style={{
                cursor: "pointer",
                height: "4.5vw",
                position: "relative",
              }}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div
                style={{ margin: "0.4rem", padding: "0" }}
                onClick={() => handleClick("My Profile")}
              >
                <img className="pfp-icon" src="/public/Image/pfp1.png" />
              </div>

              {isOpen && (
                <div className="pfpdrop-container">
                  <div className="pfpdrop">
                    <div
                      className="pfpdrop__content"
                      onClick={() => handleClick("My Profile", true)}
                    >
                      My Profile
                    </div>
                    <div
                      className="pfpdrop__content"
                      onClick={() => handleClick("My Library", true)}
                    >
                      My Library
                    </div>
                    <div
                      className="pfpdrop__content"
                      onClick={() => handleClick("Dashboard", true)}
                    >
                      Creator mode
                    </div>
                    <div
                      className="pfpdrop__content"
                      onClick={() => handleClick("Settings", true)}
                    >
                      Settings
                    </div>
                    <div onClick={handleLogOut} className="logout">
                      <div onClick={handleLogOut} className="box">
                        Log out
                      </div>
                      <div
                        onClick={handleLogOut}
                        className="box"
                        id="top"
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
