import React from "react";
import { useCourse } from "../../context/CourseContext";
import "../../Stylesheets/CoursePage.css";
import { useOptions } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";

function CourseHeading() {
  const { course, selectedSection, setSelectedSection } = useCourse();
  const { isLoggedIn } = useAuth();
  const { enrolledCourse } = useOptions();

  const isEnrolled =
    Array.isArray(enrolledCourse) &&
    course?._id &&
    enrolledCourse.some((c) => c._id === course._id);

  if (!course) return <p>Loading...</p>;

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="course-header">
      <h1>
        {course.courseName}{" "}
        <span className="duration">Course duration: {course.duration}</span>
      </h1>
      <h2>
        <span style={{ fontWeight: "100" }}>By</span>
        <span style={{ textTransform: "capitalize" }}>
          {" "}
          {course.educator.username}
        </span>
      </h2>
      <p>{course.title}</p>
      <hr className="line" />

      <div className="course-menu">
        <p
          className={selectedSection === "info" ? "active-p" : ""}
          onClick={() => handleClick("info")}
        >
          Course Info
        </p>

        {isLoggedIn && isEnrolled && (
          <p
            className={selectedSection === "content" ? "active-p" : ""}
            onClick={() => handleClick("content")}
          >
            Content
          </p>
        )}
      </div>

      <hr className="line" />
    </div>
  );
}

export default CourseHeading;
