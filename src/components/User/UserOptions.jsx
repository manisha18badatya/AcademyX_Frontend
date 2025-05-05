import React, { useEffect, useState } from "react";
import "../../stylesheets/User.css";
import { NavLink } from "react-router-dom";
import { useCategory } from "../../context/CategoryContext";
import axios from "axios";

export default function UserOptions() {
  return (
    <div className="sidebardiv">
      <div className="user-options">
        <ul className="option-list">
          <li className="active-option">My Profile</li>
          <li>My Library</li>
          <li>Dashboard</li>
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
