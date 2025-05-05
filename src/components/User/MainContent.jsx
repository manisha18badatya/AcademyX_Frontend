import React, { useEffect, useState } from "react";
import "../../stylesheets/User.css";
import { NavLink } from "react-router-dom";

import ProfileContent from "./ProfileContent";
import axios from "axios";

export default function MainContent() {
  return (
    <div className="main-content">
      <ProfileContent />
    </div>
  );
}
