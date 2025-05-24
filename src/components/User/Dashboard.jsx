import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Stylesheets/User.css";
import "../../Stylesheets/Courses.css";
import { NavLink } from "react-router-dom";
import { useOptions } from "../../context/UserContext";

export default function Dashboard() {
  const { setSelectedOption } = useOptions();
  return (
    <div>
      <div className="button-box">
        <NavLink
          to="/user"
          className="button1"
          onClick={() => {
            setSelectedOption("Your Courses");
          }}
        >
          Your courses
        </NavLink>
        <NavLink
          to="/user"
          className="button1"
          onClick={() => {
            setSelectedOption("Create Course");
          }}
        >
          Create Course
        </NavLink>
      </div>
    </div>
  );
}
