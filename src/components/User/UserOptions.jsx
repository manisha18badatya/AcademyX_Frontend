import React from "react";
import "../../stylesheets/User.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useOptions } from "../../context/UserContext";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

export default function UserOptions() {
  const { selectedOption, setSelectedOption } = useOptions();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handlelogOut = async (e) => {
    await axios.get("http://localhost:8080/api/v1/users/logout", {
      withCredentials: true,
    });

    // remove data from local storage
    logout();
    //redirtect to login page
    navigate("/");
  };

  // Define your options as objects for easier mapping
  const options = [
    { name: "My Profile", path: "/user" },
    { name: "My Library", path: "/user/mylibrary" },
    { name: "Dashboard" },
    { name: "Create Course", path: "/createcourse" },
    { name: "Billing" },
    { name: "Notifications" },
    { name: "Settings" },
    { name: "Log out" },
  ];

  return (
    <div className="sidebardiv">
      <div className="user-options">
        <ul className="option-list">
          {options.map(({ name, path }) => (
            <li
              key={name}
              className={selectedOption === name ? "active-option" : ""}
              onClick={() => handleOptionClick(name)}
            >
              {path ? (
                <NavLink
                  to={path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {name}
                </NavLink>
              ) : name === "Log out" ? (
                <span
                  onClick={handlelogOut}
                  style={{
                    cursor: "pointer",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {name}
                </span>
              ) : (
                <span>{name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
