import React from "react";
import { useCourse } from "../../context/CourseContext";
import { useParams } from "react-router-dom";
import "../../Stylesheets/CoursePage.css";
import axios from "axios";
import { useOptions } from "../../context/UserContext";

export default function CourseInfo() {
  const { course } = useCourse();
  const { id } = useParams();
  const { enrolledCourse } = useOptions();

  if (!course) return <p>Loading course info...</p>;

  const isEnrolled =
    Array.isArray(enrolledCourse) &&
    course?._id &&
    enrolledCourse.some((c) => c._id === course._id);

  const handleEnroll = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/enrollments/${id}`,
        {
          withCredentials: true,
        }
      );
      alert(res.data.message);
      console.log(enrolledCourse);
      window.location.reload(); // Refresh to update enrollment status
    } catch (error) {
      console.error("Enrollment error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="info-container">
      <div className="thumbnail">
        <img className="thumb" src={course.thumbnail} alt="Course Thumbnail" />
      </div>
      <hr />
      <p className="descript">{course.description}</p>

      {!isEnrolled ? (
        <div className="enroll-button" onClick={handleEnroll}>
          ENROLL NOW
        </div>
      ) : (
        <div className="enroll-button" onClick={handleEnroll}>
          Enrolled
        </div>
      )}
    </div>
  );
}
