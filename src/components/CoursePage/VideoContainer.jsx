import React, { useContext } from "react";
import { useCourse } from "../../context/CourseContext";
import "../../Stylesheets/CoursePage.css";

function VideoContainer() {
  const { selectedVideo, selectedLesson } = useCourse();

  return (
    <div className="videocontainer-body">
      <div className="video-player">
        {selectedVideo ? (
          <>
            <h2 className="lesson">{selectedLesson}</h2>
            <h2 className="video-title">{selectedVideo.title}</h2>
            <video
              width="100%"
              height="auto"
              controls
              src={selectedVideo.url}
            />
            <div className="play-icon"></div>
          </>
        ) : (
          <p>Select a video to play</p>
        )}
      </div>
    </div>
  );
}

export default VideoContainer;
