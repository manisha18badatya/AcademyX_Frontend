import React, { useEffect, useState } from "react";
import "../../stylesheets/Courses.css";
import { NavLink } from "react-router-dom";
import { useCategory } from "../../context/CategoryContext";
import axios from "axios";

export default function CourseCard() {
  const { category } = useCategory();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        let response;
        if (category === "All Courses") {
          response = await axios.get(
            "http://localhost:8080/api/v1/courses/allCourses"
          );
        } else if (category === "New Courses") {
          response = await axios.get(
            "http://localhost:8080/api/v1/courses/allCourses"
          );
        } else if (category === "Free Courses") {
          response = await axios.get(
            "http://localhost:8080/api/v1/courses/allCourses"
          );
        } else if (category === "Popular Courses") {
          response = await axios.get(
            "http://localhost:8080/api/v1/courses/allCourses"
          );
        } else {
          response = await axios.get(
            `http://localhost:8080/api/v1/courses/?category=${category}`
          );
        }
        setCourses(response.data.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses();
  }, [category]);

  return (
    <div className="videocard-container">
      <div className="videocard-grid">
        {courses.length > 0 ? (
          courses.map((course) => (
            <NavLink
              to={`/coursepage/${course._id}`}
              className="courses"
              key={course._id}
            >
              <div className="videocard">
                <div className="videocard__thumbcontainer">
                  <img
                    src={course.thumbnail}
                    alt={course.courseName}
                    className="videocard__thumb"
                  />
                </div>
                <div className="videocard__data">
                  <h3 className="videocard__data__title">
                    {course.courseName}
                    {console.log(course.category)}
                  </h3>
                  <p className="videocard__data__subtitle">
                    {course.description}
                  </p>
                  <p className="videocard__data__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <NavLink to="/buypage" className="videocard__buybutton">
                  <div className="pricecontain">
                    <text>BUY NOW</text>
                    <text className="videocard__price">
                      {course.price === 0 ? "Free" : `₹ ${course.price}`}
                    </text>
                  </div>
                  <div className="hover-text">GET IT {">"} </div>
                </NavLink>
              </div>
            </NavLink>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
