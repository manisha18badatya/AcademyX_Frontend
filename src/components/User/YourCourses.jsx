import React, { useEffect, useState } from "react";
import "../../stylesheets/User.css";
import "../../Stylesheets/Courses.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function YourCourses() {
  const [ycourses, setYCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/dashboards/educator",
          {
            withCredentials: true,
          }
        );

        if (res.data && res.data.data) {
          setYCourses(res.data.data);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    console.log("Fetched courses:", ycourses);
  }, [ycourses]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : ycourses.length > 0 ? (
        ycourses.map((course) => (
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
              <NavLink
                to={`/user/updatecourse/${course._id}`}
                className="update-button"
              >
                Update course
              </NavLink>
            </div>
          </NavLink>
        ))
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
}
