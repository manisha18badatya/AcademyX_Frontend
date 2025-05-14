import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Stylesheets/User.css";
import "../../Stylesheets/Courses.css";
import { NavLink } from "react-router-dom";
import "./UserOptions";

export default function Dashboard() {
  return (
    <div>
      <UserOptions />
      <div className="button-box">
        <NavLink to="/user/yourcourses" className="button1">
          Your courses
        </NavLink>
        <NavLink to="/createcourse" className="button1">
          Create Course
        </NavLink>
      </div>
    </div>
  );
}
