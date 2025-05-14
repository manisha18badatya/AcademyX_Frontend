import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "../../context/FormContext";
import "../../Stylesheets/User.css";

axios.defaults.withCredentials = true;

export default function UpdateCourse() {
  const { isLoggedIn } = useAuth();
  const categories = [
    "Artificial Intelligence",
    "Web Development",
    "App Development",
    "Software Development",
    "Game Development",
    "Language",
    "Graphic Design",
    "UI/UX Design",
    "Video Editing",
    "Cyber Security",
    "Cloud Computing",
    "Blockchain",
    "Data Science",
    "DevOps",
    "Business Analysis",
  ];

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
    // or: return <h1>403 Forbidden Request</h1>;
  }
  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const { courseData, setCourseData } = useForm();
  const [editFields, setEditFields] = useState({});

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/v1/courses/${id}`,
          { withCredentials: true }
        );
        setCourse(res.data.data);
        setCourseData(res.data.data); // preload formData
        setPreview(res.data.data.thumbnail);
      } catch (err) {
        console.error("Failed to fetch course", err);
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (field, value) => {
    setCourseData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setCourse((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const toggleEdit = (field) => {
    setEditFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleCategoryChange = (e) => {
    setCourseData((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        `http://localhost:8080/api/v1/courses/${id}/updateCourse`,
        courseData,
        { withCredentials: true }
      );
      alert("Course updated!");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleDelVid = async (lessonId, videoId) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/v1/lessons/${id}/${lessonId}/${videoId}`,
        courseData,
        { withCredentials: true }
      );
      alert("Course updated!");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const delLesson = async (lessonId) => {
    console.log("Attempting to delete lesson:", lessonId);
    // Show the confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this lesson?"
    );
    // If user clicks "Cancel", exit the function
    if (!isConfirmed) return;

    try {
      await axios.delete(
        `http://localhost:8080/api/v1/lessons/${id}/${lessonId}`,
        { withCredentials: true }
      );
      alert("Course updated!");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleThumbnailUpdate = async () => {
    try {
      const formData = new FormData();
      formData.set("thumbnail", thumbnail); // thumbnail must be a File object

      const res = await axios.post(
        `http://localhost:8080/api/v1/courses/${id}/updateThumbnail`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      alert("Thumbnail updated!");
    } catch (error) {
      console.error("Thumbnail update error:", error);
      alert("Failed to update thumbnail.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Course</h2>

      <div style={{ marginTop: "20px" }}>
        {["courseName", "title"].map((field) => {
          const isEditing = editFields[field];
          const isTitleField = field === "courseName";

          return (
            <div
              key={field}
              className="textinput"
              style={{ marginBottom: "10px" }}
            >
              <h3>{isTitleField ? "Course Title" : "Brief Description"}</h3>

              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={courseData[field] || ""}
                    onChange={(e) => handleChange(field, e.target.value)}
                  />
                  <button onClick={() => toggleEdit(field)}>Save</button>
                </>
              ) : (
                <>
                  <span>{course[field]}</span>
                  <button onClick={() => toggleEdit(field)}>Edit</button>
                </>
              )}
            </div>
          );
        })}
      </div>

      {course.thumbnail && (
        <div>
          <label className="block font-semibold">Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              style={{ width: "300px", borderRadius: "10px" }}
            />
          )}
          <button onClick={handleThumbnailUpdate} style={{ marginTop: "20px" }}>
            Save Thumbnail
          </button>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        {["description", "price", "duration"].map((field) => (
          <div
            key={field}
            className={field === "description" ? "textfield" : ""}
            style={{ marginBottom: "10px" }}
          >
            <strong>{field}: </strong>
            {editFields[field] ? (
              <>
                {field === "description" ? (
                  <textarea
                    value={courseData[field] || ""}
                    onChange={(e) => handleChange(field, e.target.value)}
                    placeholder="Enter course description"
                  />
                ) : (
                  <input
                    type="text"
                    value={courseData[field] || ""}
                    onChange={(e) => handleChange(field, e.target.value)}
                  />
                )}
                <button onClick={() => toggleEdit(field)}>Save</button>
              </>
            ) : (
              <>
                <span>{course[field]}</span>
                <button onClick={() => toggleEdit(field)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>

      <h3>Course Category</h3>
      <select value={courseData.category} onChange={handleCategoryChange}>
        <option value="">
          {courseData.category && (
            <p style={{ marginTop: "5px", fontSize: "0.9rem", color: "#555" }}>
              <strong>{courseData.category}</strong>
            </p>
          )}
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {Array.isArray(course.content) && course.content.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Lessons</h3>
          {course.content.map((lesson, index) => (
            <div key={lesson._id}>
              <h4>
                Lesson {index + 1} : {lesson.title}
                <NavLink
                  to={`/user/updatecourse/${course._id}/${lesson._id}/updatelesson`}
                >
                  Edit lesson
                </NavLink>
                <button onClick={() => delLesson(lesson._id)}>
                  Delete Lesson
                </button>
              </h4>
              <ul>
                {lesson.video.map((vid) => (
                  <li key={vid._id}>- {vid.videoTitle} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <NavLink
        to={`/user/updatecourse/${course._id}/createlesson`}
        className="button2"
      >
        Add a lesson
      </NavLink>
      <button
        onClick={handleSubmit}
        className="button1"
        style={{ marginTop: "20px" }}
      >
        Update Course
      </button>
    </div>
  );
}
