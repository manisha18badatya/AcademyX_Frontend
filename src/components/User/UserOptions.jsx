import React from "react";
import "../../stylesheets/User.css";
import { NavLink } from "react-router-dom";
import { useOptions } from "../../context/UserContext";

export default function UserOptions() {
  const { selectedOption, setSelectedOption } = useOptions();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Define your options as objects for easier mapping
  const options = [
    { name: "My Profile", path: "/user" },
    { name: "My Library", path: "/user/mylibrary" },
    { name: "Dashboard", path: "/user/dashboard" },
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
              ) : (
                name
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
