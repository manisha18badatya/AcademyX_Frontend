import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"; // Capital "R"

function CourseContent() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/courses/${id}`)
      .then((res) => res.json())
      .then((coursedata) => {
        if (coursedata && coursedata.data) {
          setCourse(coursedata.data);
        } else {
          console.error("Course not found or response malformed:", coursedata);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <h1>{course.courseName}</h1>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseContent;
