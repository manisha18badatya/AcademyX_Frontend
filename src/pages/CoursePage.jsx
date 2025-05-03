import React from "react";
import Navbar from "../components/navbar";
import VideoContainer from "../components/CoursePage/videocontainer";
import CourseTracker from "../components/CoursePage/coursetracker";
import CourseHeading from "../components/CoursePage/CourseHeading";
import { CourseProvider } from "../context/CourseContext";
import "../Stylesheets/CoursePage.css";

function CoursePage() {
  return (
    <CourseProvider>
      <Navbar />
      <CourseHeading />
      <div className="maincontent">
        <VideoContainer />
        <CourseTracker />
      </div>
    </CourseProvider>
  );
}

export default CoursePage;
