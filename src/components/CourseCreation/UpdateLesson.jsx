import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateLesson = () => {
  const { courseId, lessonId } = useParams(); // from route like /courses/:id/edit-lesson
  const [videoTitle, setVideoTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleAddVideo = async (e) => {
    e.preventDefault();

    if (!videoTitle || !videoFile || !videoTitle.trim()) {
      setMessage("Both video title and file are required.");
      return;
    }

    const formData = new FormData();
    formData.append("videoTitle", videoTitle);
    formData.append("video", videoFile);

    try {
      setUploading(true);
      const response = await axios.post(
        `http://localhost:8080/api/v1/lessons/${courseId}/${lessonId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setMessage(response.data.message || "Video added successfully!");
      setVideoTitle("");
      setVideoFile(null);
    } catch (err) {
      console.error(err);
      setMessage(
        err.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Video to Lesson</h2>
      {message && <div className="mb-4 text-sm text-red-600">{message}</div>}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Video Title"
          value={videoTitle}
          onChange={(e) => setVideoTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
          className="w-full"
        />
        <button
          onClick={handleAddVideo}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Add Video"}
        </button>
      </form>
    </div>
  );
};

export default UpdateLesson;
