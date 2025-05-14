import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Stylesheets/User.css";
import "../../Stylesheets/Courses.css";
import "../../Stylesheets/Courseform.css";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <NavLink to="/user/yourcourses" className="mainbutton">
        Your courses
      </NavLink>
      <NavLink to="/createcourse" className="mainbutton">
        Create Course
      </NavLink>
    </div>
  );
}
