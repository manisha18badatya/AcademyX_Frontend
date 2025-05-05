import React, { useRef, useState } from "react";
import { useCourse } from "../../context/CourseContext";
import "../../Stylesheets/CoursePage.css";

function VideoContainer() {
  const { selectedVideo, selectedLesson } = useCourse();
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatDuration(videoRef.current.duration));
    }
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${mins} minutes ${secs} seconds`;
  };

  return (
    <div className="videocontainer-body">
      <div className="video-player">
        {selectedVideo ? (
          <>
            <h2 className="lesson">{selectedLesson}</h2>
            <hr className="hrline" />
            <h2 className="video-title">
              {selectedVideo.title}{" "}
              {duration && <text className="videotime"> - {duration}</text>}
            </h2>
            <video
              ref={videoRef}
              width="100%"
              height="auto"
              controls
              src={selectedVideo.url}
              onLoadedMetadata={handleLoadedMetadata}
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
