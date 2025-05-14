import React from "react";
import "../../stylesheets/User.css";
import { NavLink } from "react-router-dom";
import { useOptions } from "../../context/UserContext";

export default function UserOptions() {
  const { option, setOption, selectedOption, setSelectedOption } = useOptions();

  const handleOptionClick = (option) => {
    setOption(option);
    setSelectedOption(option);
  };

  return (
    <div className="sidebardiv">
      <div className="user-options">
        <ul className="option-list">
          <li
            className={selectedOption === "My Profile" ? "active-option" : ""}
            onClick={() => handleOptionClick("My Profile")}
          >
            <NavLink to="/user/profile">My Profile</NavLink>
          </li>

          <li
            className={selectedOption === "My Library" ? "active-option" : ""}
            onClick={() => handleOptionClick("My Library")}
          >
            <NavLink to="/user/library">My Library</NavLink>
          </li>

          <li
            className={selectedOption === "Dashboard" ? "active-option" : ""}
            onClick={() => handleOptionClick("Dashboard")}
          >
            <NavLink to="/user/dashboard">Dashboard</NavLink>
          </li>

          <li
            className={
              selectedOption === "Create Course" ? "active-option" : ""
            }
            onClick={() => handleOptionClick("Create Course")}
          >
            <NavLink to="/createcourse">Create Course</NavLink>
          </li>

          <li
            className={selectedOption === "Billing" ? "active-option" : ""}
            onClick={() => handleOptionClick("Billing")}
          >
            Billing
          </li>

          <li
            className={
              selectedOption === "Notifications" ? "active-option" : ""
            }
            onClick={() => handleOptionClick("Notifications")}
          >
            Notifications
          </li>

          <li
            className={selectedOption === "Settings" ? "active-option" : ""}
            onClick={() => handleOptionClick("Settings")}
          >
            Settings
          </li>

          <li
            className={selectedOption === "Log out" ? "active-option" : ""}
            onClick={() => handleOptionClick("Log out")}
          >
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
}
