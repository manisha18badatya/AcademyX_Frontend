import React from "react";
import CoursesCategories from "../components/Courses/CoursesCategories";
import CourseCard from "../components/Courses/CourseCards";
import Navbar from "../components/navbar";

function Courses() {
  return (
    <div>
      <Navbar />
      <CoursesCategories />
      <CourseCard />
    </div>
  );
}

export default Courses;
