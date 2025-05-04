import React, { useEffect, useState } from "react";
import "../../stylesheets/Courses.css";
import { NavLink } from "react-router-dom";

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
    <div className="videocard-container">
      <div className="videocard-grid">
        {courses.length > 0 ? (
          courses.map((value, idx) => (
            <CourseCard
              key={value._id || idx}
              course={value} // pass the full object
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

// Reusable course card component
function CourseCard({ course }) {
  return (
    <NavLink to={`/coursepage/${course._id}`} className="courses">
      <div className="videocard">
        <div className="videocard__thumbcontainer">
          <img
            src={course.thumbnail}
            alt={course.courseName}
            className="videocard__thumb"
          />
        </div>
        <div className="videocard__data">
          <h3 className="videocard__data__title">{course.title}</h3>
          <p className="videocard__data__subtitle">{course.description}</p>
          <p className="videocard__data__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <NavLink to="/buypage" className="videocard__buybutton">
          <div className="pricecontain">
            <text>BUY NOW</text>
            <text className="videocard__price">₹{course.price}</text>
          </div>
          <div className="hover-text">GET IT {">"} </div>
        </NavLink>
      </div>
    </NavLink>
  );
}
