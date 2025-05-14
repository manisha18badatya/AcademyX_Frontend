import React from "react";
import { useCourse } from "../../context/CourseContext";
import { useParams } from "react-router-dom";
import "../../Stylesheets/CoursePage.css";
import axios from "axios";

export default function CourseInfo() {
  const { course } = useCourse();
  const { id } = useParams();

  if (!course) return <p>Loading course info...</p>;

  const handleEnroll = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/enrollments/${id}`,
        {
          withCredentials: true,
        }
      );
      alert(res.data.message); // Show feedback like "Successfully enrolled" or "Unenrolled successfully"
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

      {!course?.isEnrolled && (
        <div className="enroll-button" onClick={handleEnroll}>
          ENROLL NOW
        </div>
      )}
    </div>
  );
}
