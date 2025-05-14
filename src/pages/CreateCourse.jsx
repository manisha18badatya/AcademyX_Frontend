import React from "react";
import "../Stylesheets/Courseform.css";
import ThumbnailUploader from "../components/ThumbnailUploader";
import AttachmentUploader from "../components/AttachmentUploader";
import PublishingOptions from "../components/PublishingOptions";
import CourseForm from "../components/CourseForm";
import Navbar from "../components/navbar";

const CreateCoursePage = () => {
  return (
    <div>
      <Navbar />
      <div className="create-course-container">
        <aside className="sidebar">
          <ThumbnailUploader />
          <AttachmentUploader />
          <PublishingOptions />
        </aside>
        <main className="main-form">
          <h1>Create course</h1>
          <hr />
          <CourseForm />
        </main>
      </div>
    </div>
  );
};

export default CreateCoursePage;
