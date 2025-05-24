import React, { useEffect, useState } from "react";
import "../../stylesheets/User.css";
import "../../Stylesheets/Courses.css";
import "../../Stylesheets/base.css";
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
    <div className="videocard-container" style={{ flexDirection: "column" }}>
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        Your Courses
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="videocard-grid">
          {ycourses.length > 0 ? (
            ycourses.map((course) => (
              <div className="courses" key={course._id}>
                <div className="videocard" style={{ width: "100%" }}>
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
                    to={`/user/updatecourse/${course._id}`}
                    className="button1"
                    style={{ marginLeft: "2vw" }}
                  >
                    Update course
                  </NavLink>
                </div>
              </div>
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      )}
    </div>
  );
}
