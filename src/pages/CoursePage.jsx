import React from "react";
import Navbar from "../components/navbar";
import CourseHeading from "../components/CoursePage/CourseHeading";
import { CourseProvider } from "../context/CourseContext";
import Footer from "../components/footer";
import "../Stylesheets/CoursePage.css";
import "../Stylesheets/base.css";
import CourseContent from "../components/CoursePage/CourseContent";

function CoursePage() {
  return (
    <CourseProvider>
      <div className="bodydiv">
        <Navbar />
        <CourseHeading />
        <div className="maincontent">
          <CourseContent />
        </div>
      </div>
      <Footer />
    </CourseProvider>
  );
}

export default CoursePage;
