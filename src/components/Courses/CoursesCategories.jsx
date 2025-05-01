import React, { useEffect, useState } from "react";

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
    <div className="categories-list">
      <h1>Course Categories</h1>
      <ul>
        {[...new Set(Courses.map((course) => course.category))].map(
          (category, idx) => (
            <li key={idx}>{category}</li>
          )
        )}
      </ul>
    </div>
  );
}

export default CoursesCategories;
