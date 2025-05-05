import React from "react";
import Navbar from "../components/navbar";
import VideoContainer from "../components/CoursePage/videocontainer";
import CourseTracker from "../components/CoursePage/coursetracker";
import CourseHeading from "../components/CoursePage/CourseHeading";
import { CourseProvider } from "../context/CourseContext";
import Footer from "../components/footer";
import "../Stylesheets/CoursePage.css";
import "../Stylesheets/base.css";

function CoursePage() {
  return (
    <CourseProvider>
      <div className="bodydiv">
        <Navbar />
        <CourseHeading />
        <div className="maincontent">
          <VideoContainer />
          <CourseTracker />
        </div>
      </div>
      <Footer />
    </CourseProvider>
  );
}

export default CoursePage;
