import React from "react";
import { useCourse } from "../../context/CourseContext";
import "../../Stylesheets/CoursePage.css";

function CourseHeading() {
  const { course } = useCourse();

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-header">
      <h1>
        {course.courseName}{" "}
        <text className="duration">Course duration: {course.duration}</text>
      </h1>
      <h2>
        <text style={{ fontWeight: "100" }}>By</text>
        <text style={{ textTransform: "capitalize" }}>
          {" "}
          {course.educator.username}{" "}
        </text>
      </h2>
      <p>{course.title}</p>
      <hr className="line" />
    </div>
  );
}

export default CourseHeading;
