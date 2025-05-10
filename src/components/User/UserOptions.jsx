import React, { useEffect, useState } from "react";
import "../../stylesheets/User.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function UserOptions() {
  return (
    <div className="sidebardiv">
      <div className="user-options">
        <ul className="option-list">
          <li className="active-option">My Profile</li>
          <li>My Library</li>
          <NavLink to="/user/dashboard">
            <li>Dashboard</li>
          </NavLink>
          <li>Create Course</li>
          <li>Billing</li>
          <li>Notifications</li>
          <li>Settings</li>
          <li>Log out</li>
        </ul>
      </div>
    </div>
  );
}
