import React, { useEffect, useState } from "react";
import "../../stylesheets/User.css";
import { NavLink } from "react-router-dom";
import useUserData from "./UserData";
import axios from "axios";

export default function ProfileContent() {
  const { user, isLoading } = useUserData();

  if (isLoading) return <p>Loading profile...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div className="profile-content">
      <div className="banner">Banner</div>

      <div className="head-container">
        <div className="pfp">
          <img src={user.profileImage} />
        </div>
        <h2 className="username">{user.username}</h2>
        <p className="bio">
          User bio - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
    </div>
  );
}
