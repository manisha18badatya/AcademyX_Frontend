import React, { useContext } from "react";
import { useCourse } from "../../context/CourseContext";
import "../../Stylesheets/CoursePage.css";

function CourseTracker() {
  const { course, selectedVideo, setSelectedVideo, setSelectedLesson } =
    useCourse();

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-tracker">
      <h3>Course Progress</h3>
      {course.content.map((section) => (
        <div key={section._id} className="lesson-section">
          <h4>{section.title}</h4>
          <ul className="video-list">
            {section.video.map((vid) => (
              <li
                key={vid._id}
                className={
                  selectedVideo?.url === vid.videoUrl ? "active-video" : ""
                }
                onClick={() => {
                  setSelectedVideo({
                    url: vid.videoUrl,
                    title: vid.videoTitle,
                  });
                  setSelectedLesson(section.title);
                }}
              >
                {vid.videoTitle}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CourseTracker;
