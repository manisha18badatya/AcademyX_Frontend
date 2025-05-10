import React, { useEffect, useState } from "react";
import "../../stylesheets/User.css";
import "../../Stylesheets/Courses.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <NavLink to="/user/yourcourses">Your courses</NavLink>
      <NavLink to="/createcourse">Create Course</NavLink>
    </div>
  );
}
