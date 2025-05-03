import React from "react";
import Navbar from "../components/navbar";
import VideoContainer from "../components/CoursePage/videocontainer";
import CourseTracker from "../components/CoursePage/CourseTracker";
import CourseHeading from "../components/CoursePage/CourseHeading";
import { CourseProvider } from "../context/CourseContext";

function CoursePage() {
  return (
    <CourseProvider>
      <Navbar />
      <div>
        <CourseHeading />
        <VideoContainer />
        <CourseTracker />
      </div>
    </CourseProvider>
  );
}

export default CoursePage;
