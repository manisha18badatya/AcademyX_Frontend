import React, { useState } from "react";

import "../Stylesheets/Footer.css";
import { useNavigate } from "react-router-dom";
import { CategoryProvider, useCategory } from "../context/CategoryContext";

export default function Footer() {
  const { setCategory, setSelectedCategory } = useCategory();
  const navigate = useNavigate();

  const categories = [
    "Artificial Intelligence",
    "Web Development",
    "App Development",
    "Software Development",
    "Game Development",
    "Language",
    "Graphic Design",
    "UI/UX Design",
    "Video Editing",
    "Cyber Security",
    "Cloud Computing",
    "Blockchain",
    "Data Science",
    "DevOps",
    "Business Analysis",
  ];

  const sections = [
    "Home",
    "Courses",
    "My Library",
    "Community",
    "My Profile",
    "Creator Mode",
  ];

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSelectedCategory(category);
    navigate("/courses");
  };

  return (
    <div className="footer">
      <div className="top-footer">
        {" "}
        <h3 className="heading"> AcademyX Courses</h3>
        <ul className="categories-list">
          {categories.map((category, idx) => (
            <li
              className=""
              key={idx}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom-footer">
        <div className="sec">
          <h3
            className="heading"
            style={{ fontSize: "1vw", marginTop: "0.8vw" }}
          >
            {" "}
            Sections
          </h3>
          <ul className="section-list">
            {sections.map((section, idx) => (
              <li
                className=""
                key={idx}
                onClick={() => handleSectionClick(section)}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>

        <div className="team">
          <h3 className="head"> Our Team</h3>
          <ul className="members">
            <a href="/">Rajeev</a>
            <a href="/">Vikram</a>
            <a href="/">Manisha</a>
          </ul>
        </div>
      </div>
    </div>
  );
}
