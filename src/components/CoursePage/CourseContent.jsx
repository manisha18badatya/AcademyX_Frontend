import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"; // Capital "R"
import { useCourse } from "../../context/CourseContext";
import CourseInfo from "./CourseInfo";
import VideoContainer from "./VideoContainer";
import CourseTracker from "./coursetracker";
import CourseList from "./CourseList";

function CourseContent() {
  const { id } = useParams();
  const { selectedSection } = useCourse();

  return (
    <div>
      {selectedSection && selectedSection === "info" ? (
        <>
          <CourseInfo />
          <CourseList />
        </>
      ) : (
        <>
          <VideoContainer />
          <CourseTracker />
        </>
      )}
    </div>
  );
}

export default CourseContent;
