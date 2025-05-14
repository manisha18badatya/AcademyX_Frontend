import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "../../context/FormContext";
import "../../Stylesheets/Courseform.css";

axios.defaults.withCredentials = true;

export default function UpdateCourse() {
  const { isLoggedIn } = useAuth();

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
    try {
      await axios.delete(
        `http://localhost:8080/api/v1/lessons/${id}/${lessonId}`,
        courseData,
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
        {[
          "courseName",
          "title",
          "description",
          "price",
          "duration",
          "category",
        ].map((field) => (
          <div key={field} style={{ marginBottom: "10px" }}>
            <strong>{field}: </strong>
            {editFields[field] ? (
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
        ))}
      </div>

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
                <button onClick={delLesson(lesson._id)}></button>
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

      <NavLink to={`/user/updatecourse/${course._id}/createlesson`}>
        Add a lesson
      </NavLink>
      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        Update Course
      </button>
    </div>
  );
}
