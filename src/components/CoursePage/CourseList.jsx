import React, { useContext } from "react";
import { useCourse } from "../../context/CourseContext";
import "../../Stylesheets/CoursePage.css";

export default function CourseList() {
  const { course, selectedVideo, setSelectedVideo, setSelectedLesson } =
    useCourse();

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-tracker">
      <h3 className="course-head">{course.courseName}</h3>
      {course.content.map((section, index) => (
        <div key={section._id} className="lesson-section">
          <h4>
            Course{index + 1} : {section.title}
          </h4>
          <ul className="video-list">
            {section.video.map((vid) => (
              <li
                key={vid._id}
                onClick={() => {
                  setSelectedVideo({
                    url: vid.videoUrl,
                    title: vid.videoTitle,
                  });
                }}
              >
                - {vid.videoTitle}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
