import React, { useEffect, useState } from "react";
import "../../stylesheets/User.css";
import "../../Stylesheets/Courses.css";
import "../../Stylesheets/base.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function EnrolledCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8080/api/v1/dashboards", {
          withCredentials: true,
        });

        if (res.data && res.data.data && res.data.data[0]?.courses) {
          setCourses(res.data.data[0].courses);
        }
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    console.log("Fetched courses:", courses);
  }, [courses]);

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
                  <p className="videocard__data__subtitle">{course.title}</p>
                </div>
                <NavLink
                  to={`/coursepage/${course._id}`}
                  className="videocard__buybutton"
                >
                  <div className="pricecontain">
                    <span>WATCH</span>
                  </div>
                  <div className="hover-text">Play {">"} </div>
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
