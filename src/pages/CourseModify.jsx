import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../Stylesheets/base.css";
import UpdateCourse from "../components/CourseCreation/UpdateCourse";
import { FormProvider } from "../context/FormContext";

function CourseModify() {
  return (
    <FormProvider>
      <div className="bodydiv">
        <Navbar />
        <UpdateCourse />
      </div>
      <Footer />
    </FormProvider>
  );
}

export default CourseModify;
