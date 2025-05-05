import React, { useState, useEffect } from "react";

import { useCategory } from "../../context/CategoryContext";
import "../../Stylesheets/Courses.css";

export default function CoursesCategories() {
  const { setCategory, selectedCategory, setSelectedCategory } = useCategory();
  const [Courses, setCourses] = useState([]);

  const fetchCategories = async () => {
    try {
      const url = "http://localhost:8080/api/v1/courses/allCourses";
      const response = await fetch(url);
      const courseData = await response.json();

      setCourses(courseData.data);
    } catch (err) {
      console.error("Failed to fetch courses", err);
    }
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories">
      <h2 className="headings">Courses</h2>
      <ul className="categories__list">
        <li
          className={selectedCategory === "All Courses" ? "active-li" : ""}
          onClick={() => handleCategoryClick("All Courses")}
        >
          All Courses
        </li>

        <li
          className={selectedCategory === "Free Courses" ? "active-li" : ""}
          onClick={() => handleCategoryClick("Free Courses")}
        >
          Free Courses
        </li>

        <li
          className={selectedCategory === "New Courses" ? "active-li" : ""}
          onClick={() => handleCategoryClick("New Courses")}
        >
          New Courses
        </li>

        <li
          className={selectedCategory === "Popular Courses" ? "active-li" : ""}
          onClick={() => handleCategoryClick("Popular Courses")}
        >
          Popular Courses
        </li>
      </ul>
      <h1
        className="headings"
        style={{ fontSize: "15px", marginLeft: "2vw", marginTop: "3vw" }}
      >
        Course Categories
      </h1>
      <ul className="categories__list">
        {[...new Set(Courses.map((course) => course.category))].map(
          (category, idx) => (
            <li
              className={selectedCategory === category ? "active-li" : ""}
              key={idx}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
