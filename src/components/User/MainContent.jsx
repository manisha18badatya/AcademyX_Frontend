import React, { useEffect, useState } from "react";
import "../../stylesheets/User.css";
import { NavLink } from "react-router-dom";

import ProfileContent from "./ProfileContent";
import axios from "axios";
import { useOptions } from "../../context/UserContext";

export default function MainContent() {
  const { option, selectedOption } = useOptions();
  return (
    <div className="main-content">
      {selectedOption && selectedOption === "My Profile"}
    </div>
  );
}
