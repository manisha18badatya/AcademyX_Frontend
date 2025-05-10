import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CreateLesson = () => {
  const { id } = useParams();
  console.log("Course ID:", id);
  const [lessonTitle, setLessonTitle] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  console.log(videoFile);
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!lessonTitle || !videoTitle || !videoFile) {
      setMessage("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("lessonTitle", lessonTitle);
    formData.append("videoTitle", videoTitle);
    formData.append("video", videoFile);

    console.log(formData);

    try {
      setUploading(true);
      const response = await axios.post(
        `http://localhost:8080/api/v1/lessons/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            withCredentials: true,
          },
        }
      );
      setMessage(response.data.message || "Lesson created successfully!");
      setLessonTitle("");
      setVideoTitle("");
      setVideoFile(null);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error uploading lesson");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create New Lesson</h2>
      {message && <div className="mb-4 text-sm text-red-600">{message}</div>}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Lesson Title"
          value={lessonTitle}
          onChange={(e) => setLessonTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
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
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Create Lesson"}
        </button>
      </form>
    </div>
  );
};

export default CreateLesson;
