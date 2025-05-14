import React from "react";
import CoursesCategories from "../components/Courses/CoursesCategories";
import CourseCard from "../components/Courses/CourseCards";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../Stylesheets/base.css";

import ErrorBoundary from "../errorHandeling/ErrorBoundary";
import { CategoryProvider } from "../context/CategoryContext";

function Courses() {
  return (
    <div>
      <div className="bodydiv">
        <Navbar />
        <ErrorBoundary>
          <CoursesCategories />
          <CourseCard />
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
