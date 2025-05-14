import React from "react";
import "../../stylesheets/User.css";
import ProfileContent from "./ProfileContent";
import Dashboard from "./Dashboard";
import { useOptions } from "../../context/UserContext";

export default function MainContent() {
  const { selectedOption } = useOptions();

  const renderContent = () => {
    switch (selectedOption) {
      case "My Profile":
        return <ProfileContent />;
      case "Dashboard":
        return <Dashboard />;
      default:
        return <p>Content in progress...</p>;
    }
  };

  return <div className="main-content">{renderContent()}</div>;
}
