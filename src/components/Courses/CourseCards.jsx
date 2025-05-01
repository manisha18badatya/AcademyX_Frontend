import React, { useEffect, useState } from "react";

// Component that fetches and renders all course cards
export default function CourseList() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const url = "http://localhost:8080/api/v1/courses/allCourses";
      const response = await fetch(url);
      const courseData = await response.json();

      setCourses(courseData.data); // array of courses
    } catch (err) {
      console.error("Failed to fetch courses", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="cards-grid">
      {courses.length > 0 ? (
        courses.map((value, idx) => (
          <CourseCard
            key={value._id || idx}
            thumb={value.thumbnail}
            title={value.courseName}
            course={value.description}
            price={value.price}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

// Reusable course card component
function CourseCard({ thumb, title, course, price }) {
  return (
    <div className="card_container">
      <div className="cardset">
        <img src={thumb} alt={title} className="cardset__img" />
        <div className="data">
          <h3 className="cardset__title">{title}</h3>
          <p className="cardset__subtitle">{course}</p>
          <p className="cardset__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h2>₹{price}</h2>
        </div>
      </div>
    </div>
  );
}
