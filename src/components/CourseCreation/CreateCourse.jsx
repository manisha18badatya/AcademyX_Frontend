import React, { useState } from "react";
import axios from "axios";
import "../../Stylesheets/User.css";
import Navbar from "../navbar";

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    title: "",
    description: "",
    price: "",
    duration: "",
    category: "",
    taqs: "",
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!thumbnail) {
      setMessage("Please upload a thumbnail.");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (key === "taqs") {
        val.split(",").forEach((tag) => data.append("taqs", tag.trim()));
      } else {
        data.append(key, val);
      }
    });
    data.append("thumbnail", thumbnail);

    try {
      setLoading(true);
      setMessage("");

      const response = await axios.post(
        "http://localhost:8080/api/v1/courses/createCourse",
        data,
        {
          withCredentials: true, // ✅ Use cookies
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(`✅ Course created! ID: ${response.data.data._id}`);
    } catch (err) {
      setMessage(`❌ Error: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4 sans-serif">
          Create a New Course
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            "courseName",
            "title",
            "description",
            "price",
            "duration",
            "category",
            "tags",
          ].map((field) => (
            <div key={field} className="input-cont">
              <label
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  marginLeft: "2vw",
                  textTransform: "uppercase",
                }}
              >
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                style={{ marginBlock: "2vw" }}
                placeholder={
                  field === "taqs"
                    ? "comma-separated tags (e.g., js,react)"
                    : ""
                }
                required={[
                  "courseName",
                  "description",
                  "price",
                  "duration",
                  "category",
                ].includes(field)}
              />
            </div>
          ))}

          <div>
            <label className="block font-semibold ">Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 h-32 object-cover rounded"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Creating..." : "Create Course"}
          </button>

          {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
