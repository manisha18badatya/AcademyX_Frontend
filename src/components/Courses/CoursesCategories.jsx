import React, { useEffect, useState } from "react";
import "../../Stylesheets/Courses.css";
import { NavLink } from "react-router-dom";

function CoursesCategories() {
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

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories">
      <h1 className="headings">Course Categories</h1>
      <ul className="categories__list">
        {[...new Set(Courses.map((course) => course.category))].map(
          (category, idx) => (
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? "categories__items active" : "categories__items"
              }
            >
              <li key={idx}>{category}</li>
            </NavLink>
          )
        )}
      </ul>
    </div>
  );
}

export default CoursesCategories;
